'use client'

import { useState } from 'react'

const SeedPage = () => {
    const [result, setResult] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)

    const seedAdmin = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('/api/admin/seed', {
                method: 'POST'
            })
            const data = await response.json()
            setResult(JSON.stringify(data, null, 2))
        } catch (error) {
            setResult(`Error: ${error}`)
        }
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Seed Admin</h1>
                <p className="text-gray-600 mb-4">
                    Click the button below to create the initial super admin account.
                </p>

                <button
                    onClick={seedAdmin}
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                    {isLoading ? 'Creating Admin...' : 'Create Super Admin'}
                </button>

                {result && (
                    <div className="mt-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Result:</h3>
                        <pre className="bg-gray-100 p-3 rounded-md text-xs overflow-auto">
                            {result}
                        </pre>
                    </div>
                )}

                <div className="mt-4 text-center">
                    <a href="/login" className="text-blue-600 hover:text-blue-800 text-sm">
                        Go to Admin Login →
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SeedPage