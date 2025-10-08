import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/db/db';
import Admin from '@/app/db/admin.schema';
import jwt from 'jsonwebtoken';

// Middleware to verify admin token
async function verifyAdminToken(request: NextRequest) {
    try {
        const token = request.cookies.get('admin-token')?.value;

        if (!token) {
            return { error: 'No token provided', status: 401 };
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any;
        const admin = await Admin.findById(decoded.adminId);

        if (!admin || !admin.isActive) {
            return { error: 'Invalid or inactive admin', status: 401 };
        }

        return { admin, decoded };
    } catch (error) {
        return { error: 'Invalid token', status: 401 };
    }
}

// GET - List all admins (for super_admin only)
export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const auth = await verifyAdminToken(request);
        if (auth.error) {
            return NextResponse.json({ error: auth.error }, { status: auth.status });
        }

        const { admin } = auth;

        // Only super_admin can list all admins
        if (admin.role !== 'super_admin') {
            return NextResponse.json(
                { error: 'Insufficient permissions' },
                { status: 403 }
            );
        }

        const admins = await Admin.find({})
            .select('-password')
            .populate('createdBy', 'name email')
            .sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            admins
        });

    } catch (error) {
        console.error('Get admins error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// POST - Create new admin (for super_admin only)
export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const auth = await verifyAdminToken(request);
        if (auth.error) {
            return NextResponse.json({ error: auth.error }, { status: auth.status });
        }

        const { admin: currentAdmin } = auth;

        // Only super_admin can create new admins
        if (currentAdmin.role !== 'super_admin') {
            return NextResponse.json(
                { error: 'Insufficient permissions' },
                { status: 403 }
            );
        }

        const { email, password, name, role = 'admin' } = await request.json();

        // Validate input
        if (!email || !password || !name) {
            return NextResponse.json(
                { error: 'Email, password, and name are required' },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: 'Password must be at least 6 characters long' },
                { status: 400 }
            );
        }

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email: email.toLowerCase() });
        if (existingAdmin) {
            return NextResponse.json(
                { error: 'Admin with this email already exists' },
                { status: 409 }
            );
        }

        // Create new admin
        const newAdmin = new Admin({
            email: email.toLowerCase(),
            password,
            name,
            role,
            createdBy: currentAdmin._id
        });

        await newAdmin.save();

        return NextResponse.json({
            success: true,
            message: 'Admin created successfully',
            admin: {
                id: newAdmin._id,
                email: newAdmin.email,
                name: newAdmin.name,
                role: newAdmin.role,
                isActive: newAdmin.isActive,
                createdAt: newAdmin.createdAt
            }
        });

    } catch (error) {
        console.error('Create admin error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// PUT - Update admin (for super_admin only)
export async function PUT(request: NextRequest) {
    try {
        await connectDB();

        const auth = await verifyAdminToken(request);
        if (auth.error) {
            return NextResponse.json({ error: auth.error }, { status: auth.status });
        }

        const { admin: currentAdmin } = auth;

        // Only super_admin can update admins
        if (currentAdmin.role !== 'super_admin') {
            return NextResponse.json(
                { error: 'Insufficient permissions' },
                { status: 403 }
            );
        }

        const { adminId, name, email, isActive, role, newPassword } = await request.json();

        if (!adminId) {
            return NextResponse.json(
                { error: 'Admin ID is required' },
                { status: 400 }
            );
        }

        const adminToUpdate = await Admin.findById(adminId);
        if (!adminToUpdate) {
            return NextResponse.json(
                { error: 'Admin not found' },
                { status: 404 }
            );
        }

        // Check if email is being updated and if it already exists
        if (email && email.toLowerCase() !== adminToUpdate.email) {
            const existingAdmin = await Admin.findOne({ 
                email: email.toLowerCase(),
                _id: { $ne: adminId }
            });
            if (existingAdmin) {
                return NextResponse.json(
                    { error: 'Admin with this email already exists' },
                    { status: 409 }
                );
            }
        }

        // Prevent super_admin from deactivating themselves
        if (adminToUpdate._id.toString() === currentAdmin._id.toString() && isActive === false) {
            return NextResponse.json(
                { error: 'Cannot deactivate your own account' },
                { status: 400 }
            );
        }

        // Validate password if provided
        if (newPassword !== undefined) {
            if (typeof newPassword !== 'string' || newPassword.length < 6) {
                return NextResponse.json(
                    { error: 'Password must be at least 6 characters long' },
                    { status: 400 }
                );
            }
        }

        // Update fields
        if (name !== undefined) adminToUpdate.name = name;
        if (email !== undefined) adminToUpdate.email = email.toLowerCase();
        if (isActive !== undefined) adminToUpdate.isActive = isActive;
        if (role !== undefined) adminToUpdate.role = role;
        if (newPassword !== undefined) adminToUpdate.password = newPassword;

        await adminToUpdate.save();

        const message = newPassword !== undefined ? 
            'Admin password changed successfully' : 
            'Admin updated successfully';

        return NextResponse.json({
            success: true,
            message,
            admin: adminToUpdate
        });

    } catch (error) {
        console.error('Update admin error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}