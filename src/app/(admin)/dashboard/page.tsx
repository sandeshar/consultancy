'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/admin/sidebar'
import AdminHeader from '@/components/admin/header'
import AnalyticsSection from '@/components/admin/analytics-section'
import SettingsSection from '@/components/admin/settings-section'
import AdminManagementSection from '@/components/admin/admin-management-section'
import OverviewSection from '@/components/admin/overview-section'

interface Admin {
    id: string
    name: string
    email: string
    role: string
    lastLogin?: Date
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

    useEffect(() => {
        checkAuthentication()
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            if (activeTab === 'overview') {
                fetchContacts()
            }
            if (activeTab === 'clients' && admin?.role === 'super_admin') {
                fetchAdmins()
            }
        }
    }, [activeTab, isAuthenticated, admin])

    const checkAuthentication = async () => {
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
    }

    const fetchContacts = async (status = 'all') => {
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
    }

    const fetchAdmins = async () => {
        try {
            const response = await fetch('/api/admin/manage')
            const data = await response.json()

            if (data.success) {
                setAdmins(data.admins)
            }
        } catch (error) {
            console.error('Fetch admins error:', error)
        }
    }

    const handleLogout = async () => {
        try {
            await fetch('/api/admin/logout', { method: 'POST' })
        } catch (error) {
            console.error('Logout error:', error)
        }
        router.push('/login')
    }

    const updateContactStatus = async (contactId: string, status: string, note?: string) => {
        try {
            const response = await fetch('/api/admin/contacts', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contactId, status, note })
            })

            const data = await response.json()
            if (data.success) {
                fetchContacts() // Refresh the list
            }
        } catch (error) {
            console.error('Update contact error:', error)
        }
    }

    if (isLoading || !isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'unseen': return 'bg-red-100 text-red-800'
            case 'processing': return 'bg-yellow-100 text-yellow-800'
            case 'resolved': return 'bg-green-100 text-green-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        const diff = now.getTime() - date.getTime()
        const hours = Math.floor(diff / (1000 * 60 * 60))

        if (hours < 1) return 'Just now'
        if (hours < 24) return `${hours} hours ago`
        if (hours < 48) return '1 day ago'
        return date.toLocaleDateString()
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

                    {/* Old Overview - Remove after testing */}
                    {activeTab === 'overview-old' && (
                        <div className="space-y-8">
                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200">
                                    <div className="p-5">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <div className="h-8 w-8 bg-blue-500 rounded-md flex items-center justify-center">
                                                    <span className="text-white text-sm">�</span>
                                                </div>
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Total Inquiries</dt>
                                                    <dd className="text-lg font-medium text-gray-900">{contactStats.total}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200">
                                    <div className="p-5">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <div className="h-8 w-8 bg-red-500 rounded-md flex items-center justify-center">
                                                    <span className="text-white text-sm">�️</span>
                                                </div>
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Unseen</dt>
                                                    <dd className="text-lg font-medium text-gray-900">{contactStats.unseen}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200">
                                    <div className="p-5">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <div className="h-8 w-8 bg-yellow-500 rounded-md flex items-center justify-center">
                                                    <span className="text-white text-sm">⚠️</span>
                                                </div>
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Processing</dt>
                                                    <dd className="text-lg font-medium text-gray-900">{contactStats.processing}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200">
                                    <div className="p-5">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <div className="h-8 w-8 bg-green-500 rounded-md flex items-center justify-center">
                                                    <span className="text-white text-sm">✅</span>
                                                </div>
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Resolved</dt>
                                                    <dd className="text-lg font-medium text-gray-900">{contactStats.resolved}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            {/* Recent Clients and Inquiries */}
                            {/* Recent Contacts */}
                            <div className="bg-white shadow-lg rounded-lg border border-gray-200">
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Inquiries</h3>
                                        <button
                                            onClick={() => setActiveTab('inquiries')}
                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            View All →
                                        </button>
                                    </div>
                                    <div className="space-y-3">
                                        {contacts.slice(0, 5).map((contact) => (
                                            <div key={contact._id} className="flex items-center justify-between p-3 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors">
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                                                    <p className="text-sm text-gray-500 truncate">{contact.email}</p>
                                                    <p className="text-sm text-gray-600">{contact.studyLevel}</p>
                                                </div>
                                                <div className="flex-shrink-0 text-right">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-1 ${getStatusColor(contact.status)}`}>
                                                        {contact.status}
                                                    </span>
                                                    <p className="text-xs text-gray-500">{formatDate(contact.sentAt.toString())}</p>
                                                </div>
                                            </div>
                                        ))}
                                        {contacts.length === 0 && (
                                            <p className="text-center text-gray-500 py-8">No inquiries yet</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Analytics Tab */}
                    {activeTab === 'analytics' && (
                        <AnalyticsSection />
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