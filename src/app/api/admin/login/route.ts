import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/db/db';
import Admin from '@/app/db/admin.schema';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const { email, password } = await request.json();

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Find admin by email
        const admin = await Admin.findOne({ email: email.toLowerCase() });
        if (!admin) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Check if admin is active
        if (!admin.isActive) {
            return NextResponse.json(
                { error: 'Account is deactivated' },
                { status: 401 }
            );
        }

        // Verify password
        const isPasswordValid = await admin.comparePassword(password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Update last login
        admin.lastLogin = new Date();
        await admin.save();

        // Create JWT token
        const token = jwt.sign(
            {
                adminId: admin._id,
                email: admin.email,
                role: admin.role
            },
            process.env.JWT_SECRET || 'fallback-secret',
            { expiresIn: '24h' }
        );

        // Create response
        const response = NextResponse.json({
            success: true,
            message: 'Login successful',
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
                lastLogin: admin.lastLogin
            }
        });

        // Set HTTP-only cookie
        response.cookies.set('admin-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        return response;

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}