
import React from 'react';
import { Bell, Search, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import AdminSidebar from './AdminSidebar';
import DashboardStats from './DashboardStats';
import DashboardChart from './DashboardChart';
import RecentActivity from './RecentActivity';
import WalletCard from './WalletCard';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search here..." 
                  className="pl-10 w-64 bg-gray-50 border-gray-200"
                />
              </div>
              
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>
              
              {/* Messages */}
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-5 w-5" />
              </Button>
              
              {/* User Avatar */}
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Cards */}
          <DashboardStats />
          
          {/* Charts */}
          <DashboardChart />
          
          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            
            {/* Wallet Card */}
            <div>
              <WalletCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
