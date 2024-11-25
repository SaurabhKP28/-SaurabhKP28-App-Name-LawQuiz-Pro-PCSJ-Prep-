import React from 'react';

export default function SpendingChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Monthly Spending</h3>
        <select className="text-sm border rounded-lg px-3 py-2 text-slate-600">
          <option>Last 6 months</option>
          <option>Last year</option>
        </select>
      </div>
      
      <div className="h-64 flex items-end justify-between gap-2">
        {[65, 45, 75, 50, 85, 70].map((height, index) => (
          <div key={index} className="w-full">
            <div 
              className="bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600"
              style={{ height: `${height}%` }}
            />
            <div className="text-xs text-center mt-2 text-slate-600">
              {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}