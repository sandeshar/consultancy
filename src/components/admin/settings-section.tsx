'use client'

import { useState } from 'react'

interface SettingsProps {
    admin: {
        id: string
        name: string
        email: string
        role: string
    } | null
}

const SettingsSection = ({ admin }: SettingsProps) => {
    const [activeSection, setActiveSection] = useState('profile')
    const [formData, setFormData] = useState({
        name: admin?.name || '',
        email: admin?.email || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [siteSettings, setSiteSettings] = useState({
        siteName: 'Consultancy Services',
        contactEmail: 'info@consultancy.com',
        phone: '+1 (555) 123-4567',
        address: '123 Business St, City, Country',
        timezone: 'UTC-5',
        maintenanceMode: false
    })

    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked
            setSiteSettings(prev => ({ ...prev, [name]: checked }))
        } else if (name in formData) {
            setFormData(prev => ({ ...prev, [name]: value }))
        } else {
            setSiteSettings(prev => ({ ...prev, [name]: value }))
        }
    }

    const settingSections = [
        { id: 'profile', label: 'Profile', icon: '👤' },
        { id: 'security', label: 'Security', icon: '🔒' },
        { id: 'site', label: 'Site Settings', icon: '⚙️' }
    ]

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setMessage('')

        try {
            const response = await fetch('/api/admin/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email
                }),
            })

            const data = await response.json()
            if (data.success) {
                setMessage('Profile updated successfully!')
            } else {
                setMessage('Error updating profile: ' + data.message)
            }
        } catch (error) {
            setMessage('Error updating profile')
        } finally {
            setIsLoading(false)
        }
    }

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault()

        if (formData.newPassword !== formData.confirmPassword) {
            setMessage('New passwords do not match')
            return
        }

        if (formData.newPassword.length < 6) {
            setMessage('New password must be at least 6 characters')
            return
        }

        setIsLoading(true)
        setMessage('')

        try {
            const response = await fetch('/api/admin/change-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword
                }),
            })

            const data = await response.json()
            if (data.success) {
                setMessage('Password changed successfully!')
                setFormData(prev => ({
                    ...prev,
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                }))
            } else {
                setMessage('Error changing password: ' + data.message)
            }
        } catch (error) {
            setMessage('Error changing password')
        } finally {
            setIsLoading(false)
        }
    }

    const handleSiteSettingsUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setMessage('')

        try {
            // In a real app, this would save to database
            setTimeout(() => {
                setMessage('Site settings updated successfully!')
                setIsLoading(false)
            }, 1000)
        } catch (error) {
            setMessage('Error updating site settings')
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Settings</h2>
                <p className="text-indigo-100">Manage your account and application settings</p>
            </div>

            {/* Message Display */}
            {message && (
                <div className={`p-4 rounded-lg ${message.includes('Error') ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                    {message}
                </div>
            )}

            <div className="bg-white rounded-lg shadow border overflow-hidden">
                {/* Tabs */}
                <div className="border-b border-gray-200">
                    <div className="flex space-x-8 px-6">
                        {settingSections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${activeSection === section.id
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <span>{section.icon}</span>
                                <span>{section.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Profile Settings */}
                    {activeSection === 'profile' && (
                        <div className="max-w-2xl">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
                            <form onSubmit={handleProfileUpdate} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                    <input
                                        type="text"
                                        value={admin?.role || 'N/A'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                                        disabled
                                    />
                                </div>
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Updating...' : 'Update Profile'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Security Settings */}
                    {activeSection === 'security' && (
                        <div className="max-w-2xl">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
                            <form onSubmit={handlePasswordChange} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                        minLength={6}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        required
                                        minLength={6}
                                    />
                                </div>
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Changing...' : 'Change Password'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Site Settings */}
                    {activeSection === 'site' && (
                        <div className="max-w-2xl">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Configuration</h3>
                            <form onSubmit={handleSiteSettingsUpdate} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
                                    <input
                                        type="text"
                                        name="siteName"
                                        value={siteSettings.siteName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                                    <input
                                        type="email"
                                        name="contactEmail"
                                        value={siteSettings.contactEmail}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={siteSettings.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <textarea
                                        name="address"
                                        value={siteSettings.address}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
                                    <select
                                        name="timezone"
                                        value={siteSettings.timezone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option value="UTC-12">UTC-12</option>
                                        <option value="UTC-11">UTC-11</option>
                                        <option value="UTC-10">UTC-10</option>
                                        <option value="UTC-9">UTC-9</option>
                                        <option value="UTC-8">UTC-8</option>
                                        <option value="UTC-7">UTC-7</option>
                                        <option value="UTC-6">UTC-6</option>
                                        <option value="UTC-5">UTC-5</option>
                                        <option value="UTC-4">UTC-4</option>
                                        <option value="UTC-3">UTC-3</option>
                                        <option value="UTC-2">UTC-2</option>
                                        <option value="UTC-1">UTC-1</option>
                                        <option value="UTC+0">UTC+0</option>
                                        <option value="UTC+1">UTC+1</option>
                                        <option value="UTC+2">UTC+2</option>
                                        <option value="UTC+3">UTC+3</option>
                                        <option value="UTC+4">UTC+4</option>
                                        <option value="UTC+5">UTC+5</option>
                                        <option value="UTC+6">UTC+6</option>
                                        <option value="UTC+7">UTC+7</option>
                                        <option value="UTC+8">UTC+8</option>
                                        <option value="UTC+9">UTC+9</option>
                                        <option value="UTC+10">UTC+10</option>
                                        <option value="UTC+11">UTC+11</option>
                                        <option value="UTC+12">UTC+12</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-medium text-gray-700">System Settings</h4>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="maintenanceMode"
                                            checked={siteSettings.maintenanceMode}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label className="ml-2 text-sm text-gray-700">Maintenance Mode</label>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Saving...' : 'Save Settings'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SettingsSection