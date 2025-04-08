
import React from 'react';
import Header from '@/components/Header';
import GroceryList from '@/components/dashboard/GroceryList';

const GroceryPage = () => {
  // Mock user data
  const user = {
    name: "Adam Vasylenko",
    role: "Member",
    avatar: "https://i.pravatar.cc/300?img=8"
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header title="Grocery List" user={user} />
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Grocery Management</h1>
          <p className="text-gray-500">Track, organize, and manage your grocery shopping</p>
        </div>
        
        <GroceryList />
      </div>
    </div>
  );
};

export default GroceryPage;
