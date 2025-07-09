
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  FileText, 
  Settings, 
  MessageSquare,
  Calendar,
  Folder,
  CreditCard,
  UserCheck,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Users' },
  { icon: ShoppingCart, label: 'E-Commerce' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: FileText, label: 'Documents' },
  { icon: MessageSquare, label: 'Chat' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Folder, label: 'File Manager' },
  { icon: CreditCard, label: 'Invoice' },
  { icon: UserCheck, label: 'Users' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help Center' },
];

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="text-xl font-bold">Tailux</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "secondary" : "ghost"}
            className={`w-full justify-start text-left h-10 ${
              item.active 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <item.icon className="h-4 w-4 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">JD</span>
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
