
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DoughnutChart from '../charts/DoughnutChart';

export default function ExpenseBreakdown() {
  const data = [30, 25, 18, 7, 5];
  const labels = ['Protein', 'Grains', 'Fruits', 'Veggies', 'Dairy'];
  const colors = ['#9ed16f', '#ffcd55', '#ff9f67', '#ff6b6b', '#5dc3e2'];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Expense Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="w-[170px]">
            <DoughnutChart 
              data={data} 
              labels={labels} 
              colors={colors}
              centerText={{ value: '$157', label: 'Total Spent' }}
            />
          </div>
          
          <div className="flex flex-col gap-2 w-full max-w-[200px]">
            {data.map((value, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[index] }}></div>
                <span className="text-sm">{labels[index]}</span>
                <div className="ml-auto text-sm">${(value * 1.57).toFixed(2)}</div>
                <div className="text-xs text-gray-500">{value}%</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
