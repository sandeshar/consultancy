'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/admin/sidebar'
import AdminHeader from '@/components/admin/header'
import SettingsSection from '@/components/admin/settings-section'
import AdminManagementSection from '@/components/admin/admin-management-section'
import OverviewSection from '@/components/admin/overview-section'
import InquiriesSection from '@/components/admin/inquiries-section'

interface Admin {
    id: string
    name: string
    email: string
    role: string
    isActive: boolean
    lastLogin?: Date
    createdAt: Date
    createdBy?: {
        name: string
        email: string
    }
}

interface Contact {
    _id: string
    name: string
    email: string
    phone: string
    country?: string
    studyLevel: string
    fieldOfStudy?: string
    message?: string
    status: 'unseen' | 'processing' | 'resolved'
    assignedTo?: Admin
    notes: Array<{
        content: string
        addedBy: Admin
        addedAt: Date
    }>
    sentAt: Date
    updatedAt: Date
}

interface ContactStats {
    unseen: number
    processing: number
    resolved: number
    total: number
}

const Dashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState<Admin | null>(null)
    const [activeTab, setActiveTab] = useState('overview')
    const [contacts, setContacts] = useState<Contact[]>([])
    const [contactStats, setContactStats] = useState<ContactStats>({
        unseen: 0,
        processing: 0,
        resolved: 0,
        total: 0
    })
    const [admins, setAdmins] = useState<Admin[]>([])
    const router = useRouter()

    const fetchContacts = useCallback(async (status = 'all') => {
        try {
            const response = await fetch(`/api/admin/contacts?status=${status}&limit=20`)
            const data = await response.json()

            if (data.success) {
                setContacts(data.contacts)
                setContactStats(data.counts)
            }
        } catch (error) {
            console.error('Fetch contacts error:', error)
        }
    }, [])

    const fetchAdmins = useCallback(async () => {
        try {
            const response = await fetch('/api/admin/manage')
            const data = await response.json()

            if (data.success) {
                setAdmins(data.admins)
            }
        } catch (error) {
            console.error('Fetch admins error:', error)
        }
    }, [])

    const checkAuthentication = useCallback(async () => {
        try {
            const response = await fetch('/api/admin/auth')
            const data = await response.json()

            if (data.authenticated) {
                setIsAuthenticated(true)
                setAdmin(data.admin)
            } else {
                router.push('/login')
            }
        } catch (error) {
            console.error('Auth check error:', error)
            router.push('/login')
        } finally {
            setIsLoading(false)
        }
    }, [router])

    useEffect(() => {
        checkAuthentication()
    }, [checkAuthentication])

    useEffect(() => {
        if (isAuthenticated) {
            if (activeTab === 'overview' || activeTab === 'inquiries') {
                fetchContacts()
            }
            if (activeTab === 'clients' && admin?.role === 'super_admin') {
                fetchAdmins()
            }
        }
    }, [activeTab, isAuthenticated, admin, fetchContacts, fetchAdmins])

    const handleLogout = async () => {
        try {
            await fetch('/api/admin/logout', { method: 'POST' })
        } catch (error) {
            console.error('Logout error:', error)
        }
        router.push('/login')
    }



    if (isLoading || !isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        )
    }



    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onLogout={handleLogout}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <AdminHeader
                    title={activeTab === 'overview' ? 'Dashboard Overview' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    subtitle={activeTab === 'overview' ? 'Welcome back! Here\'s what\'s happening.' : `Manage your ${activeTab} here.`}
                />

                {/* Content Area */}
                <div className="flex-1 p-6">

                    {/* Overview Tab Content */}
                    {activeTab === 'overview' && (
                        <OverviewSection
                            contacts={contacts}
                            contactStats={contactStats}
                            onTabChange={setActiveTab}
                        />
                    )}

                    {/* Inquiries Tab */}
                    {activeTab === 'inquiries' && (
                        <InquiriesSection />
                    )}

                    {/* Admin Management Tab */}
                    {activeTab === 'clients' && (
                        <AdminManagementSection
                            admins={admins}
                            currentAdmin={admin}
                            onRefresh={fetchAdmins}
                        />
                    )}

                    {/* Settings Tab */}
                    {activeTab === 'settings' && (
                        <SettingsSection admin={admin} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;