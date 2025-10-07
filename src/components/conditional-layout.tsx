'use client'

import { usePathname } from 'next/navigation'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ConditionalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname()

    // Check if we're in admin routes
    const isAdminRoute = pathname?.startsWith('/dashboard') || pathname?.startsWith('/login')

    if (isAdminRoute) {
        return <>{children}</>
    }

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}