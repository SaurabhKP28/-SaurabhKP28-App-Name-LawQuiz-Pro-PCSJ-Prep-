import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const insights = [
  {
    title: "Subscription Alert",
    message: "You have 3 unused subscriptions totaling $45.97/month",
    action: "Review Subscriptions"
  },
  {
    title: "Investment Opportunity",
    message: "Market conditions suggest rebalancing your portfolio",
    action: "View Details"
  },
  {
    title: "Savings Goal",
    message: "You're 75% towards your emergency fund goal",
    action: "See Progress"
  }
];

export default function AIInsights() {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5" />
        <h3 className="text-lg font-semibold">AI Insights</h3>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
          >
            <h4 className="font-medium mb-1">{insight.title}</h4>
            <p className="text-sm opacity-90 mb-2">{insight.message}</p>
            <button className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              {insight.action}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}