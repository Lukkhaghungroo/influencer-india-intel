
import React from 'react';
import { Calendar, Users, Target, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export const CampaignManager = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Summer Fashion Collection',
      brand: 'StyleCo',
      status: 'active',
      influencers: 12,
      budget: '₹2,50,000',
      spent: '₹1,80,000',
      startDate: '2024-06-01',
      endDate: '2024-07-15',
      deliverables: 24,
      completed: 18
    },
    {
      id: 2,
      name: 'Tech Product Launch',
      brand: 'TechBrand',
      status: 'planning',
      influencers: 8,
      budget: '₹5,00,000',
      spent: '₹0',
      startDate: '2024-07-20',
      endDate: '2024-08-30',
      deliverables: 16,
      completed: 0
    },
    {
      id: 3,
      name: 'Food Festival Promotion',
      brand: 'FoodieDelight',
      status: 'completed',
      influencers: 15,
      budget: '₹1,75,000',
      spent: '₹1,68,000',
      startDate: '2024-05-01',
      endDate: '2024-05-31',
      deliverables: 30,
      completed: 30
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'planning': return 'bg-blue-100 text-blue-700';
      case 'completed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Campaigns</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Influencers</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Target className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Budget</p>
              <p className="text-2xl font-bold text-gray-900">₹12.5L</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg ROI</p>
              <p className="text-2xl font-bold text-gray-900">3.2x</p>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign List */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Campaign Management</h2>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
              Create New Campaign
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{campaign.brand}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Influencers</p>
                    <p className="font-semibold">{campaign.influencers}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Budget</p>
                    <p className="font-semibold">{campaign.budget}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Spent</p>
                    <p className="font-semibold">{campaign.spent}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Start Date</p>
                    <p className="font-semibold">{campaign.startDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">End Date</p>
                    <p className="font-semibold">{campaign.endDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Progress</p>
                    <p className="font-semibold">{campaign.completed}/{campaign.deliverables}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                      style={{ width: `${(campaign.completed / campaign.deliverables) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
                      View Details
                    </button>
                    <button className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
