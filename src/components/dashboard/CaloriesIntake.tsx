
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DoughnutChart from '../charts/DoughnutChart';
import { MoreHorizontal, Utensils } from 'lucide-react';

export default function CaloriesIntake() {
  const data = [1240, 510];
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Calories Intake</CardTitle>
        <button className="h-8 w-8 rounded-md hover:bg-gray-100 flex items-center justify-center">
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <div className="w-[170px]">
            <DoughnutChart 
              data={data} 
              labels={['Consumed', 'Remaining']} 
              colors={['#ff9f67', '#f3f4f6']}
              centerText={{ value: '1240', label: 'Calories left' }}
            />
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-nutrigo-light-green flex items-center justify-center">
              <Utensils className="h-4 w-4 text-nutrigo-green" />
            </div>
            <div>
              <div className="text-sm">Carbohydrates</div>
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-nutrigo-green h-1.5 rounded-full" style={{ width: '37%' }}></div>
                </div>
                <span className="text-xs text-gray-500">37%</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-nutrigo-light-yellow flex items-center justify-center">
              <Utensils className="h-4 w-4 text-nutrigo-yellow" />
            </div>
            <div>
              <div className="text-sm">Proteins</div>
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-nutrigo-yellow h-1.5 rounded-full" style={{ width: '53%' }}></div>
                </div>
                <span className="text-xs text-gray-500">53%</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-nutrigo-light-orange flex items-center justify-center">
              <Utensils className="h-4 w-4 text-nutrigo-orange" />
            </div>
            <div>
              <div className="text-sm">Fats</div>
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-nutrigo-orange h-1.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span className="text-xs text-gray-500">45%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
