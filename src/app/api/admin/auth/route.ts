import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/db/db';
import Admin from '@/app/db/admin.schema';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const token = request.cookies.get('admin-token')?.value;

        if (!token) {
            return NextResponse.json(
                { authenticated: false },
                { status: 401 }
            );
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any;
        const admin = await Admin.findById(decoded.adminId).select('-password');

        if (!admin || !admin.isActive) {
            return NextResponse.json(
                { authenticated: false },
                { status: 401 }
            );
        }

        return NextResponse.json({
            authenticated: true,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
                lastLogin: admin.lastLogin
            }
        });

    } catch (error) {
        return NextResponse.json(
            { authenticated: false },
            { status: 401 }
        );
    }
}