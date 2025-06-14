import React from "react";
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  changeLabel: string;
  icon: LucideIcon;
  iconColor: string;
  changeType: 'positive' | 'negative' | 'neutral';
}

const MetricsCard = React.memo(function MetricsCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  iconColor,
  changeType
}: MetricsCardProps) {
  const changeColorClass = {
    positive: 'text-green-400',
    negative: 'text-red-400',
    neutral: 'text-blue-400'
  }[changeType];

  return (
    <Card className="dark-100 border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
          </div>
          <div className={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center`}>
            <Icon size={24} className="text-white" />
          </div>
        </div>
        <div className="mt-4">
          <span className={`text-sm font-medium ${changeColorClass}`}>{change}</span>
          <span className="text-gray-400 text-sm ml-2">{changeLabel}</span>
        </div>
      </CardContent>
    </Card>
  );
});

export default MetricsCard;