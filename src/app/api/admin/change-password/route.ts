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

// PUT - Change admin password
export async function PUT(request: NextRequest) {
    try {
        await connectDB();

        const auth = await verifyAdminToken(request);
        if (auth.error) {
            return NextResponse.json({ error: auth.error }, { status: auth.status });
        }

        const { currentPassword, newPassword } = await request.json();

        if (!currentPassword || !newPassword) {
            return NextResponse.json({ 
                success: false, 
                message: 'Current password and new password are required' 
            }, { status: 400 });
        }

        if (newPassword.length < 6) {
            return NextResponse.json({ 
                success: false, 
                message: 'New password must be at least 6 characters long' 
            }, { status: 400 });
        }

        // Verify current password
        const isCurrentPasswordValid = await auth.admin.comparePassword(currentPassword);
        if (!isCurrentPasswordValid) {
            return NextResponse.json({ 
                success: false, 
                message: 'Current password is incorrect' 
            }, { status: 400 });
        }

        // Update password
        auth.admin.password = newPassword;
        await auth.admin.save(); // This will trigger the pre-save hook to hash the password

        return NextResponse.json({
            success: true,
            message: 'Password changed successfully'
        });

    } catch (error) {
        console.error('Password change error:', error);
        return NextResponse.json({ 
            success: false, 
            message: 'Internal server error' 
        }, { status: 500 });
    }
}