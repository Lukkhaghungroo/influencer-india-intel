
import React from 'react';
import { MapPin, TrendingUp, Users, Eye, Calendar } from 'lucide-react';

export const RegionalInsights = () => {
  const regionalData = [
    {
      state: 'Maharashtra',
      city: 'Mumbai',
      influencers: 2847,
      avgEngagement: '4.8%',
      topCategories: ['Fashion', 'Entertainment', 'Food'],
      trendingHashtags: ['#MumbaiVibes', '#BollywoodStyle', '#StreetFood'],
      languages: ['Hindi', 'Marathi', 'English'],
      growth: '+23%'
    },
    {
      state: 'Karnataka',
      city: 'Bangalore',
      influencers: 1923,
      avgEngagement: '5.2%',
      topCategories: ['Tech', 'Startup', 'Food'],
      trendingHashtags: ['#BangaloreTech', '#StartupLife', '#NammaBengaluru'],
      languages: ['English', 'Kannada', 'Tamil'],
      growth: '+18%'
    },
    {
      state: 'Tamil Nadu',
      city: 'Chennai',
      influencers: 1456,
      avgEngagement: '5.8%',
      topCategories: ['Culture', 'Food', 'Music'],
      trendingHashtags: ['#ChennaiCulture', '#TamilTradition', '#SouthIndianFood'],
      languages: ['Tamil', 'English'],
      growth: '+31%'
    },
    {
      state: 'Delhi',
      city: 'New Delhi',
      influencers: 2156,
      avgEngagement: '4.2%',
      topCategories: ['Politics', 'Fashion', 'Food'],
      trendingHashtags: ['#DelhiLife', '#CapitalVibes', '#DilliKiDilli'],
      languages: ['Hindi', 'English', 'Punjabi'],
      growth: '+15%'
    }
  ];

  const festivalTrends = [
    {
      festival: 'Diwali',
      peak: 'Oct 15-Nov 15',
      categories: ['Fashion', 'Gifting', 'Sweets'],
      reach: '15M+',
      engagement: '+67%'
    },
    {
      festival: 'Ganesh Chaturthi',
      peak: 'Aug 20-Sep 10',
      categories: ['Culture', 'Food', 'Devotional'],
      reach: '8M+',
      engagement: '+45%'
    },
    {
      festival: 'Holi',
      peak: 'Mar 1-Mar 15',
      categories: ['Fashion', 'Beauty', 'Celebration'],
      reach: '12M+',
      engagement: '+52%'
    }
  ];

  const tierCityInsights = [
    {
      tier: 'Tier 1',
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'],
      influencers: 8456,
      avgRate: '₹45K',
      topNiche: 'Lifestyle'
    },
    {
      tier: 'Tier 2',
      cities: ['Pune', 'Jaipur', 'Lucknow', 'Nagpur'],
      influencers: 3247,
      avgRate: '₹18K',
      topNiche: 'Regional Culture'
    },
    {
      tier: 'Tier 3',
      cities: ['Indore', 'Bhopal', 'Coimbatore', 'Kochi'],
      influencers: 1834,
      avgRate: '₹8K',
      topNiche: 'Local Business'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Regional Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Regional Market Intelligence</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>Live Regional Data</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {regionalData.map((region, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{region.city}</h3>
                  <p className="text-sm text-gray-600">{region.state}</p>
                </div>
                <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  <TrendingUp className="h-3 w-3" />
                  <span>{region.growth}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="font-semibold text-gray-900">{region.influencers.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-500">Influencers</p>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4 text-purple-400" />
                    <span className="font-semibold text-purple-600">{region.avgEngagement}</span>
                  </div>
                  <p className="text-xs text-gray-500">Avg Engagement</p>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Top Categories:</p>
                  <div className="flex flex-wrap gap-1">
                    {region.topCategories.map((category, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-gray-600 mb-1">Languages:</p>
                  <p className="text-xs text-gray-700">{region.languages.join(', ')}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-600 mb-1">Trending:</p>
                  <p className="text-xs text-blue-600">{region.trendingHashtags.join(' ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Festival & Cultural Trends */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="h-5 w-5 text-orange-600" />
          <h3 className="text-lg font-semibold text-gray-900">Festival Marketing Calendar</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {festivalTrends.map((festival, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">{festival.festival}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Peak Period:</span>
                  <span className="text-gray-900 font-medium">{festival.peak}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected Reach:</span>
                  <span className="text-green-600 font-medium">{festival.reach}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Engagement Boost:</span>
                  <span className="text-purple-600 font-medium">{festival.engagement}</span>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Top Categories:</p>
                  <div className="flex flex-wrap gap-1">
                    {festival.categories.map((category, idx) => (
                      <span key={idx} className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tier City Analysis */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tier-wise Market Analysis</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tierCityInsights.map((tier, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-blue-900">{tier.tier} Cities</h4>
                <span className="text-sm text-blue-700">{tier.topNiche}</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-600">Influencers:</span>
                  <span className="text-blue-900 font-medium">{tier.influencers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600">Avg Rate:</span>
                  <span className="text-blue-900 font-medium">{tier.avgRate}</span>
                </div>
                <div>
                  <p className="text-blue-600 mb-1">Key Cities:</p>
                  <p className="text-blue-800 text-xs">{tier.cities.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Language & Cultural Insights */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Language & Cultural Distribution</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { language: 'Hindi', percentage: '68%', growth: '+12%' },
            { language: 'English', percentage: '45%', growth: '+8%' },
            { language: 'Marathi', percentage: '23%', growth: '+18%' },
            { language: 'Tamil', percentage: '19%', growth: '+25%' },
            { language: 'Telugu', percentage: '16%', growth: '+22%' },
            { language: 'Gujarati', percentage: '14%', growth: '+15%' },
          ].map((lang, index) => (
            <div key={index} className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900">{lang.language}</h4>
              <p className="text-lg text-green-700 font-bold">{lang.percentage}</p>
              <p className="text-xs text-green-600">{lang.growth} growth</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
