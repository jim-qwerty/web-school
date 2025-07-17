// src/presentation/components/Sidebar.tsx
import { NavLink, useLocation } from 'react-router-dom'
import type { NavItem } from '../types'

interface SidebarProps {
  items: NavItem[]
  basePath: string
}

export default function Sidebar({ items, basePath }: SidebarProps) {
  const { pathname } = useLocation()

  return (
    // font-sans hereda Inter vía tu configuración global
    <aside className="flex flex-col w-52 h-screen px-3 py-6 bg-white border-r font-sans">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">School Jim</h2>
      <nav className="flex-1">
        <ul className="space-y-1.5">
          {items.map(item => {
            const fullPath = `${basePath}/${item.href}`
            const isActive = pathname === fullPath
            const Icon = item.icon
            return (
              <li key={item.href}>
                <NavLink
                  to={fullPath}
                  end
                  className={`
                    flex items-center px-2 py-1 rounded-lg
                    text-xs           /* 1 rem = 16 px */
                    font-normal       /* peso normal (400), por defecto en Inter */
                    transition-colors
                    ${isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <Icon className="w-3.5 h-3.5 mr-3" />
                  {item.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
