import { Brain, Settings, TrendingUp, Server } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import MetricsCard from '@/components/dashboard/MetricsCard';
import SystemHealth from '@/components/dashboard/SystemHealth';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';
import { useMetrics, useSystemHealth, useActivities } from '@/hooks/useMetrics';
import { Skeleton } from '@/components/ui/skeleton';

export default function Dashboard() {
  const { data: metrics, isLoading: metricsLoading } = useMetrics();
  const { data: systemHealth, isLoading: systemHealthLoading } = useSystemHealth();
  const { data: activities, isLoading: activitiesLoading } = useActivities();

  if (metricsLoading || systemHealthLoading || activitiesLoading) {
    return (
      <Layout>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-32 dark-100" />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Skeleton className="h-64 dark-100" />
            <Skeleton className="h-64 dark-100" />
          </div>
        </div>
      </Layout>
    );
  }

  if (!metrics || !systemHealth || !activities) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-400">Unable to load dashboard data</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricsCard
            title="Active Models"
            value={metrics.activeModels.toString()}
            change="+8.2%"
            changeLabel="from last month"
            icon={Brain}
            iconColor="bg-blue-600"
            changeType="positive"
          />
          <MetricsCard
            title="Training Jobs"
            value={metrics.trainingJobs.toString()}
            change="2 in progress"
            changeLabel="1 queued"
            icon={Settings}
            iconColor="bg-green-600"
            changeType="neutral"
          />
          <MetricsCard
            title="Accuracy Rate"
            value={`${metrics.accuracy}%`}
            change="+2.1%"
            changeLabel="improvement"
            icon={TrendingUp}
            iconColor="bg-purple-600"
            changeType="positive"
          />
          <MetricsCard
            title="System Load"
            value={`${metrics.systemLoad}%`}
            change="Moderate"
            changeLabel="load level"
            icon={Server}
            iconColor="bg-orange-600"
            changeType="neutral"
          />
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity activities={activities} />
          <SystemHealth data={systemHealth} />
        </div>

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </Layout>
  );
}
