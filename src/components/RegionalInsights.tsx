
import React from 'react';
import { MapPin, TrendingUp, Users, Calendar, Target } from 'lucide-react';

export const RegionalInsights = () => {
  const regionalData = [
    {
      region: 'Mumbai',
      influencers: 1247,
      avgEngagement: '4.8%',
      topCategory: 'Fashion',
      growth: '+15%',
      avgRate: '₹25,000'
    },
    {
      region: 'Delhi',
      influencers: 891,
      avgEngagement: '4.2%',
      topCategory: 'Lifestyle',
      growth: '+12%',
      avgRate: '₹22,000'
    },
    {
      region: 'Bangalore',
      influencers: 756,
      avgEngagement: '5.1%',
      topCategory: 'Technology',
      growth: '+18%',
      avgRate: '₹28,000'
    },
    {
      region: 'Chennai',
      influencers: 623,
      avgEngagement: '4.5%',
      topCategory: 'Food',
      growth: '+10%',
      avgRate: '₹20,000'
    },
    {
      region: 'Pune',
      influencers: 445,
      avgEngagement: '5.3%',
      topCategory: 'Fitness',
      growth: '+22%',
      avgRate: '₹18,000'
    },
    {
      region: 'Hyderabad',
      influencers: 389,
      avgEngagement: '4.7%',
      topCategory: 'Beauty',
      growth: '+14%',
      avgRate: '₹19,000'
    }
  ];

  const trendingTopics = [
    { topic: 'Monsoon Fashion', region: 'Mumbai', mentions: '12.5K' },
    { topic: 'Street Food', region: 'Delhi', mentions: '8.9K' },
    { topic: 'Tech Reviews', region: 'Bangalore', mentions: '15.2K' },
    { topic: 'Traditional Recipes', region: 'Chennai', mentions: '6.7K' },
    { topic: 'Fitness Challenges', region: 'Pune', mentions: '9.1K' },
    { topic: 'Beauty Tutorials', region: 'Hyderabad', mentions: '7.3K' }
  ];

  const languageBreakdown = [
    { language: 'Hindi', percentage: 45, influencers: '2.1K' },
    { language: 'English', percentage: 35, influencers: '1.6K' },
    { language: 'Marathi', percentage: 8, influencers: '380' },
    { language: 'Tamil', percentage: 6, influencers: '285' },
    { language: 'Telugu', percentage: 4, influencers: '190' },
    { language: 'Others', percentage: 2, influencers: '95' }
  ];

  return (
    <div className="space-y-6">
      {/* Regional Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center space-x-2 mb-6">
          <MapPin className="h-5 w-5 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">Regional Market Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionalData.map((region, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{region.region}</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {region.growth}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Influencers:</span>
                  <span className="font-medium">{region.influencers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Engagement:</span>
                  <span className="font-medium text-green-600">{region.avgEngagement}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Top Category:</span>
                  <span className="font-medium">{region.topCategory}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Rate:</span>
                  <span className="font-medium">{region.avgRate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trending Topics */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">Trending Topics by Region</h3>
          </div>

          <div className="space-y-3">
            {trendingTopics.map((trend, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{trend.topic}</p>
                  <p className="text-sm text-gray-600">{trend.region}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-purple-600">{trend.mentions}</p>
                  <p className="text-xs text-gray-500">mentions</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Language Distribution */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">Language Distribution</h3>
          </div>

          <div className="space-y-4">
            {languageBreakdown.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-900">{lang.language}</span>
                  <span className="text-sm text-gray-600">{lang.influencers} influencers</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">{lang.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Campaign Performance */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <Target className="h-5 w-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">Regional Campaign Performance</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
            <h4 className="font-semibold text-gray-900">North India</h4>
            <p className="text-2xl font-bold text-blue-600 mt-2">4.2%</p>
            <p className="text-sm text-gray-600">Avg Engagement</p>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
            <h4 className="font-semibold text-gray-900">South India</h4>
            <p className="text-2xl font-bold text-green-600 mt-2">4.8%</p>
            <p className="text-sm text-gray-600">Avg Engagement</p>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
            <h4 className="font-semibold text-gray-900">West India</h4>
            <p className="text-2xl font-bold text-purple-600 mt-2">5.1%</p>
            <p className="text-sm text-gray-600">Avg Engagement</p>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
            <h4 className="font-semibold text-gray-900">East India</h4>
            <p className="text-2xl font-bold text-orange-600 mt-2">3.9%</p>
            <p className="text-sm text-gray-600">Avg Engagement</p>
          </div>
        </div>
      </div>
    </div>
  );
};
