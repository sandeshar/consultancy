'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/admin/sidebar'
import AdminHeader from '@/components/admin/header'

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
            if (activeTab === 'overview' || activeTab === 'inquiries') {
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

                    {/* Inquiries Tab */}
                    {activeTab === 'inquiries' && (
                        <div className="bg-white shadow-lg rounded-lg border border-gray-200">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Inquiries</h3>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => fetchContacts('unseen')}
                                            className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200"
                                        >
                                            Unseen ({contactStats.unseen})
                                        </button>
                                        <button
                                            onClick={() => fetchContacts('processing')}
                                            className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200"
                                        >
                                            Processing ({contactStats.processing})
                                        </button>
                                        <button
                                            onClick={() => fetchContacts('resolved')}
                                            className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200"
                                        >
                                            Resolved ({contactStats.resolved})
                                        </button>
                                        <button
                                            onClick={() => fetchContacts('all')}
                                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                                        >
                                            All ({contactStats.total})
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {contacts.map((contact) => (
                                        <div key={contact._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <h4 className="text-lg font-medium text-gray-900">{contact.name}</h4>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                                                            {contact.status}
                                                        </span>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                                                        <p><strong>Email:</strong> {contact.email}</p>
                                                        <p><strong>Phone:</strong> {contact.phone}</p>
                                                        <p><strong>Study Level:</strong> {contact.studyLevel}</p>
                                                        {contact.fieldOfStudy && <p><strong>Field:</strong> {contact.fieldOfStudy}</p>}
                                                        {contact.country && <p><strong>Country:</strong> {contact.country}</p>}
                                                        <p><strong>Received:</strong> {formatDate(contact.sentAt.toString())}</p>
                                                    </div>
                                                    {contact.message && (
                                                        <div className="mb-3">
                                                            <p className="text-sm text-gray-700"><strong>Message:</strong></p>
                                                            <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded mt-1">{contact.message}</p>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col space-y-2 ml-4">
                                                    <select
                                                        value={contact.status}
                                                        onChange={(e) => updateContactStatus(contact._id, e.target.value)}
                                                        className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                    >
                                                        <option value="unseen">Unseen</option>
                                                        <option value="processing">Processing</option>
                                                        <option value="resolved">Resolved</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Notes section */}
                                            {contact.notes.length > 0 && (
                                                <div className="mt-3 pt-3 border-t border-gray-200">
                                                    <h5 className="text-sm font-medium text-gray-700 mb-2">Notes:</h5>
                                                    <div className="space-y-2">
                                                        {contact.notes.map((note, index) => (
                                                            <div key={index} className="text-sm">
                                                                <p className="text-gray-600">{note.content}</p>
                                                                <p className="text-xs text-gray-400">
                                                                    by {note.addedBy.name} • {formatDate(note.addedAt.toString())}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    {contacts.length === 0 && (
                                        <p className="text-center text-gray-500 py-8">No contacts found</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Clients/Admin Management Tab (Super Admin Only) */}
                    {activeTab === 'clients' && admin?.role === 'super_admin' && (
                        <div className="bg-white shadow-lg rounded-lg border border-gray-200">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Admin Management</h3>
                                    <button
                                        onClick={() => {/* Add admin modal logic */ }}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Add Admin
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {admins.map((adminUser) => (
                                        <div key={adminUser.id} className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="text-lg font-medium text-gray-900">{adminUser.name}</h4>
                                                    <p className="text-sm text-gray-600">{adminUser.email}</p>
                                                    <div className="flex items-center space-x-2 mt-1">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${adminUser.role === 'super_admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                                                            }`}>
                                                            {adminUser.role}
                                                        </span>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${(adminUser as any).isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                            }`}>
                                                            {(adminUser as any).isActive ? 'Active' : 'Inactive'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-500">
                                                        Last login: {adminUser.lastLogin ? formatDate(adminUser.lastLogin.toString()) : 'Never'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Other Tab Content Placeholders */}
                    {(activeTab === 'projects' || activeTab === 'analytics' || activeTab === 'settings' || (activeTab === 'clients' && admin?.role !== 'super_admin')) && (
                        <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">🚧</div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2 capitalize">
                                    {activeTab === 'clients' && admin?.role !== 'super_admin' ? 'Access Denied' : `${activeTab} Section`}
                                </h3>
                                <p className="text-gray-500">
                                    {activeTab === 'clients' && admin?.role !== 'super_admin'
                                        ? 'Only super admins can manage other administrators.'
                                        : `This section is under development. You can implement the specific functionality for ${activeTab} here.`
                                    }
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;