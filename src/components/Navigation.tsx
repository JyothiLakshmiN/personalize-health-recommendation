
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, BarChartBig, Settings } from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar';

const Navigation = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/"
    },
    {
      title: "Grocery List",
      icon: ShoppingCart,
      path: "/grocery"
    },
    {
      title: "Reports",
      icon: BarChartBig,
      path: "/reports"
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings"
    }
  ];
  
  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton 
            asChild 
            isActive={location.pathname === item.path}
            tooltip={item.title}
          >
            <Link to={item.path}>
              <item.icon className="size-4" />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default Navigation;
