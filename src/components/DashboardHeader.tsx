
import React from 'react';
import { Search, TrendingUp, Users, Shield, Calendar, MapPin } from 'lucide-react';

interface DashboardHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'discover', label: 'Discover', icon: Search },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'campaigns', label: 'Campaigns', icon: Calendar },
    { id: 'compliance', label: 'Compliance', icon: Shield },
    { id: 'insights', label: 'Regional Insights', icon: MapPin },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">INFLUENCER360</h1>
                <p className="text-xs text-purple-600 font-medium">INDIA</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 px-3 py-1 rounded-full">
              <span className="text-green-800 text-sm font-medium">Live Data</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        
        <nav className="flex space-x-8 overflow-x-auto pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-purple-100 text-purple-700 shadow-md'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
