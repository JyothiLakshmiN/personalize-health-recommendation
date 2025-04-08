
import React from 'react';
import StatCard from '@/components/dashboard/StatCard';
import ExpenseOverview from '@/components/dashboard/ExpenseOverview';
import ExpenseBreakdown from '@/components/dashboard/ExpenseBreakdown';
import GroceryList from '@/components/dashboard/GroceryList';
import WeightData from '@/components/dashboard/WeightData';
import CaloriesIntake from '@/components/dashboard/CaloriesIntake';
import { CircleDollarSign, Calendar, Salad } from 'lucide-react';
import Header from '@/components/Header';

const Index = () => {
  // Mock user data
  const user = {
    name: "Adam Vasylenko",
    role: "Member",
    avatar: "https://i.pravatar.cc/300?img=8"
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header title="Dashboard" user={user} />
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard
            title="Estimated Cost"
            value="$157"
            icon={<CircleDollarSign className="h-5 w-5 text-nutrigo-green" />}
            change={{ value: "2.55%", positive: true }}
            bgColor="bg-nutrigo-light-green"
          />
          
          <StatCard
            title="Total Items"
            value="40"
            icon={<Calendar className="h-5 w-5 text-nutrigo-yellow" />}
            change={{ value: "10.5%", positive: true }}
            bgColor="bg-nutrigo-light-yellow"
          />
          
          <StatCard
            title="Total Calories"
            value="21,815"
            icon={<Salad className="h-5 w-5 text-nutrigo-orange" />}
            change={{ value: "3.5%", positive: false }}
            bgColor="bg-nutrigo-light-orange"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ExpenseOverview />
          <ExpenseBreakdown />
        </div>
        
        <GroceryList />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <WeightData />
          <CaloriesIntake />
        </div>
      </div>
    </div>
  );
};

export default Index;
