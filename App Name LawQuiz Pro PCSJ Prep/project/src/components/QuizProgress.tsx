import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const questions = Array(10).fill(null).map((_, i) => ({
  number: i + 1,
  status: i < 3 ? 'completed' : i === 3 ? 'current' : 'upcoming'
}));

export default function QuizProgress() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">Quiz Progress</h3>
      
      <div className="grid grid-cols-5 gap-3">
        {questions.map((q) => (
          <button
            key={q.number}
            className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-colors ${
              q.status === 'completed'
                ? 'bg-emerald-100 text-emerald-700'
                : q.status === 'current'
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            <span className="text-sm font-medium">Q{q.number}</span>
            {q.status === 'completed' ? (
              <CheckCircle className="h-5 w-5" />
            ) : q.status === 'current' ? (
              <Clock className="h-5 w-5" />
            ) : (
              <Circle className="h-5 w-5" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}