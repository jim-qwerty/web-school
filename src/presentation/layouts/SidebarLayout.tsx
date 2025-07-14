// src/presentation/layouts/SidebarLayout.tsx
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function SidebarLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />

      {/* Aquí irán todas las páginas hijas de /admisiones */}
      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
