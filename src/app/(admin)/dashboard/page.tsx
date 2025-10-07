'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/admin/sidebar'
import AdminHeader from '@/components/admin/header'

const Dashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [activeTab, setActiveTab] = useState('overview')
    const [stats, setStats] = useState({
        totalClients: 47,
        activeProjects: 12,
        pendingInquiries: 8,
        monthlyRevenue: 45000
    })
    const router = useRouter()

    useEffect(() => {
        // Check authentication
        const authStatus = localStorage.getItem('isAdminAuthenticated')
        if (authStatus === 'true') {
            setIsAuthenticated(true)
        } else {
            router.push('/login')
        }
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuthenticated')
        router.push('/login')
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    const recentClients = [
        { id: 1, name: 'TechCorp Inc.', project: 'Website Redesign', status: 'Active', value: '$15,000' },
        { id: 2, name: 'StartupXYZ', project: 'Mobile App', status: 'In Progress', value: '$25,000' },
        { id: 3, name: 'Enterprise Ltd.', project: 'Consulting', status: 'Completed', value: '$8,000' },
        { id: 4, name: 'Local Business', project: 'SEO Optimization', status: 'Active', value: '$5,000' },
    ]

    const recentInquiries = [
        { id: 1, name: 'John Smith', email: 'john@example.com', subject: 'Web Development', date: '2 hours ago' },
        { id: 2, name: 'Sarah Johnson', email: 'sarah@company.com', subject: 'Digital Marketing', date: '5 hours ago' },
        { id: 3, name: 'Mike Wilson', email: 'mike@startup.io', subject: 'App Development', date: '1 day ago' },
    ]

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
                                                    <span className="text-white text-sm">👥</span>
                                                </div>
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Total Clients</dt>
                                                    <dd className="text-lg font-medium text-gray-900">{stats.totalClients}</dd>
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
                                                    <span className="text-white text-sm">💼</span>
                                                </div>
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Active Projects</dt>
                                                    <dd className="text-lg font-medium text-gray-900">{stats.activeProjects}</dd>
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
                                                    <span className="text-white text-sm">📧</span>
                                                </div>
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Pending Inquiries</dt>
                                                    <dd className="text-lg font-medium text-gray-900">{stats.pendingInquiries}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200">
                                    <div className="p-5">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <div className="h-8 w-8 bg-purple-500 rounded-md flex items-center justify-center">
                                                    <span className="text-white text-sm">💰</span>
                                                </div>
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">Monthly Revenue</dt>
                                                    <dd className="text-lg font-medium text-gray-900">${stats.monthlyRevenue.toLocaleString()}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Clients and Inquiries */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Recent Clients */}
                                <div className="bg-white shadow-lg rounded-lg border border-gray-200">
                                    <div className="px-4 py-5 sm:p-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Clients</h3>
                                        <div className="space-y-3">
                                            {recentClients.map((client) => (
                                                <div key={client.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors">
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">{client.name}</p>
                                                        <p className="text-sm text-gray-500">{client.project}</p>
                                                    </div>
                                                    <div className="flex-shrink-0 text-right">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${client.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                                client.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                                    'bg-gray-100 text-gray-800'
                                                            }`}>
                                                            {client.status}
                                                        </span>
                                                        <p className="text-sm font-medium text-gray-900 mt-1">{client.value}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Inquiries */}
                                <div className="bg-white shadow-lg rounded-lg border border-gray-200">
                                    <div className="px-4 py-5 sm:p-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Inquiries</h3>
                                        <div className="space-y-3">
                                            {recentInquiries.map((inquiry) => (
                                                <div key={inquiry.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors">
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">{inquiry.name}</p>
                                                        <p className="text-sm text-gray-500 truncate">{inquiry.email}</p>
                                                        <p className="text-sm text-gray-600">{inquiry.subject}</p>
                                                    </div>
                                                    <div className="flex-shrink-0 text-right">
                                                        <p className="text-xs text-gray-500">{inquiry.date}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Other Tab Content Placeholders */}
                    {activeTab !== 'overview' && (
                        <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">🚧</div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2 capitalize">
                                    {activeTab} Section
                                </h3>
                                <p className="text-gray-500">
                                    This section is under development. You can implement the specific functionality for {activeTab} here.
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