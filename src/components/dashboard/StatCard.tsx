
import React, { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: {
    value: string;
    positive: boolean;
  };
  bgColor?: string;
}

export default function StatCard({ title, value, icon, change, bgColor = 'bg-nutrigo-light-green' }: StatCardProps) {
  return (
    <div className={`rounded-xl p-4 ${bgColor}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">{title}</span>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className={`text-xs ${change.positive ? 'text-green-600' : 'text-red-600'} flex items-center`}>
            {change.positive ? '+' : ''}{change.value}
          </div>
        )}
      </div>
    </div>
  );
}
