
import React from 'react';
import { Shield, CheckCircle, AlertTriangle, XCircle, FileText } from 'lucide-react';

export const ComplianceTracker = () => {
  const complianceStats = [
    { label: 'ASCI Compliant Posts', value: '87%', status: 'good' },
    { label: 'Missing Disclosures', value: '23', status: 'warning' },
    { label: 'Flagged Content', value: '5', status: 'danger' },
    { label: 'Compliance Score', value: '8.2/10', status: 'good' },
  ];

  const recentAlerts = [
    {
      id: 1,
      influencer: 'Priya Sharma',
      issue: 'Missing #ad disclosure',
      post: 'Fashion brand collaboration',
      severity: 'high',
      date: '2024-07-10'
    },
    {
      id: 2,
      influencer: 'Rohan Tech',
      issue: 'Health claim without disclaimer',
      post: 'Supplement review video',
      severity: 'medium',
      date: '2024-07-09'
    },
    {
      id: 3,
      influencer: 'Meena Foodie',
      issue: 'Alcohol content without warning',
      post: 'Wine tasting reel',
      severity: 'high',
      date: '2024-07-08'
    }
  ];

  const guidelines = [
    {
      category: 'Disclosure Requirements',
      rules: [
        'Use #ad, #sponsored, or #collaboration for paid content',
        'Disclosure must be prominent and clearly visible',
        'Use vernacular language disclosures for regional content'
      ]
    },
    {
      category: 'Restricted Categories',
      rules: [
        'Health supplements require medical disclaimers',
        'Financial products need risk warnings',
        'Alcohol content restricted to 25+ audiences'
      ]
    },
    {
      category: 'Content Guidelines',
      rules: [
        'No misleading claims or exaggerated benefits',
        'Cultural sensitivity for regional campaigns',
        'Child safety compliance for family content'
      ]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'danger': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {complianceStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${
                stat.status === 'good' ? 'bg-green-100' :
                stat.status === 'warning' ? 'bg-yellow-100' : 'bg-red-100'
              }`}>
                <Shield className={`h-5 w-5 ${getStatusColor(stat.status)}`} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className={`text-xl font-bold ${getStatusColor(stat.status)}`}>{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Compliance Alerts */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Compliance Alerts</h3>
            <button className="text-sm text-purple-600 hover:text-purple-700">View All</button>
          </div>
          
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <AlertTriangle className="h-4 w-4" />
                      <p className="font-medium">{alert.influencer}</p>
                    </div>
                    <p className="text-sm mb-1">{alert.issue}</p>
                    <p className="text-xs opacity-75">{alert.post}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-75">{alert.date}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                      alert.severity === 'high' ? 'bg-red-200 text-red-800' :
                      alert.severity === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-green-200 text-green-800'
                    }`}>
                      {alert.severity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Guidelines */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">ASCI Guidelines</h3>
          </div>
          
          <div className="space-y-4">
            {guidelines.map((guideline, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">{guideline.category}</h4>
                <ul className="space-y-1">
                  {guideline.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auto-Compliance Tools */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Auto-Compliance Tools</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h4 className="font-medium text-green-900">Disclosure Monitor</h4>
            </div>
            <p className="text-sm text-green-700">Automatically scans posts for required disclosures and flags missing tags.</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <h4 className="font-medium text-blue-900">Content Safety</h4>
            </div>
            <p className="text-sm text-blue-700">AI-powered content analysis for brand safety and compliance violations.</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="h-5 w-5 text-purple-600" />
              <h4 className="font-medium text-purple-900">Contract Generator</h4>
            </div>
            <p className="text-sm text-purple-700">Generate compliant contracts with built-in disclosure requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
