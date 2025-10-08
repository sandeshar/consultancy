'use client';

import { useState, useEffect } from 'react';

interface ContactStats {
  unseen: number;
  processing: number;
  resolved: number;
  total: number;
}

const AnalyticsSection = () => {
  const [timeRange, setTimeRange] = useState<'7days' | '30days' | '90days'>('7days');
  const [contactStats, setContactStats] = useState<ContactStats>({
    unseen: 0,
    processing: 0,
    resolved: 0,
    total: 0
  });

  useEffect(() => {
    fetchContactStats();
  }, []);

  const fetchContactStats = async () => {
    try {
      const response = await fetch('/api/admin/contacts?stats=true');
      const data = await response.json();
      if (data.success) {
        setContactStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching contact stats:', error);
    }
  };

  const mockPageViews: Record<'7days' | '30days' | '90days', number> = {
    '7days': 847,
    '30days': 3234,
    '90days': 9876
  };

  const mockVisitors: Record<'7days' | '30days' | '90days', number> = {
    '7days': 623,
    '30days': 2456,
    '90days': 7432
  };

  const topPages = [
    { path: '/', views: 456, title: 'Home' },
    { path: '/services', views: 234, title: 'Services' },
    { path: '/about', views: 178, title: 'About' },
    { path: '/contact', views: 145, title: 'Contact' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Analytics Dashboard</h2>
        <p className="text-purple-100">Track your website performance and contact inquiries</p>
      </div>

      {/* Time Range Selector */}
      <div className="bg-white p-4 rounded-lg shadow border">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">Time Range:</span>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as '7days' | '30days' | '90days')}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Page Views</p>
              <p className="text-2xl font-bold text-gray-900">{mockPageViews[timeRange].toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
              <p className="text-2xl font-bold text-gray-900">{mockVisitors[timeRange].toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Inquiry Stats */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Inquiry Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="text-2xl font-bold text-red-600">{contactStats.unseen}</div>
            <div className="text-sm text-red-600">Unseen</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">{contactStats.processing}</div>
            <div className="text-sm text-yellow-600">Processing</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">{contactStats.resolved}</div>
            <div className="text-sm text-green-600">Resolved</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-2xl font-bold text-blue-600">{contactStats.total}</div>
            <div className="text-sm text-blue-600">Total</div>
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Visited Pages</h3>
        <div className="space-y-4">
          {topPages.map((page, index) => (
            <div key={page.path} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-gray-900">{page.title}</p>
                  <p className="text-sm text-gray-600">{page.path}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{page.views.toLocaleString()}</p>
                <p className="text-sm text-gray-600">views</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visitor Trend Chart Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Visitor Trends</h3>
        <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-blue-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p className="text-blue-600 font-medium">Visitor Analytics Chart</p>
            <p className="text-sm text-blue-400">Track daily website visitors over time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;