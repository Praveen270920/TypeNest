import React from 'react';

interface Feedback {
  tip: string;
  color: string;
}

interface SpeedBarProps {
  placeholder: string;
  wpm: number;
}

interface TypingPerformanceCardProps {
  current: number;
  lastWeek: number;
  lastMonth: number;
}

const getPerformanceFeedback = (wpm: number): Feedback => {
  if (wpm >= 90) return { tip: 'Blazing fast!', color: 'bg-green-500' };
  if (wpm >= 60) return { tip: 'Nice work!', color: 'bg-yellow-400' };
  if (wpm >= 30) return { tip: 'Keep practicing!', color: 'bg-orange-400' };
  return { tip: 'Focus on accuracy first.', color: 'bg-red-400' };
};

const SpeedBar: React.FC<SpeedBarProps> = ({ placeholder, wpm }) => {
  const maxWPM = 120;
  const percentage = Math.min((wpm / maxWPM) * 100, 100);
  const { tip, color } = getPerformanceFeedback(wpm);

  return (
    <div className="mb-4">
      <div className="w-full bg-gray-200 rounded h-6 relative overflow-hidden">
        <div className={`h-full transition-all duration-300 ease-in-out ${color}`}
          style={{ width: `${percentage}%` }}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-500">{placeholder}</span>
              <span className="text-sm text-gray-500">{wpm} WPM</span>
            </div>
        </div>
      </div>
      <p className="text-xs text-gray-600 mt-1 italic">{tip}</p>
    </div>
  );
};

const TypingPerformanceCard: React.FC<TypingPerformanceCardProps> = ({ current, lastWeek, lastMonth }) => {
  return (
    <div className="w-full max-w-md bg-white p-6">
      <h2 className="text-lg text-gray-600 font-bold mb-4">Typing Performance</h2>

      <SpeedBar placeholder="Current Speed" wpm={current} />
      <SpeedBar placeholder="Last Week" wpm={lastWeek} />
      <SpeedBar placeholder="Last Month" wpm={lastMonth} />
    </div>
  );
};

export default TypingPerformanceCard;
