'use client'

import { useState } from 'react'

interface Project {
    id: string
    name: string
    client: string
    status: 'planning' | 'in-progress' | 'completed' | 'on-hold'
    progress: number
    startDate: string
    endDate?: string
    budget: number
    description: string
}

const ProjectsSection = () => {
    const [projects] = useState<Project[]>([
        {
            id: '1',
            name: 'Website Redesign',
            client: 'TechCorp Inc.',
            status: 'in-progress',
            progress: 65,
            startDate: '2024-09-15',
            endDate: '2024-12-15',
            budget: 15000,
            description: 'Complete website redesign with modern UI/UX'
        },
        {
            id: '2',
            name: 'Mobile App Development',
            client: 'StartupXYZ',
            status: 'planning',
            progress: 15,
            startDate: '2024-10-01',
            endDate: '2025-03-01',
            budget: 25000,
            description: 'iOS and Android app development'
        },
        {
            id: '3',
            name: 'Digital Marketing Campaign',
            client: 'Local Business',
            status: 'completed',
            progress: 100,
            startDate: '2024-08-01',
            endDate: '2024-09-30',
            budget: 8000,
            description: 'SEO optimization and social media marketing'
        },
        {
            id: '4',
            name: 'E-commerce Platform',
            client: 'Fashion Brand',
            status: 'in-progress',
            progress: 40,
            startDate: '2024-09-01',
            endDate: '2025-01-15',
            budget: 35000,
            description: 'Custom e-commerce solution with payment integration'
        }
    ])

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'planning': return 'bg-blue-100 text-blue-800'
            case 'in-progress': return 'bg-yellow-100 text-yellow-800'
            case 'completed': return 'bg-green-100 text-green-800'
            case 'on-hold': return 'bg-red-100 text-red-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    const getProgressColor = (progress: number) => {
        if (progress >= 80) return 'bg-green-500'
        if (progress >= 50) return 'bg-yellow-500'
        return 'bg-blue-500'
    }

    const totalBudget = projects.reduce((sum, project) => sum + project.budget, 0)
    const activeProjects = projects.filter(p => p.status === 'in-progress').length
    const completedProjects = projects.filter(p => p.status === 'completed').length

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Total Projects</p>
                            <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Active Projects</p>
                            <p className="text-2xl font-bold text-gray-900">{activeProjects}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Completed</p>
                            <p className="text-2xl font-bold text-gray-900">{completedProjects}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center">
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Total Budget</p>
                            <p className="text-2xl font-bold text-gray-900">${totalBudget.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">Projects</h3>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Add Project
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                                {project.status.replace('-', ' ')}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">Client: {project.client}</p>
                                        <p className="text-sm text-gray-500">{project.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-gray-900">${project.budget.toLocaleString()}</p>
                                        <p className="text-sm text-gray-500">
                                            {project.startDate} - {project.endDate || 'Ongoing'}
                                        </p>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700">Progress</span>
                                        <span className="text-sm text-gray-500">{project.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`}
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3">
                                    <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                                        View Details
                                    </button>
                                    <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors">
                                        Edit
                                    </button>
                                    {project.status === 'in-progress' && (
                                        <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors">
                                            Mark Complete
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection