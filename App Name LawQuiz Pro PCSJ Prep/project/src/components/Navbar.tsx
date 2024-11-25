import React from 'react';
import { BookOpen, BarChart2, BookmarkCheck, Users, Settings } from 'lucide-react';

const menuItems = [
  { icon: BookOpen, label: 'Practice', active: true },
  { icon: BarChart2, label: 'Progress' },
  { icon: BookmarkCheck, label: 'Bookmarks' },
  { icon: Users, label: 'Community' },
  { icon: Settings, label: 'Settings' }
];

export default function Navbar() {
  return (
    <nav className="bg-indigo-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-indigo-400" />
          <span className="text-xl font-bold">LawQuiz Pro</span>
        </div>
        
        <div className="flex gap-6">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                item.active
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-300 hover:bg-indigo-800 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-indigo-400"
          />
        </div>
      </div>
    </nav>
  );
}