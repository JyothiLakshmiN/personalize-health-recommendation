import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Plus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GroceryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  cost: number;
  status?: 'purchased';
}

export default function GroceryList() {
  const groceryItems: GroceryItem[] = [
    { id: 1, name: 'Apples', category: 'Fruits', quantity: 5, cost: 3.99, status: 'purchased' },
    { id: 2, name: 'Chicken Breast', category: 'Protein', quantity: 2, cost: 9.99 },
    { id: 3, name: 'Brown Rice', category: 'Grains', quantity: 1, cost: 4.49 },
    { id: 4, name: 'Spinach', category: 'Vegetables', quantity: 1, cost: 2.99, status: 'purchased' },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Grocery List</CardTitle>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search item" className="pl-10 h-8 w-[180px]" />
          </div>
          <Button variant="outline" size="sm" className="h-8">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm" className="h-8 bg-nutrigo-green hover:bg-nutrigo-green/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Categories</TabsTrigger>
            <TabsTrigger value="grains">Grains</TabsTrigger>
            <TabsTrigger value="fruits">Fruits</TabsTrigger>
            <TabsTrigger value="veggies">Vegetables</TabsTrigger>
            <TabsTrigger value="protein">Protein</TabsTrigger>
            <TabsTrigger value="dairy">Dairy</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="m-0">
            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50 text-sm text-gray-500">
                    <th className="text-left p-3 pl-4">Item Name</th>
                    <th className="text-left p-3">Category</th>
                    <th className="text-left p-3">Qty</th>
                    <th className="text-left p-3">Cost</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {groceryItems.map((item) => (
                    <tr key={item.id} className="border-b last:border-b-0">
                      <td className="p-3 pl-4">{item.name}</td>
                      <td className="p-3">{item.category}</td>
                      <td className="p-3">{item.quantity}</td>
                      <td className="p-3">${item.cost.toFixed(2)}</td>
                      <td className="p-3">${(item.quantity * item.cost).toFixed(2)}</td>
                      <td className="p-3">
                        {item.status === 'purchased' ? (
                          <span className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            Purchased
                          </span>
                        ) : (
                          <span className="text-gray-400">Pending</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          {/* Other tab contents would be similar */}
        </Tabs>
      </CardContent>
    </Card>
  );
}
