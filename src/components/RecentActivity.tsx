
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    id: 1,
    user: 'User Profile Changed',
    avatar: 'UC',
    action: 'John Doe changed his avatar photo',
    time: '2 min ago',
    status: 'completed'
  },
  {
    id: 2,
    user: 'Design Completed',
    avatar: 'DC',
    action: 'Robert Node completed the design of the CRM application',
    time: '15 min ago',
    status: 'completed'
  },
  {
    id: 3,
    user: 'ER Diagram',
    avatar: 'ER',
    action: 'Team completed the ER diagram app',
    time: '1 hour ago',
    status: 'pending'
  },
  {
    id: 4,
    user: 'Weekly Report',
    avatar: 'WR',
    action: 'The weekly report has uploaded',
    time: '2 hours ago',
    status: 'completed'
  }
];

const RecentActivity = () => {
  return (
    <Card className="bg-white border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">
          Users Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                {activity.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {activity.user}
                </p>
                <Badge 
                  variant={activity.status === 'completed' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {activity.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {activity.action}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
