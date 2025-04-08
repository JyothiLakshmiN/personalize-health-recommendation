
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GaugeChart from '../charts/GaugeChart';
import { MoreHorizontal } from 'lucide-react';

export default function WeightData() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Weight Data</CardTitle>
        <button className="h-8 w-8 rounded-md hover:bg-gray-100 flex items-center justify-center">
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </button>
      </CardHeader>
      <CardContent>
        <GaugeChart
          value={78}
          max={115}
          label="Current Weight"
          unit="kg"
          colors={{ track: '#f3f4f6', progress: '#ff9f67' }}
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <div>65</div>
          <div>115 kg</div>
        </div>
        <div className="text-center text-sm text-gray-600 mt-4">
          <p>Progress is progress, no matter how slow.</p>
          <p>Keep going, you're getting closer to your goal every day! 🌟</p>
        </div>
      </CardContent>
    </Card>
  );
}
