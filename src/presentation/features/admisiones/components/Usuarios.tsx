// src/presentation/features/admisiones/components/Usuarios.tsx
import { useState } from 'react'

interface User {
  id: string
  nombre: string
  email: string
  rol: string
  activo: boolean
}

const roles = ['Directivo', 'Secretaría Académica', 'Profesorado', 'Padres/Apoderados']
const modulos = ['Admisiones', 'Gestión Académica', 'RRHH']

export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([])
  const [formUser, setFormUser] = useState<Omit<User, 'id'>>({
    nombre: '',
    email: '',
    rol: roles[0],
    activo: true,
  })
  const [selectedUser, setSelectedUser] = useState<string>('')

  const handleFormChange = (field: keyof Omit<User, 'id'>, value: string | boolean) => {
    setFormUser(prev => ({ ...prev, [field]: value }))
  }

  const handleCreate = () => {
    const newUser: User = {
      id: Date.now().toString(),
      ...formUser,
    }
    setUsers(prev => [...prev, newUser])
    // reset form
    setFormUser({ nombre: '', email: '', rol: roles[0], activo: true })
  }

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Usuarios</h1>

      {/* Gestión de cuentas */}
      <section className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Gestión de Cuentas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={formUser.nombre}
            onChange={e => handleFormChange('nombre', e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={formUser.email}
            onChange={e => handleFormChange('email', e.target.value)}
            className="p-2 border rounded"
          />
          <select
            value={formUser.rol}
            onChange={e => handleFormChange('rol', e.target.value)}
            className="p-2 border rounded"
          >
            {roles.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <label className="flex items-center space-x-2 md:col-span-3">
            <input
              type="checkbox"
              checked={formUser.activo}
              onChange={e => handleFormChange('activo', e.target.checked)}
            />
            <span>Activo</span>
          </label>
        </div>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Crear usuario
        </button>

        {/* Listado de usuarios */}
        {users.length > 0 && (
          <ul className="mt-4 divide-y">
            {users.map(u => (
              <li key={u.id} className="flex justify-between p-2">
                <div>
                  <p className="font-medium">{u.nombre}</p>
                  <p className="text-sm text-gray-600">{u.email} – {u.rol}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={u.activo ? 'text-green-600' : 'text-red-600'}>
                    {u.activo ? 'Activo' : 'Desactivado'}
                  </span>
                  {/* Aquí podrías añadir botones Editar / Desactivar */}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Permisos y acceso */}
      <section className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Permisos y Acceso</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={selectedUser}
            onChange={e => setSelectedUser(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Selecciona un usuario</option>
            {users.map(u => (
              <option key={u.id} value={u.id}>{u.nombre}</option>
            ))}
          </select>
        </div>
        {selectedUser && (
          <div className="space-y-2">
            {modulos.map(m => (
              <div key={m} className="flex items-center space-x-4">
                <span className="w-32">{m}</span>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" />
                  <span>Lectura</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" />
                  <span>Escritura</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="checkbox" />
                  <span>Aprobación</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Plantillas */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Plantillas</h2>
        <div className="space-x-2">
          <button className="px-4 py-2 border rounded hover:bg-gray-100">Agregar Plantilla</button>
          <button className="px-4 py-2 border rounded hover:bg-gray-100">Ver Plantillas</button>
        </div>
      </section>
    </div>
  )
}
