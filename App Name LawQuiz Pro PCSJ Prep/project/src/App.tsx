import React, { useState } from 'react';
import Navbar from './components/Navbar';
import QuizCard from './components/QuizCard';
import QuizProgress from './components/QuizProgress';
import TopicSelector from './components/TopicSelector';

const sampleQuestion = {
  question: "Under Article 21 of the Indian Constitution, the term 'personal liberty' includes which of the following rights?",
  options: [
    { id: 'a', text: 'Right to live with human dignity' },
    { id: 'b', text: 'Right to travel abroad' },
    { id: 'c', text: 'Right to privacy' },
    { id: 'd', text: 'All of the above' }
  ]
};

function App() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft] = useState(45);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <TopicSelector />
          </div>
          
          <div className="col-span-6">
            <QuizCard
              question={sampleQuestion.question}
              options={sampleQuestion.options}
              selectedOption={selectedOption}
              onSelect={setSelectedOption}
              timeLeft={timeLeft}
            />
          </div>

          <div className="col-span-3">
            <QuizProgress />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;