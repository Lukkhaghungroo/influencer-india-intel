
import React from 'react';
import { TrendingUp, TrendingDown, Users, Eye, Heart, MessageSquare } from 'lucide-react';

export const AnalyticsDashboard = () => {
  const stats = [
    { label: 'Active Campaigns', value: '12', change: '+15%', trend: 'up' },
    { label: 'Total Reach', value: '2.4M', change: '+23%', trend: 'up' },
    { label: 'Engagement Rate', value: '4.2%', change: '-2%', trend: 'down' },
    { label: 'Cost per Engagement', value: '₹12', change: '+8%', trend: 'down' },
  ];

  const topPerformers = [
    { name: 'Priya Sharma', engagement: '6.8%', reach: '156K', roi: '340%' },
    { name: 'Rohan Tech', engagement: '5.2%', reach: '89K', roi: '285%' },
    { name: 'Meena Foodie', engagement: '7.1%', reach: '67K', roi: '420%' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {stat.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Campaign Performance Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance Trends</h3>
          <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-2" />
              <p className="text-gray-500">Interactive Chart Placeholder</p>
              <p className="text-sm text-gray-400">Real-time analytics visualization</p>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Influencers</h3>
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{performer.name}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3 text-red-400" />
                      <span className="text-xs text-gray-600">{performer.engagement}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3 text-blue-400" />
                      <span className="text-xs text-gray-600">{performer.reach}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">{performer.roi}</p>
                  <p className="text-xs text-gray-500">ROI</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Performance */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Performance Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { city: 'Mumbai', engagement: '5.2%', campaigns: 8 },
            { city: 'Delhi', engagement: '4.8%', campaigns: 6 },
            { city: 'Bangalore', engagement: '6.1%', campaigns: 4 },
            { city: 'Chennai', engagement: '4.5%', campaigns: 3 },
            { city: 'Pune', engagement: '5.8%', campaigns: 5 },
          ].map((region, index) => (
            <div key={index} className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900">{region.city}</h4>
              <p className="text-sm text-purple-600 mt-1">{region.engagement}</p>
              <p className="text-xs text-gray-500">{region.campaigns} campaigns</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
