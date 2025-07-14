// src/presentation/components/Sidebar.tsx
import { NavLink, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  UsersIcon,
  BookOpenIcon,
  CalendarIcon,
  CogIcon,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Alumnos',    href: '/students',  icon: UsersIcon },
  { name: 'Cursos',     href: '/courses',   icon: BookOpenIcon },
  { name: 'Calendario', href: '/calendar',  icon: CalendarIcon },
  { name: 'Ajustes',    href: '/settings',  icon: CogIcon },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        SchoolLama
      </h2>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive
                      ? 'bg-gray-100 text-purple-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
                >
                  <Icon className="w-5 h-5 mr-3" />
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
