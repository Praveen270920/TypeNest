'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

interface TimePieChartProps {
  data: {
    label: string;
    minutes: number;
  }[];
}

const COLORS = ['#4ade80', '#facc15']; // green for done, yellow for remaining

const getChartData = (minutes: number, goal: number = 60) => [
  { name: 'Completed', value: Math.min(minutes, goal) },
  { name: 'Remaining', value: Math.max(goal - minutes, 0) }
];

const renderSingleChart = (label: string, minutes: number) => (
  <div className="flex flex-col items-center" key={label}>
    <h3 className="text-md font-bold mb-2">{label}</h3>
    <ResponsiveContainer width={100} height={100}>
      <PieChart>
        <Pie
          data={getChartData(minutes)}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={40}
          label
        >
          {getChartData(minutes).map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <p className="text-sm text-gray-600 mt-1">{minutes} min/60 min</p>
  </div>
);

const TimePieChart: React.FC<TimePieChartProps> = ({ data }) => {
  return (
    <div className="w-full bg-white shadow-xl rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-500">Time Spent</h2>
      <div className="flex justify-around flex-wrap gap-4">
        {data.map(({ label, minutes }) => renderSingleChart(label, minutes))}
      </div>
    </div>
  );
};

export default TimePieChart;
