'use client'

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
    sentAt: Date
    updatedAt: Date
}

interface ContactStats {
    unseen: number
    processing: number
    resolved: number
    total: number
}

interface OverviewProps {
    contacts: Contact[]
    contactStats: ContactStats
    onTabChange: (tab: string) => void
}

const OverviewSection = ({ contacts, contactStats, onTabChange }: OverviewProps) => {
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

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'unseen': return 'bg-red-100 text-red-800'
            case 'processing': return 'bg-yellow-100 text-yellow-800'
            case 'resolved': return 'bg-green-100 text-green-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    // Quick stats for overview
    const todayContacts = contacts.filter(contact => {
        const today = new Date()
        const contactDate = new Date(contact.sentAt)
        return contactDate.toDateString() === today.toDateString()
    }).length

    const thisWeekContacts = contacts.filter(contact => {
        const weekAgo = new Date()
        weekAgo.setDate(weekAgo.getDate() - 7)
        const contactDate = new Date(contact.sentAt)
        return contactDate >= weekAgo
    }).length

    // Calculate average response time based on resolved inquiries
    const calculateResponseRate = () => {
        const resolvedContacts = contacts.filter(contact => contact.status === 'resolved')
        if (resolvedContacts.length === 0) return 'N/A'

        const totalHours = resolvedContacts.reduce((acc, contact) => {
            const sentDate = new Date(contact.sentAt)
            const updatedDate = new Date(contact.updatedAt)
            const diffHours = Math.max(1, Math.floor((updatedDate.getTime() - sentDate.getTime()) / (1000 * 60 * 60)))
            return acc + diffHours
        }, 0)

        const avgHours = Math.round(totalHours / resolvedContacts.length * 10) / 10
        return avgHours > 24 ? `${Math.round(avgHours / 24)}d` : `${avgHours}h`
    }

    const responseRate = calculateResponseRate()

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg text-white p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                        <p className="text-blue-100">Track your business performance and manage customer inquiries</p>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Total Inquiries</p>
                            <p className="text-2xl font-bold text-gray-900">{contactStats.total}</p>
                            <p className="text-xs text-gray-500 mt-1">All time</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                        <div className="p-3 bg-red-100 rounded-lg">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Needs Attention</p>
                            <p className="text-2xl font-bold text-gray-900">{contactStats.unseen}</p>
                            <p className="text-xs text-gray-500 mt-1">Unseen inquiries</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">In Progress</p>
                            <p className="text-2xl font-bold text-gray-900">{contactStats.processing}</p>
                            <p className="text-xs text-gray-500 mt-1">Being processed</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Resolved</p>
                            <p className="text-2xl font-bold text-gray-900">{contactStats.resolved}</p>
                            <p className="text-xs text-gray-500 mt-1">Successfully handled</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                        onClick={() => onTabChange('inquiries')}
                        className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center group"
                    >
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-700 transition-colors">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-900">View Inquiries</p>
                    </button>

                    <button
                        onClick={() => onTabChange('clients')}
                        className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center group"
                    >
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-green-700 transition-colors">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-900">Manage Admins</p>
                    </button>

                    <button
                        onClick={() => onTabChange('inquiries')}
                        className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center group"
                    >
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-700 transition-colors">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-900">View Inquiries</p>
                    </button>

                    <button
                        onClick={() => onTabChange('settings')}
                        className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center group"
                    >
                        <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-gray-700 transition-colors">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-900">Settings</p>
                    </button>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Inquiries */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">Recent Inquiries</h3>
                            <button
                                onClick={() => onTabChange('inquiries')}
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1"
                            >
                                <span>View All</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="space-y-4">
                            {contacts.slice(0, 5).map((contact) => (
                                <div key={contact._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                                        <p className="text-sm text-gray-500 truncate">{contact.email}</p>
                                        <p className="text-xs text-gray-400">{contact.studyLevel}</p>
                                    </div>
                                    <div className="flex flex-col items-end space-y-1">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                                            {contact.status}
                                        </span>
                                        <span className="text-xs text-gray-500">{formatDate(contact.sentAt.toString())}</span>
                                    </div>
                                </div>
                            ))}
                            {contacts.length === 0 && (
                                <p className="text-center text-gray-500 py-8">No inquiries yet</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Activity Summary</h3>
                    </div>

                    <div className="p-6">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Today's Inquiries</p>
                                        <p className="text-xs text-gray-500">New contacts received</p>
                                    </div>
                                </div>
                                <span className="text-2xl font-bold text-blue-600">{todayContacts}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">This Week</p>
                                        <p className="text-xs text-gray-500">Weekly inquiries</p>
                                    </div>
                                </div>
                                <span className="text-2xl font-bold text-green-600">{thisWeekContacts}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Response Rate</p>
                                        <p className="text-xs text-gray-500">Avg. response time</p>
                                    </div>
                                </div>
                                <span className="text-lg font-bold text-purple-600">{responseRate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewSection