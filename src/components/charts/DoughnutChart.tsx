
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

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  colors?: string[];
  cutout?: string;
  centerText?: {
    value: string;
    label?: string;
  };
}

export default function DoughnutChart({ 
  data, 
  labels, 
  colors = ['#9ed16f', '#ffcd55', '#ff9f67', '#ff6b6b', '#5dc3e2'],
  cutout = '70%',
  centerText
}: DoughnutChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout,
    plugins: {
      legend: {
        display: false,
      }
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="relative h-[170px]">
      <Doughnut options={options} data={chartData} />
      {centerText && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{centerText.value}</span>
          {centerText.label && <span className="text-xs text-gray-500">{centerText.label}</span>}
        </div>
      )}
    </div>
  );
}
