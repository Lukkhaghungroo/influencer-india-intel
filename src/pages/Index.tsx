
import React, { useState } from 'react';
import { DashboardHeader } from '../components/DashboardHeader';
import { SearchFilters } from '../components/SearchFilters';
import { InfluencerGrid } from '../components/InfluencerGrid';
import { AnalyticsDashboard } from '../components/AnalyticsDashboard';
import { CampaignManager } from '../components/CampaignManager';
import { ComplianceTracker } from '../components/ComplianceTracker';
import { RegionalInsights } from '../components/RegionalInsights';

const Index = () => {
  const [activeTab, setActiveTab] = useState('discover');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'discover':
        return (
          <div className="space-y-6">
            <SearchFilters />
            <InfluencerGrid />
          </div>
        );
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'campaigns':
        return <CampaignManager />;
      case 'compliance':
        return <ComplianceTracker />;
      case 'insights':
        return <RegionalInsights />;
      default:
        return (
          <div className="space-y-6">
            <SearchFilters />
            <InfluencerGrid />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <DashboardHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;
