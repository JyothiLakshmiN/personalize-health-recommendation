
import React from 'react';
import Header from '@/components/Header';
import ExpenseOverview from '@/components/dashboard/ExpenseOverview';
import ExpenseBreakdown from '@/components/dashboard/ExpenseBreakdown';

const ReportsPage = () => {
  // Mock user data
  const user = {
    name: "Adam Vasylenko",
    role: "Member",
    avatar: "https://i.pravatar.cc/300?img=8"
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header title="Reports" user={user} />
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Expenditure Reports</h1>
          <p className="text-gray-500">View your spending patterns and nutrition analytics</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ExpenseOverview />
          <ExpenseBreakdown />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
