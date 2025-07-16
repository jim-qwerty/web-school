// src/presentation/layouts/SidebarLayout.tsx
import { Outlet } from 'react-router-dom'
import type { NavItem } from '../types'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'   // <— hemos añadido esto

interface SidebarLayoutProps {
  items: NavItem[]
  basePath: string
}

export default function SidebarLayout({ items, basePath }: SidebarLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* 1. Sidebar */}
      <Sidebar items={items} basePath={basePath} />

      {/* 2. Contenido principal */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* — Topbar */}
        <Topbar />

        {/* — Resto de la página */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
