
import React from 'react';
import { Search, MapPin, Users, TrendingUp, Filter } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

export const SearchFilters = () => {
  const { 
    searchQuery, 
    setSearchQuery, 
    filters, 
    setFilters, 
    setIsSearchActive 
  } = useSearch();

  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Hyderabad', 'Ahmedabad'];
  const languages = ['Hindi', 'English', 'Marathi', 'Tamil', 'Telugu', 'Gujarati', 'Bengali', 'Kannada'];
  const categories = ['Fashion', 'Food', 'Travel', 'Tech', 'Fitness', 'Beauty', 'Lifestyle', 'Entertainment'];

  const handleSearch = () => {
    console.log('Search initiated with:', {
      query: searchQuery,
      filters: filters
    });
    
    // Trigger the search by setting isSearchActive to true
    setIsSearchActive(true);
  };

  const handleFilterChange = (filterKey: string, value: string) => {
    const newFilters = { ...filters, [filterKey]: value };
    setFilters(newFilters);
    
    // Auto-trigger search when filters change
    if (value !== '') {
      setIsSearchActive(true);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Advanced Influencer Search</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Filter className="h-4 w-4" />
          <span>AI-Powered Discovery</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Main Search */}
        <div className="lg:col-span-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by username, niche, or hashtag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Location Filter */}
        <div className="lg:col-span-2">
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Cities</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Language Filter */}
        <div className="lg:col-span-2">
          <select
            value={filters.language}
            onChange={(e) => handleFilterChange('language', e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Languages</option>
            {languages.map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="lg:col-span-2">
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-2">
          <button 
            onClick={handleSearch}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Search Influencers
          </button>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Followers Range</label>
          <select
            value={filters.followersRange}
            onChange={(e) => handleFilterChange('followersRange', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Any Range</option>
            <option value="nano">Nano (1K-10K)</option>
            <option value="micro">Micro (10K-100K)</option>
            <option value="macro">Macro (100K-1M)</option>
            <option value="mega">Mega (1M+)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Engagement Rate</label>
          <select
            value={filters.engagementRate}
            onChange={(e) => handleFilterChange('engagementRate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Any Rate</option>
            <option value="high">High (5%+)</option>
            <option value="medium">Medium (2-5%)</option>
            <option value="low">Low (&lt;2%)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
          <select 
            value={filters.contentType}
            onChange={(e) => handleFilterChange('contentType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            <option value="reels">Reels Focus</option>
            <option value="posts">Posts Focus</option>
            <option value="stories">Stories Active</option>
          </select>
        </div>
      </div>
    </div>
  );
};
