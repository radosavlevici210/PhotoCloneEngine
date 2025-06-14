import { Play, Rocket, BarChart3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickActions = [
  {
    id: 'start-training',
    label: 'Start Training',
    icon: Play,
    color: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    id: 'deploy-model',
    label: 'Deploy Model',
    icon: Rocket,
    color: 'bg-green-600 hover:bg-green-700',
  },
  {
    id: 'run-analysis',
    label: 'Run Analysis',
    icon: BarChart3,
    color: 'bg-purple-600 hover:bg-purple-700',
  },
  {
    id: 'view-logs',
    label: 'View Logs',
    icon: List,
    color: 'bg-orange-600 hover:bg-orange-700',
  },
];

export default function QuickActions() {
  const handleAction = (actionId: string) => {
    console.log(`Executing action: ${actionId}`);
    // Implementation for each action would go here
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <Button
              key={action.id}
              onClick={() => handleAction(action.id)}
              className={`${action.color} text-white p-4 h-auto flex-col space-y-2 transition-colors`}
            >
              <IconComponent size={24} />
              <span className="text-sm font-medium">{action.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
