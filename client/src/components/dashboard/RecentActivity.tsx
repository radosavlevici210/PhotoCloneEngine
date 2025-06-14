import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Check, BarChart3, AlertTriangle } from 'lucide-react';
import { ActivityItem } from '@/types/dashboard';

interface RecentActivityProps {
  activities: ActivityItem[];
}

const iconMap = {
  training: Play,
  deployment: Check,
  analysis: BarChart3,
  warning: AlertTriangle,
  success: Check,
};

const iconColorMap = {
  training: 'bg-blue-600',
  deployment: 'bg-green-600',
  analysis: 'bg-purple-600',
  warning: 'bg-orange-600',
  success: 'bg-green-600',
};

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <Card className="dark-100 border-gray-700">
      <CardHeader className="border-b border-gray-700">
        <CardTitle className="text-lg font-semibold text-white">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = iconMap[activity.type];
            const iconColor = iconColorMap[activity.type];

            return (
              <div key={activity.id} className="flex items-center space-x-3">
                <div className={`w-8 h-8 ${iconColor} rounded-full flex items-center justify-center`}>
                  <IconComponent size={14} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">{activity.title}</p>
                  <p className="text-xs text-gray-400">{activity.description}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.timestamp}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
