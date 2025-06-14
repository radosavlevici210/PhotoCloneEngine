import { useQuery } from '@tanstack/react-query';
import { DashboardMetrics, SystemHealth, ActivityItem } from '@/types/dashboard';

export function useMetrics() {
  return useQuery<DashboardMetrics>({
    queryKey: ['/api/metrics'],
    refetchInterval: 30000, // Refetch every 30 seconds
  });
}

export function useSystemHealth() {
  return useQuery<SystemHealth>({
    queryKey: ['/api/system-health'],
    refetchInterval: 5000, // Refetch every 5 seconds
  });
}

export function useActivities() {
  return useQuery<ActivityItem[]>({
    queryKey: ['/api/activities'],
    refetchInterval: 15000, // Refetch every 15 seconds
  });
}
