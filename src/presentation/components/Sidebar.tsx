import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { NavItem } from '../types'

interface SidebarProps {
  items: NavItem[]
  basePath: string
}

export default function Sidebar({ items, basePath }: SidebarProps) {
  const { pathname } = useLocation()
  const [expanded, setExpanded] = useState<string | null>(null)

  const handleToggle = (href: string) => {
    setExpanded(expanded === href ? null : href)
  }

  return (
    // font-sans hereda Inter vía tu configuración global
    <aside className="flex flex-col w-52 h-screen px-3 py-6 bg-white border-r font-sans">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">School Jim</h2>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1.5">
          {items.map(item => {
            const fullPath = `${basePath}/${item.href}`
            const isActive = pathname === fullPath || pathname.startsWith(`${fullPath}/`)
            const Icon = item.icon
            const hasChildren = Array.isArray(item.children) && item.children.length > 0
            const isExpanded = expanded === item.href

            return (
              <li key={item.href}>
                <div className="flex items-center justify-between">
                  <NavLink
                    to={fullPath}
                    end={!hasChildren}
                    onClick={() => hasChildren && handleToggle(item.href)}
                    className={({ isActive: linkActive }) =>
                      `flex items-center px-2 py-1 rounded-lg text-xs font-normal transition-colors
                      ${linkActive || isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`
                    }
                  >
                    <Icon className="w-3.5 h-3.5 mr-3" />
                    {item.name}
                  </NavLink>
                  {hasChildren && (
                    <button
                      onClick={() => handleToggle(item.href)}
                      className="p-1"
                      aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>

                {hasChildren && isExpanded && (
                  <ul className="ml-6 mt-1 space-y-1">
                    {item.children!.map(child => {
                      const childPath = `${basePath}/${child.href}`
                      return (
                        <li key={child.href}>
                          <NavLink
                            to={childPath}
                            className={({ isActive: linkActive }) =>
                              `block px-2 py-1 rounded-lg text-xs font-normal transition-colors
                              ${linkActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`
                            }
                          >
                            {child.name}
                          </NavLink>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
