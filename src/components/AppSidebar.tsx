
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel
} from '@/components/ui/sidebar';
import NutrigoLogo from '@/components/NutrigoLogo';
import Navigation from '@/components/Navigation';
import UserAvatar from '@/components/UserAvatar';

const AppSidebar = () => {
  // Mock user data
  const user = {
    name: "Adam Vasylenko",
    role: "Member",
    avatar: "https://i.pravatar.cc/300?img=8"
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <Link to="/" className="flex items-center px-2 py-3">
          <NutrigoLogo />
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <Navigation />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <UserAvatar name={user.name} src={user.avatar} size="sm" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-xs text-gray-500">{user.role}</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
