
import React from 'react';
import NutrigoLogo from './NutrigoLogo';
import { 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Book, 
  ClipboardList, 
  Utensils, 
  FilePenLine, 
  ActivitySquare, 
  Dumbbell, 
  HeartPulse 
} from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Dashboard', active: true, notification: false },
    { icon: <Calendar className="w-5 h-5" />, label: 'Calendar', active: false, notification: false },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Messages', active: false, notification: 2 },
    { icon: <Utensils className="w-5 h-5" />, label: 'Healthy Menu', active: false, notification: false },
    { icon: <ClipboardList className="w-5 h-5" />, label: 'Meal Plan', active: false, notification: false },
    { icon: <Book className="w-5 h-5" />, label: 'Food Plan', active: false, notification: false },
    { icon: <FilePenLine className="w-5 h-5" />, label: 'Grocery List', active: false, notification: false },
    { icon: <ActivitySquare className="w-5 h-5" />, label: 'Food Diary', active: false, notification: false },
    { icon: <Dumbbell className="w-5 h-5" />, label: 'Progress', active: false, notification: false },
    { icon: <Dumbbell className="w-5 h-5" />, label: 'Exercises', active: false, notification: false },
    { icon: <HeartPulse className="w-5 h-5" />, label: 'Health Insights', active: false, notification: false },
  ];

  return (
    <div className="w-64 bg-white border-r h-screen p-4 flex flex-col">
      <div className="mb-8 pl-4">
        <NutrigoLogo />
      </div>
      
      <div className="flex flex-col flex-1 gap-1">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${
              item.active ? 'bg-nutrigo-green bg-opacity-20 text-nutrigo-green' : 'hover:bg-gray-100'
            }`}
          >
            <div className="text-current">{item.icon}</div>
            <span>{item.label}</span>
            {item.notification && (
              <div className="ml-auto bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {item.notification}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
