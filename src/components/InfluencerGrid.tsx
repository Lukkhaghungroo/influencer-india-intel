
import React, { useMemo } from 'react';
import { MapPin, Users, TrendingUp, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

export const InfluencerGrid = () => {
  const { searchQuery, filters, isSearchActive } = useSearch();

  const allInfluencers = [
    {
      id: 1,
      name: 'Priya Sharma',
      username: '@priyafashionista',
      followers: '45.2K',
      followersNum: 45200,
      engagement: '4.8%',
      engagementNum: 4.8,
      location: 'Mumbai',
      category: 'Fashion',
      language: 'Hindi/English',
      verified: true,
      authenticity: 92,
      rate: '₹15,000',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      recentPosts: 24,
      contentType: 'posts'
    },
    {
      id: 2,
      name: 'Rohan Tech',
      username: '@rohanreviews',
      followers: '128K',
      followersNum: 128000,
      engagement: '3.2%',
      engagementNum: 3.2,
      location: 'Bangalore',
      category: 'Technology',
      language: 'English',
      verified: true,
      authenticity: 89,
      rate: '₹35,000',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      recentPosts: 18,
      contentType: 'reels'
    },
    {
      id: 3,
      name: 'Meena Foodie',
      username: '@meenaeats',
      followers: '67K',
      followersNum: 67000,
      engagement: '6.1%',
      engagementNum: 6.1,
      location: 'Delhi',
      category: 'Food',
      language: 'Hindi',
      verified: false,
      authenticity: 95,
      rate: '₹22,000',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      recentPosts: 31,
      contentType: 'stories'
    },
    {
      id: 4,
      name: 'Fitness Guru',
      username: '@fitnessguru_in',
      followers: '89K',
      followersNum: 89000,
      engagement: '5.4%',
      engagementNum: 5.4,
      location: 'Pune',
      category: 'Fitness',
      language: 'Marathi/English',
      verified: true,
      authenticity: 87,
      rate: '₹28,000',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      recentPosts: 22,
      contentType: 'reels'
    },
    {
      id: 5,
      name: 'Beauty Queen',
      username: '@beautybyasha',
      followers: '156K',
      followersNum: 156000,
      engagement: '4.1%',
      engagementNum: 4.1,
      location: 'Chennai',
      category: 'Beauty',
      language: 'Tamil/English',
      verified: true,
      authenticity: 91,
      rate: '₹42,000',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      recentPosts: 19,
      contentType: 'posts'
    },
    {
      id: 6,
      name: 'Travel Diaries',
      username: '@wanderlust_india',
      followers: '203K',
      followersNum: 203000,
      engagement: '3.8%',
      engagementNum: 3.8,
      location: 'Goa',
      category: 'Travel',
      language: 'English',
      verified: true,
      authenticity: 88,
      rate: '₹55,000',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      recentPosts: 15,
      contentType: 'stories'
    },
    {
      id: 7,
      name: 'Lifestyle Blogger',
      username: '@lifestylequeen',
      followers: '92K',
      followersNum: 92000,
      engagement: '5.2%',
      engagementNum: 5.2,
      location: 'Mumbai',
      category: 'Lifestyle',
      language: 'English',
      verified: true,
      authenticity: 93,
      rate: '₹32,000',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      recentPosts: 28,
      contentType: 'reels'
    },
    {
      id: 8,
      name: 'Tech Reviewer',
      username: '@techguru_hindi',
      followers: '134K',
      followersNum: 134000,
      engagement: '3.9%',
      engagementNum: 3.9,
      location: 'Delhi',
      category: 'Tech',
      language: 'Hindi',
      verified: true,
      authenticity: 90,
      rate: '₹38,000',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      recentPosts: 21,
      contentType: 'posts'
    }
  ];

  const filteredInfluencers = useMemo(() => {
    let filtered = [...allInfluencers];

    // Apply search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(influencer => 
        influencer.name.toLowerCase().includes(query) ||
        influencer.username.toLowerCase().includes(query) ||
        influencer.category.toLowerCase().includes(query)
      );
    }

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter(influencer => 
        influencer.location === filters.location
      );
    }

    // Apply language filter
    if (filters.language) {
      filtered = filtered.filter(influencer => 
        influencer.language.includes(filters.language)
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(influencer => 
        influencer.category === filters.category
      );
    }

    // Apply followers range filter
    if (filters.followersRange) {
      filtered = filtered.filter(influencer => {
        const followers = influencer.followersNum;
        switch (filters.followersRange) {
          case 'nano':
            return followers >= 1000 && followers <= 10000;
          case 'micro':
            return followers > 10000 && followers <= 100000;
          case 'macro':
            return followers > 100000 && followers <= 1000000;
          case 'mega':
            return followers > 1000000;
          default:
            return true;
        }
      });
    }

    // Apply engagement rate filter
    if (filters.engagementRate) {
      filtered = filtered.filter(influencer => {
        const engagement = influencer.engagementNum;
        switch (filters.engagementRate) {
          case 'high':
            return engagement >= 5;
          case 'medium':
            return engagement >= 2 && engagement < 5;
          case 'low':
            return engagement < 2;
          default:
            return true;
        }
      });
    }

    // Apply content type filter
    if (filters.contentType) {
      filtered = filtered.filter(influencer => 
        influencer.contentType === filters.contentType
      );
    }

    console.log('Filtering results:', {
      originalCount: allInfluencers.length,
      filteredCount: filtered.length,
      query: searchQuery,
      filters: filters
    });

    return filtered;
  }, [searchQuery, filters]);

  const displayInfluencers = isSearchActive ? filteredInfluencers : allInfluencers;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {isSearchActive ? 'Search Results' : 'Discovered Influencers'}
        </h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            Showing {displayInfluencers.length} of {allInfluencers.length} results
            {isSearchActive && (
              <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                Filtered
              </span>
            )}
          </span>
          <button className="px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
            Export List
          </button>
        </div>
      </div>

      {displayInfluencers.length === 0 ? (
        <div className="text-center py-12">
          <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No influencers found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayInfluencers.map((influencer) => (
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
      )}

      {displayInfluencers.length > 0 && (
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Load More Influencers
          </button>
        </div>
      )}
    </div>
  );
};
