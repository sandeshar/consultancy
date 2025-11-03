'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function SuccessNotification() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (searchParams.get('success') === 'true') {
            setShow(true)
            
            // Auto hide after 5 seconds
            const timer = setTimeout(() => {
                setShow(false)
                // Remove success param from URL
                router.replace('/contact', { scroll: false })
            }, 5000)

            return () => clearTimeout(timer)
        }
    }, [searchParams, router])

    if (!show) return null

    return (
        <div className="fixed top-4 right-4 z-50 animate-slideInRight">
            <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 max-w-md">
                <div className="flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="flex-1">
                    <h4 className="font-bold">Message Sent Successfully!</h4>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
                <button 
                    onClick={() => {
                        setShow(false)
                        router.replace('/contact', { scroll: false })
                    }}
                    className="flex-shrink-0 text-white hover:text-green-100 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
