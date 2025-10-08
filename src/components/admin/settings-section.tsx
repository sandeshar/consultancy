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
        emailNotifications: true,
        smsNotifications: false,
        weeklyReports: true,
        maintenanceMode: false
    })

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
        { id: 'notifications', label: 'Notifications', icon: '🔔' },
        { id: 'site', label: 'Site Settings', icon: '⚙️' },
        { id: 'backup', label: 'Backup & Export', icon: '💾' }
    ]

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {/* Settings Navigation */}
            <div className="lg:w-64">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                    <nav className="space-y-2">
                        {settingSections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                                    activeSection === section.id
                                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                        : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                <span className="text-lg">{section.icon}</span>
                                <span className="font-medium">{section.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Settings Content */}
            <div className="flex-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {/* Profile Settings */}
                    {activeSection === 'profile' && (
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile Settings</h3>
                            <form className="space-y-6">
                                <div className="flex items-center space-x-6">
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-2xl">
                                            {admin?.name?.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                            Change Avatar
                                        </button>
                                        <p className="text-sm text-gray-500 mt-1">JPG, PNG or SVG. Max size 2MB.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                                    <input
                                        type="text"
                                        value={admin?.role || ''}
                                        disabled
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">Role cannot be changed. Contact super admin for role changes.</p>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Security Settings */}
                    {activeSection === 'security' && (
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h3>
                            <form className="space-y-6">
                                <div>
                                    <h4 className="text-md font-medium text-gray-900 mb-4">Change Password</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                                            <input
                                                type="password"
                                                name="currentPassword"
                                                value={formData.currentPassword}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                                <input
                                                    type="password"
                                                    name="newPassword"
                                                    value={formData.newPassword}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t pt-6">
                                    <h4 className="text-md font-medium text-gray-900 mb-4">Two-Factor Authentication</h4>
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <p className="font-medium text-gray-900">Enable 2FA</p>
                                            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                                        </div>
                                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                            Enable
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Update Security
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Notifications */}
                    {activeSection === 'notifications' && (
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h3>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <p className="font-medium text-gray-900">Email Notifications</p>
                                            <p className="text-sm text-gray-500">Receive email alerts for new inquiries and updates</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="emailNotifications"
                                                checked={siteSettings.emailNotifications}
                                                onChange={handleInputChange}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <p className="font-medium text-gray-900">SMS Notifications</p>
                                            <p className="text-sm text-gray-500">Receive text messages for urgent updates</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="smsNotifications"
                                                checked={siteSettings.smsNotifications}
                                                onChange={handleInputChange}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <p className="font-medium text-gray-900">Weekly Reports</p>
                                            <p className="text-sm text-gray-500">Receive weekly analytics and performance reports</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="weeklyReports"
                                                checked={siteSettings.weeklyReports}
                                                onChange={handleInputChange}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Site Settings */}
                    {activeSection === 'site' && admin?.role === 'super_admin' && (
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Site Settings</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                                        <input
                                            type="text"
                                            name="siteName"
                                            value={siteSettings.siteName}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                                        <input
                                            type="email"
                                            name="contactEmail"
                                            value={siteSettings.contactEmail}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={siteSettings.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                                        <select
                                            name="timezone"
                                            value={siteSettings.timezone}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="UTC-5">UTC-5 (Eastern)</option>
                                            <option value="UTC-6">UTC-6 (Central)</option>
                                            <option value="UTC-7">UTC-7 (Mountain)</option>
                                            <option value="UTC-8">UTC-8 (Pacific)</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                    <textarea
                                        name="address"
                                        value={siteSettings.address}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="border-t pt-6">
                                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                                        <div>
                                            <p className="font-medium text-red-900">Maintenance Mode</p>
                                            <p className="text-sm text-red-700">Put the site in maintenance mode</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="maintenanceMode"
                                                checked={siteSettings.maintenanceMode}
                                                onChange={handleInputChange}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Save Settings
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Access Denied for non-super-admin */}
                    {activeSection === 'site' && admin?.role !== 'super_admin' && (
                        <div className="p-6 text-center">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Access Restricted</h3>
                            <p className="text-gray-500">Only super administrators can access site settings.</p>
                        </div>
                    )}

                    {/* Backup & Export */}
                    {activeSection === 'backup' && (
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Backup & Export</h3>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 border border-gray-200 rounded-lg">
                                        <h4 className="text-lg font-medium text-gray-900 mb-2">Export Data</h4>
                                        <p className="text-sm text-gray-500 mb-4">Download your data in various formats</p>
                                        <div className="space-y-2">
                                            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                                Export Contacts (CSV)
                                            </button>
                                            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                                Export Analytics (JSON)
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-6 border border-gray-200 rounded-lg">
                                        <h4 className="text-lg font-medium text-gray-900 mb-2">Database Backup</h4>
                                        <p className="text-sm text-gray-500 mb-4">Create a full backup of your database</p>
                                        <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                            Create Backup
                                        </button>
                                        <p className="text-xs text-gray-400 mt-2">Last backup: Never</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SettingsSection