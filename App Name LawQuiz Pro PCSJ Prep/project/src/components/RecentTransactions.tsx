import React from 'react';
import { 
  ShoppingBag, 
  Coffee, 
  Car, 
  Home,
  Utensils
} from 'lucide-react';

const transactions = [
  {
    id: 1,
    name: 'Grocery Shopping',
    amount: -156.78,
    date: 'Today',
    icon: ShoppingBag,
    category: 'Shopping'
  },
  {
    id: 2,
    name: 'Starbucks Coffee',
    amount: -4.50,
    date: 'Today',
    icon: Coffee,
    category: 'Food & Drinks'
  },
  {
    id: 3,
    name: 'Car Insurance',
    amount: -89.99,
    date: 'Yesterday',
    icon: Car,
    category: 'Insurance'
  },
  {
    id: 4,
    name: 'Rent Payment',
    amount: -1200.00,
    date: 'Dec 1',
    icon: Home,
    category: 'Housing'
  },
  {
    id: 5,
    name: 'Restaurant',
    amount: -42.50,
    date: 'Dec 1',
    icon: Utensils,
    category: 'Food & Drinks'
  }
];

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Recent Transactions</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-slate-100">
                <transaction.icon className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <div className="font-medium text-slate-800">
                  {transaction.name}
                </div>
                <div className="text-sm text-slate-500">
                  {transaction.category} • {transaction.date}
                </div>
              </div>
            </div>
            <div className={`font-medium ${
              transaction.amount < 0 ? 'text-rose-600' : 'text-emerald-600'
            }`}>
              {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}