// src/presentation/components/Sidebar.tsx

import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-6">SchoolLama</h2>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/admisiones"
              className={({ isActive }) =>
                isActive ? 'text-purple-600 font-medium' : 'text-gray-700'
              }
            >
              Admisiones
            </NavLink>
          </li>
          {/* Resto de rutas: /gestion-academica, /evaluacion, etc. */}
        </ul>
      </nav>
      <div className="mt-8 space-y-4">
        <NavLink to="/profile" className="block hover:text-purple-600">
          Profile
        </NavLink>
        <NavLink to="/settings" className="block hover:text-purple-600">
          Settings
        </NavLink>
        <button className="block text-left hover:text-red-600">Logout</button>
      </div>
    </aside>
  )
}
