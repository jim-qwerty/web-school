// src/presentation/components/Topbar.tsx
import { User } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="flex items-center justify-between h-14 px-6 bg-white border-b">
      {/* Logo y nombre */}
      <div className="flex items-center">
        <img src="" alt="SchoolLama" className="w-6 h-6 mr-2" />
        <span className="text-lg font-semibold text-gray-800">School</span>
      </div>

      {/* Perfil de usuario */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <User className="w-7 h-7 text-gray-400" />
        <div className="text-left">
          <div className="text-xs font-medium text-gray-700">Jimx</div>
          <div className="text-xs text-gray-500">Admin</div>
        </div>
      </div>
    </header>
  )
}
