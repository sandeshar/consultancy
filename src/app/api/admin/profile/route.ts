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

// PUT - Update admin profile
export async function PUT(request: NextRequest) {
    try {
        await connectDB();

        const auth = await verifyAdminToken(request);
        if (auth.error) {
            return NextResponse.json({ error: auth.error }, { status: auth.status });
        }

        const { name, email } = await request.json();

        if (!name || !email) {
            return NextResponse.json({
                success: false,
                message: 'Name and email are required'
            }, { status: 400 });
        }

        // Check if email already exists for another admin
        const existingAdmin = await Admin.findOne({
            email,
            _id: { $ne: auth.admin._id }
        });

        if (existingAdmin) {
            return NextResponse.json({
                success: false,
                message: 'Email already exists'
            }, { status: 400 });
        }

        // Update admin profile
        const updatedAdmin = await Admin.findByIdAndUpdate(
            auth.admin._id,
            { name, email },
            { new: true }
        );

        return NextResponse.json({
            success: true,
            message: 'Profile updated successfully',
            admin: {
                id: updatedAdmin._id,
                name: updatedAdmin.name,
                email: updatedAdmin.email,
                role: updatedAdmin.role
            }
        });

    } catch (error) {
        console.error('Profile update error:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal server error'
        }, { status: 500 });
    }
}