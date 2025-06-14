import { Link, useLocation } from 'wouter';
import { 
  Home, 
  Settings, 
  Bot, 
  Cpu, 
  GraduationCap, 
  Shield, 
  Info,
  Atom,
  Network,
  Gauge,
  Lightbulb,
  Brain
} from 'lucide-react';
import { NavigationItem } from '@/types/dashboard';

const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'Home',
    path: '/',
  },
  {
    id: 'train-model',
    label: 'Train Model',
    icon: 'Settings',
    path: '/train-model',
  },
  {
    id: 'learning-machine',
    label: 'Learning Machine',
    icon: 'Bot',
    path: '/learning-machine',
  },
  {
    id: 'advanced-ml',
    label: 'Advanced Machine Learning',
    icon: 'Cpu',
    path: '/advanced-ml',
  },
  {
    id: 'training-center',
    label: 'Training Center',
    icon: 'GraduationCap',
    path: '/training-center',
  },
  {
    id: 'security-system',
    label: 'Security System',
    icon: 'Shield',
    path: '/security-system',
  },
  {
    id: 'about',
    label: 'About',
    icon: 'Info',
    path: '/about',
  },
];

const advancedFeatures: NavigationItem[] = [
  {
    id: 'quantum-analysis',
    label: 'Quantum Analysis',
    icon: 'Atom',
    path: '/quantum-analysis',
    isAdvanced: true,
  },
  {
    id: 'neural-augmentation',
    label: 'Neural Augmentation',
    icon: 'Network',
    path: '/neural-augmentation',
    isAdvanced: true,
  },
  {
    id: 'hyper-optimization',
    label: 'Hyper Optimization',
    icon: 'Gauge',
    path: '/hyper-optimization',
    isAdvanced: true,
  },
  {
    id: 'ai-feature-suggestions',
    label: 'AI Feature Suggestions',
    icon: 'Lightbulb',
    path: '/ai-feature-suggestions',
    isAdvanced: true,
  },
];

const iconMap = {
  Home,
  Settings,
  Bot,
  Cpu,
  GraduationCap,
  Shield,
  Info,
  Atom,
  Network,
  Gauge,
  Lightbulb,
  Brain,
};

export default function Sidebar() {
  const [location] = useLocation();

  const renderNavItem = (item: NavigationItem) => {
    const IconComponent = iconMap[item.icon as keyof typeof iconMap];
    const isActive = location === item.path;

    return (
      <Link key={item.id} href={item.path}>
        <div
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
            isActive
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
        >
          <IconComponent size={16} />
          <span>{item.label}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-64 dark-300 border-r border-gray-700 flex flex-col min-h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Brain size={16} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">AI/ML</h1>
            <p className="text-xs text-gray-400">Model Management</p>
            <p className="text-xs text-gray-400">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map(renderNavItem)}
        
        <div className="pt-4 border-t border-gray-700 mt-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Advanced Features
          </p>
          {advancedFeatures.map(renderNavItem)}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-center">
          <p className="text-xs font-bold text-gray-400 mb-1">PERMANENT COPY</p>
          <p className="text-xs text-gray-500">Radosavlevici (ervin210@icloud.com) - ALL</p>
          <p className="text-xs text-gray-500">RIGHTS RESERVED</p>
          <div className="mt-3 pt-3 border-t border-gray-700">
            <p className="text-xs font-bold text-blue-400">PROPRIETARY SYSTEM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
