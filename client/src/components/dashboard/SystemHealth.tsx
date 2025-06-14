import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SystemHealth as SystemHealthType } from '@/types/dashboard';

interface SystemHealthProps {
  data: SystemHealthType;
}

export default function SystemHealth({ data }: SystemHealthProps) {
  const getProgressColor = (value: number) => {
    if (value >= 80) return 'bg-red-600';
    if (value >= 60) return 'bg-orange-600';
    if (value >= 40) return 'bg-blue-600';
    return 'bg-green-600';
  };

  const metrics = [
    { label: 'CPU Usage', value: data.cpu },
    { label: 'Memory Usage', value: data.memory },
    { label: 'GPU Usage', value: data.gpu },
    { label: 'Storage', value: data.storage },
  ];

  return (
    <Card className="dark-100 border-gray-700">
      <CardHeader className="border-b border-gray-700">
        <CardTitle className="text-lg font-semibold text-white">Advanced System Health</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">{metric.label}</span>
              <span className="text-sm text-white font-medium">{metric.value}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressColor(metric.value)}`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
          <div key="Learning Efficiency">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Learning Efficiency</span>
              <span className="text-sm text-green-400 font-medium">98.7%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full bg-green-400`}
                style={{ width: `98.7%` }}
              />
            </div>
          </div>

          <div key="Neural Processing">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Neural Processing</span>
              <span className="text-sm text-blue-400 font-medium">Optimal</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full bg-blue-400`}
                style={{ width: `95%` }}
              />
            </div>
          </div>
      </CardContent>
    </Card>
  );
}