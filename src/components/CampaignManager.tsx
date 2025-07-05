
import React, { useState } from 'react';
import { Calendar, Users, TrendingUp, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export const CampaignManager = () => {
  const [activeTab, setActiveTab] = useState('active');

  const campaigns = {
    active: [
      {
        id: 1,
        name: 'Summer Fashion Collection',
        brand: 'StyleHub India',
        status: 'active',
        budget: '₹2,50,000',
        spent: '₹1,80,000',
        influencers: 8,
        posts: 24,
        reach: '1.2M',
        engagement: '4.5%',
        deadline: '2024-07-15',
        progress: 72
      },
      {
        id: 2,
        name: 'Tech Product Launch',
        brand: 'InnoTech',
        status: 'active',
        budget: '₹5,00,000',
        spent: '₹3,20,000',
        influencers: 12,
        posts: 18,
        reach: '2.1M',
        engagement: '3.8%',
        deadline: '2024-07-20',
        progress: 64
      }
    ],
    completed: [
      {
        id: 3,
        name: 'Food Festival Promotion',
        brand: 'FoodieFinds',
        status: 'completed',
        budget: '₹1,80,000',
        spent: '₹1,75,000',
        influencers: 6,
        posts: 36,
        reach: '890K',
        engagement: '6.2%',
        deadline: '2024-06-30',
        progress: 100
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'completed': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
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
              <p className="text-xl font-bold text-gray-900">12</p>
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
              <p className="text-xl font-bold text-gray-900">84</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Budget</p>
              <p className="text-xl font-bold text-gray-900">₹12.5L</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <CheckCircle className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg ROI</p>
              <p className="text-xl font-bold text-gray-900">285%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign List */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Campaign Management</h2>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
              Create New Campaign
            </button>
          </div>
          
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'active'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Active Campaigns
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'completed'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {campaigns[activeTab as keyof typeof campaigns].map((campaign) => (
              <div key={campaign.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Due: {campaign.deadline}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Budget</p>
                    <p className="font-semibold text-gray-900">{campaign.budget}</p>
                    <p className="text-xs text-gray-500">Spent: {campaign.spent}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Influencers</p>
                    <p className="font-semibold text-gray-900">{campaign.influencers}</p>
                    <p className="text-xs text-gray-500">{campaign.posts} posts</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Reach</p>
                    <p className="font-semibold text-gray-900">{campaign.reach}</p>
                    <p className="text-xs text-gray-500">{campaign.engagement} engagement</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Progress</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{campaign.progress}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">Brand: <span className="font-medium text-gray-900">{campaign.brand}</span></p>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                    <button className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
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
