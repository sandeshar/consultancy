import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/db/db';
import jwt from 'jsonwebtoken';

// Middleware to verify admin token
async function verifyAdminToken(request: NextRequest) {
    try {
        const token = request.cookies.get('admin-token')?.value;

        if (!token) {
            return { error: 'No token provided', status: 401 };
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as { adminId: string };

        return { decoded };
    } catch (error) {
        return { error: 'Invalid token', status: 401 };
    }
}

// Default site settings
const defaultSettings = {
    siteName: 'B&B Education Consultancy',
    contactEmail: 'bandbeducation2025@gmail.com',
    phone: '078-595444, 9765638444, 9857087230, 9867903342',
    address: 'Devchuli-13, Daldale, Nawalparasi, Nepal',
    timezone: 'UTC+5:45',
    maintenanceMode: false
};

// GET - Get site settings
export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const auth = await verifyAdminToken(request);
        if (auth.error) {
            return NextResponse.json({ error: auth.error }, { status: auth.status });
        }

        // For now, return default settings. In a real app, these would be stored in the database
        return NextResponse.json({
            success: true,
            settings: defaultSettings
        });

    } catch (error) {
        console.error('Get settings error:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal server error'
        }, { status: 500 });
    }
}

// PUT - Update site settings
export async function PUT(request: NextRequest) {
    try {
        await connectDB();

        const auth = await verifyAdminToken(request);
        if (auth.error) {
            return NextResponse.json({ error: auth.error }, { status: auth.status });
        }

        const { siteName, contactEmail, phone, address, timezone, maintenanceMode } = await request.json();

        if (!siteName || !contactEmail) {
            return NextResponse.json({
                success: false,
                message: 'Site name and contact email are required'
            }, { status: 400 });
        }

        // For now, just validate and return success. In a real app, these would be saved to the database
        const updatedSettings = {
            siteName,
            contactEmail,
            phone,
            address,
            timezone,
            maintenanceMode: Boolean(maintenanceMode)
        };

        return NextResponse.json({
            success: true,
            message: 'Settings updated successfully',
            settings: updatedSettings
        });

    } catch (error) {
        console.error('Update settings error:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal server error'
        }, { status: 500 });
    }
}