export interface DashboardMetrics {
  activeModels: number;
  trainingJobs: number;
  accuracy: number;
  systemLoad: number;
}

export interface SystemHealth {
  cpu: number;
  memory: number;
  gpu: number;
  storage: number;
}

export interface ActivityItem {
  id: string;
  type: 'training' | 'deployment' | 'analysis' | 'warning' | 'success';
  title: string;
  description: string;
  timestamp: string;
  icon: string;
  iconColor: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  isAdvanced?: boolean;
}
