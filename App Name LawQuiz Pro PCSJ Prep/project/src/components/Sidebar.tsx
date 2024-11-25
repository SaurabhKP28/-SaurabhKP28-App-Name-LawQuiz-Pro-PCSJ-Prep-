import React from 'react';
import { 
  LayoutDashboard, 
  PiggyBank, 
  LineChart, 
  CreditCard, 
  Target, 
  Users, 
  Settings,
  LogOut 
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: PiggyBank, label: 'Budgeting' },
  { icon: LineChart, label: 'Investments' },
  { icon: CreditCard, label: 'Debt Manager' },
  { icon: Target, label: 'Goals' },
  { icon: Users, label: 'Family Share' },
  { icon: Settings, label: 'Settings' }
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 h-screen p-4 flex flex-col">
      <div className="flex items-center gap-2 px-2 mb-8">
        <PiggyBank className="h-8 w-8 text-emerald-500" />
        <h1 className="text-white text-xl font-bold">WealthWise</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors mt-auto">
        <LogOut className="h-5 w-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}