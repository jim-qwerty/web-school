// src/presentation/components/Sidebar.tsx

import { NavLink, useLocation } from 'react-router-dom';
import type { NavItem } from '../types';

interface SidebarProps {
  items: NavItem[];
  basePath: string;            // <-- agregamos este prop
}

export default function Sidebar({ items, basePath }: SidebarProps) {
  const { pathname } = useLocation();

  return (
    <aside className="flex flex-col w-52 h-screen px-3 py-6 bg-white border-r">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">SchoolLama</h2>
      <nav className="flex-1">
        <ul className="space-y-1">
          {items.map(item => {
            const fullPath = `${basePath}/${item.href}`;     // absolute
            const isActive = pathname === fullPath;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <NavLink
                  to={fullPath}
                  end
                  className={`
                    flex items-center px-2 py-1 rounded-lg text-xs font-medium transition-colors
                    ${isActive
                      ? 'bg-gray-100 text-purple-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
