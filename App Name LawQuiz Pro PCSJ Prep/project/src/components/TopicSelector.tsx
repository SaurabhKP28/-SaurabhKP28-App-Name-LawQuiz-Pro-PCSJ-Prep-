import React from 'react';
import { ChevronDown } from 'lucide-react';

const topics = [
  { id: 'constitution', name: 'Constitutional Law', count: 245 },
  { id: 'criminal', name: 'Criminal Law', count: 189 },
  { id: 'civil', name: 'Civil Law', count: 167 },
  { id: 'evidence', name: 'Law of Evidence', count: 134 },
  { id: 'contract', name: 'Contract Law', count: 98 }
];

export default function TopicSelector() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">Select Topic</h3>
      
      <div className="space-y-2">
        {topics.map((topic) => (
          <button
            key={topic.id}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-slate-700">{topic.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">{topic.count} questions</span>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}