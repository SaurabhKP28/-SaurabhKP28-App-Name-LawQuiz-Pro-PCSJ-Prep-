import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

interface BalanceCardProps {
  title: string;
  amount: number;
  change: number;
  type: 'total' | 'income' | 'expenses';
}

const bgColors = {
  total: 'bg-gradient-to-br from-blue-500 to-blue-600',
  income: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
  expenses: 'bg-gradient-to-br from-rose-500 to-rose-600'
};

export default function BalanceCard({ title, amount, change, type }: BalanceCardProps) {
  return (
    <div className={`${bgColors[type]} rounded-2xl p-6 text-white`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium opacity-90">{title}</span>
        <DollarSign className="h-5 w-5 opacity-90" />
      </div>
      <div className="text-2xl font-bold mb-2">
        ${amount.toLocaleString()}
      </div>
      <div className="flex items-center text-sm">
        {change >= 0 ? (
          <TrendingUp className="h-4 w-4 mr-1" />
        ) : (
          <TrendingDown className="h-4 w-4 mr-1" />
        )}
        <span className="opacity-90">
          {change >= 0 ? '+' : ''}{change}% from last month
        </span>
      </div>
    </div>
  );
}