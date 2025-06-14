import { Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './Sidebar';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="dark-100 border-b border-gray-700 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary" size="sm" className="p-2 bg-gray-700 hover:bg-gray-600">
                  <Menu size={16} className="text-gray-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64 bg-gray-900 border-gray-700">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
          
          <div>
            <h2 className="text-lg md:text-xl font-bold text-white">{title}</h2>
            <p className="text-xs md:text-sm text-gray-400">{subtitle}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
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
