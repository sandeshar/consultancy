import { NextResponse } from 'next/server';
import connectDB from '@/app/db/db';
import Admin from '@/app/db/admin.schema';

export async function POST() {
    try {
        await connectDB();

        // Check if any admin already exists
        const existingAdmin = await Admin.findOne({});
        if (existingAdmin) {
            return NextResponse.json(
                { error: 'Admin already exists. Use the dashboard to create additional admins.' },
                { status: 409 }
            );
        }

        // Create initial super admin
        const superAdmin = new Admin({
            email: 'admin@consultancy.com',
            password: 'admin123', // This will be hashed automatically
            name: 'Super Administrator',
            role: 'super_admin'
        });

        await superAdmin.save();

        return NextResponse.json({
            success: true,
            message: 'Super admin created successfully',
            credentials: {
                email: 'admin@consultancy.com',
                password: 'admin123',
                note: 'Please change the password after first login'
            }
        });

    } catch (error) {
        console.error('Seed admin error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}