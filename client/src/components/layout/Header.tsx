import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="dark-100 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="secondary" size="sm" className="p-2 bg-gray-700 hover:bg-gray-600">
            <Bell size={16} className="text-gray-300" />
          </Button>
          <Button variant="secondary" size="sm" className="p-2 bg-gray-700 hover:bg-gray-600">
            <User size={16} className="text-gray-300" />
          </Button>
        </div>
      </div>
    </header>
  );
}
