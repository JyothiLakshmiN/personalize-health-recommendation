
import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
  user: {
    name: string;
    role: string;
    avatar: string;
  };
}

export default function Header({ title, user }: HeaderProps) {
  return (
    <div className="flex justify-between items-center py-4 px-6 border-b">
      <h1 className="text-2xl font-semibold">{title}</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search anything" 
            className="pl-10 pr-4 w-[280px] bg-gray-50" 
          />
        </div>
        
        <div className="relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
            2
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <img src={user.avatar} alt={user.name} />
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-xs text-gray-500">{user.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
