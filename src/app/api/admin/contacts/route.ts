import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/db/db';
import Contact from '@/app/db/contact.schema';
import Admin from '@/app/db/admin.schema';
import jwt from 'jsonwebtoken';

// Middleware to verify admin token
async function verifyAdminToken(request: NextRequest) {
    try {
        const token = request.cookies.get('admin-token')?.value;

        if (!token) {
            return { error: 'No token provided', status: 401 };
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as { adminId: string };
        const admin = await Admin.findById(decoded.adminId);

        if (!admin || !admin.isActive) {
            return { error: 'Invalid or inactive admin', status: 401 };
        }

        return { admin, decoded };
    } catch (error) {
        return { error: 'Invalid token', status: 401 };
    }
}

// GET - List contacts with pagination and filtering
export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const auth = await verifyAdminToken(request);
        if (auth.error) {
            return NextResponse.json({ error: auth.error }, { status: auth.status });
        }

        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status') || 'all';
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const search = searchParams.get('search') || '';
        const statsOnly = searchParams.get('stats') === 'true';

        // Build filter
        const filter: Record<string, any> = {};
        if (status !== 'all') {
            filter.status = status;
        }
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { phone: { $regex: search, $options: 'i' } }
            ];
        }

        // Get total count for pagination
        const total = await Contact.countDocuments(filter);

        // Get contacts with pagination
        const contacts = await Contact.find(filter)
            .populate('assignedTo', 'name email')
            .populate('notes.addedBy', 'name email')
            .sort({ sentAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        // Get status counts for dashboard
        const statusCounts = await Contact.aggregate([
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            }
        ]);



        const counts = {
            unseen: 0,
            processing: 0,
            resolved: 0,
            total: 0
        };

        statusCounts.forEach(item => {
            if (item._id === null || item._id === undefined || item._id === '') {
                // Treat null/undefined/empty status as 'unseen'
                counts.unseen += item.count;
                counts.total += item.count;
            } else if (item._id && typeof item._id === 'string') {
                const status = item._id as keyof typeof counts;
                if (status !== 'total' && counts.hasOwnProperty(status)) {
                    counts[status] = item.count;
                    counts.total += item.count;
                }
            }
        });



        // If only stats are requested, return just the counts
        if (statsOnly) {
            return NextResponse.json({
                success: true,
                stats: counts
            });
        }

        return NextResponse.json({
            success: true,
            contacts,
            pagination: {
                current: page,
                pages: Math.ceil(total / limit),
                total,
                limit
            },
            counts
        });

    } catch (error) {
        console.error('Get contacts error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// PUT - Update contact status/assignment
export async function PUT(request: NextRequest) {
    try {
        await connectDB();

        const auth = await verifyAdminToken(request);
        if (auth.error) {
            return NextResponse.json({ error: auth.error }, { status: auth.status });
        }

        const { admin } = auth;
        const { contactId, status, assignedTo, note } = await request.json();

        if (!contactId) {
            return NextResponse.json(
                { error: 'Contact ID is required' },
                { status: 400 }
            );
        }

        const contact = await Contact.findById(contactId);
        if (!contact) {
            return NextResponse.json(
                { error: 'Contact not found' },
                { status: 404 }
            );
        }

        // Update status if provided
        if (status) {
            contact.status = status;
        }

        // Update assignment if provided
        if (assignedTo !== undefined) {
            contact.assignedTo = assignedTo;
        }

        // Add note if provided
        if (note) {
            contact.notes.push({
                content: note,
                addedBy: admin._id,
                addedAt: new Date()
            });
        }

        await contact.save();

        // Populate the updated contact
        const updatedContact = await Contact.findById(contactId)
            .populate('assignedTo', 'name email')
            .populate('notes.addedBy', 'name email');

        return NextResponse.json({
            success: true,
            message: 'Contact updated successfully',
            contact: updatedContact
        });

    } catch (error) {
        console.error('Update contact error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}