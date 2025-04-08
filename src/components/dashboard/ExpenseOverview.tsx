
import React from 'react';
import BarChart from '../charts/BarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ExpenseOverview() {
  const monthlyData = [120, 170, 160, 190, 230, 220, 200, 170, 210];
  const months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Expense Overview</CardTitle>
        <Select defaultValue="last6months">
          <SelectTrigger className="w-[140px] h-8 text-xs">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last6months">Last 6 Months</SelectItem>
            <SelectItem value="last12months">Last 12 Months</SelectItem>
            <SelectItem value="thisyear">This Year</SelectItem>
            <SelectItem value="lastyear">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <BarChart data={monthlyData} labels={months} height={250} />
        </div>
      </CardContent>
    </Card>
  );
}
