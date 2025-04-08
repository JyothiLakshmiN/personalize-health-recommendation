
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface GaugeChartProps {
  value: number;
  max: number;
  label: string;
  unit: string;
  colors?: {
    track?: string;
    progress?: string;
  };
}

export default function GaugeChart({ 
  value, 
  max, 
  label, 
  unit,
  colors = { 
    track: '#f3f4f6', 
    progress: '#ff9f67'
  } 
}: GaugeChartProps) {
  const percentage = (value / max) * 100;
  
  const data = {
    datasets: [
      {
        data: [value, max - value],
        backgroundColor: [colors.progress, colors.track],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative h-[180px]">
      <Doughnut data={data} options={options} />
      <div className="absolute bottom-3 inset-x-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold">{value}{unit}</span>
        <span className="text-xs text-gray-500">{label}</span>
      </div>
    </div>
  );
}
