
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Activity } from 'lucide-react';

const stats = [
  {
    title: 'Total Users',
    value: '393k',
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'text-green-500'
  },
  {
    title: 'Total Orders',
    value: '203k',
    change: '+8%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'text-blue-500'
  },
  {
    title: 'Total Sales',
    value: '$9,566.00',
    change: '-2%',
    trend: 'down',
    icon: DollarSign,
    color: 'text-purple-500'
  },
  {
    title: 'Conversion Rate',
    value: '36.6%',
    change: '+4%',
    trend: 'up',
    icon: Activity,
    color: 'text-orange-500'
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="flex items-center text-sm">
              {stat.trend === 'up' ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                {stat.change}
              </span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
