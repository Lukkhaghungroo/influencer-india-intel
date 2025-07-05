
import React from 'react';
import { MapPin, Users, TrendingUp, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

export const InfluencerGrid = () => {
  const influencers = [
    {
      id: 1,
      name: 'Priya Sharma',
      username: '@priyafashionista',
      followers: '45.2K',
      engagement: '4.8%',
      location: 'Mumbai',
      category: 'Fashion',
      language: 'Hindi/English',
      verified: true,
      authenticity: 92,
      rate: '₹15,000',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      recentPosts: 24
    },
    {
      id: 2,
      name: 'Rohan Tech',
      username: '@rohanreviews',
      followers: '128K',
      engagement: '3.2%',
      location: 'Bangalore',
      category: 'Technology',
      language: 'English',
      verified: true,
      authenticity: 89,
      rate: '₹35,000',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      recentPosts: 18
    },
    {
      id: 3,
      name: 'Meena Foodie',
      username: '@meenaeats',
      followers: '67K',
      engagement: '6.1%',
      location: 'Delhi',
      category: 'Food',
      language: 'Hindi',
      verified: false,
      authenticity: 95,
      rate: '₹22,000',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      recentPosts: 31
    },
    {
      id: 4,
      name: 'Fitness Guru',
      username: '@fitnessguru_in',
      followers: '89K',
      engagement: '5.4%',
      location: 'Pune',
      category: 'Fitness',
      language: 'Marathi/English',
      verified: true,
      authenticity: 87,
      rate: '₹28,000',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      recentPosts: 22
    },
    {
      id: 5,
      name: 'Beauty Queen',
      username: '@beautybyasha',
      followers: '156K',
      engagement: '4.1%',
      location: 'Chennai',
      category: 'Beauty',
      language: 'Tamil/English',
      verified: true,
      authenticity: 91,
      rate: '₹42,000',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      recentPosts: 19
    },
    {
      id: 6,
      name: 'Travel Diaries',
      username: '@wanderlust_india',
      followers: '203K',
      engagement: '3.8%',
      location: 'Goa',
      category: 'Travel',
      language: 'English',
      verified: true,
      authenticity: 88,
      rate: '₹55,000',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      recentPosts: 15
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Discovered Influencers</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Showing 6 of 1,247 results</span>
          <button className="px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
            Export List
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {influencers.map((influencer) => (
          <div key={influencer.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-200 hover:border-purple-200">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={influencer.avatar}
                alt={influencer.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-gray-900">{influencer.name}</h3>
                  {influencer.verified && (
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                  )}
                </div>
                <p className="text-sm text-gray-500">{influencer.username}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="font-semibold text-gray-900">{influencer.followers}</span>
                </div>
                <p className="text-xs text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="font-semibold text-green-600">{influencer.engagement}</span>
                </div>
                <p className="text-xs text-gray-500">Engagement</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-600">{influencer.location}</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-600">{influencer.language}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                  {influencer.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-600">{influencer.authenticity}% Real</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                <p className="text-sm font-semibold text-gray-900">{influencer.rate}</p>
                <p className="text-xs text-gray-500">per post</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  View Profile
                </button>
                <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Add to Campaign
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
          Load More Influencers
        </button>
      </div>
    </div>
  );
};
