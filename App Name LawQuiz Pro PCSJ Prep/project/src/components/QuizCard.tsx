import React from 'react';
import { Clock, BookmarkPlus } from 'lucide-react';

interface Option {
  id: string;
  text: string;
}

interface QuizCardProps {
  question: string;
  options: Option[];
  selectedOption: string | null;
  onSelect: (id: string) => void;
  timeLeft: number;
}

export default function QuizCard({ 
  question, 
  options, 
  selectedOption, 
  onSelect,
  timeLeft 
}: QuizCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            Constitutional Law
          </span>
          <span className="px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
            Medium
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-600">
            <Clock className="h-5 w-5" />
            <span className="font-medium">{timeLeft}s</span>
          </div>
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <BookmarkPlus className="h-5 w-5 text-slate-600" />
          </button>
        </div>
      </div>

      <h3 className="text-xl text-slate-800 font-medium mb-8">
        {question}
      </h3>

      <div className="space-y-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              selectedOption === option.id
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                : 'border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedOption === option.id
                  ? 'border-indigo-600 bg-indigo-600'
                  : 'border-slate-300'
              }`}>
                {selectedOption === option.id && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-slate-700">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 pt-6 border-t">
        <button className="px-6 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          Previous
        </button>
        <div className="text-slate-600">Question 4 of 10</div>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Next Question
        </button>
      </div>
    </div>
  );
}