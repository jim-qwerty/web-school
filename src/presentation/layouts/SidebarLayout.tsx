// src/presentation/layouts/SidebarLayout.tsx

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import type { NavItem } from '../types';

interface SidebarLayoutProps {
  items: NavItem[];
  basePath: string;             // <-- también aquí
}

export default function SidebarLayout({ items, basePath }: SidebarLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar items={items} basePath={basePath} />
      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
