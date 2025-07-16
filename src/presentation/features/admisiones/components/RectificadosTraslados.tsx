// src/presentation/features/admisiones/components/RectificadosTraslados.tsx
import { useState } from 'react'

type RectTipo = 'repetición' | 'promoción'

interface Rectificacion {
  id: string
  tipo: RectTipo
  motivo: string
}

interface Traslado {
  id: string
  documento: string
  origen: string
  destino: string
  fecha: string // YYYY-MM-DD
}

export default function RectificadosTraslados() {
  const [rectificaciones, setRectificaciones] = useState<Rectificacion[]>([])
  const [traslados, setTraslados] = useState<Traslado[]>([])

  // Form states
  const [newRectTipo, setNewRectTipo] = useState<RectTipo>('repetición')
  const [newMotivo, setNewMotivo] = useState('')
  const [newDoc, setNewDoc] = useState('')
  const [newOrigen, setNewOrigen] = useState('')
  const [newDestino, setNewDestino] = useState('')
  const [newFecha, setNewFecha] = useState(new Date().toISOString().split('T')[0])

  // Estados y responsables
  const [estadoMap, setEstadoMap] = useState<Record<string, string>>({})
  const [respMap, setRespMap] = useState<Record<string, string>>({})

  // Handlers
  const addRectificacion = () => {
    const id = Date.now().toString()
    setRectificaciones(prev => [...prev, { id, tipo: newRectTipo, motivo: newMotivo }])
    setNewMotivo('')
  }

  const addTraslado = () => {
    const id = Date.now().toString()
    setTraslados(prev => [...prev, { id, documento: newDoc, origen: newOrigen, destino: newDestino, fecha: newFecha }])
    setNewDoc('')
    setNewOrigen('')
    setNewDestino('')
  }

  // Merge items for estados
  const items = [
    ...rectificaciones.map(r => ({ id: r.id, tipo: 'Rectificación', desc: `${r.tipo}: ${r.motivo}` })),
    ...traslados.map(t => ({ id: t.id, tipo: 'Traslado', desc: `${t.documento} de ${t.origen} a ${t.destino}` })),
  ]

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Rectificados / Traslados</h1>

      {/* Rectificaciones de nómina */}
      <section className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Rectificaciones de nómina</h2>
        <div className="flex items-center space-x-2">
          <select
            value={newRectTipo}
            onChange={e => setNewRectTipo(e.target.value as RectTipo)}
            className="p-2 border rounded"
          >
            <option value="repetición">Repetición</option>
            <option value="promoción">Promoción extraordinaria</option>
          </select>
          <input
            type="text"
            placeholder="Motivo"
            value={newMotivo}
            onChange={e => setNewMotivo(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={addRectificacion}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Agregar
          </button>
        </div>
        {rectificaciones.length > 0 && (
          <ul className="mt-2 space-y-1">
            {rectificaciones.map(r => (
              <li key={r.id} className="p-2 border rounded">
                {r.tipo} – {r.motivo}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Gestión de traslados */}
      <section className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Gestión de traslados</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="DNI/Alumno"
            value={newDoc}
            onChange={e => setNewDoc(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Institución origen"
            value={newOrigen}
            onChange={e => setNewOrigen(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Institución destino"
            value={newDestino}
            onChange={e => setNewDestino(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={newFecha}
            onChange={e => setNewFecha(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        <button
          onClick={addTraslado}
          className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Agregar traslado
        </button>
        {traslados.length > 0 && (
          <ul className="mt-2 space-y-1">
            {traslados.map(t => (
              <li key={t.id} className="p-2 border rounded">
                {t.documento}: {t.origen} → {t.destino} ({t.fecha})
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Estados y aprobaciones */}
      <section className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Estados y aprobaciones</h2>
        <div className="space-y-2">
          {items.map(item => (
            <div key={item.id} className="flex items-center space-x-4 p-2 border rounded">
              <span className="w-48 font-medium">[{item.tipo}] {item.desc}</span>
              <select
                value={estadoMap[item.id] || 'pendiente'}
                onChange={e => setEstadoMap(prev => ({ ...prev, [item.id]: e.target.value }))}
                className="p-2 border rounded"
              >
                <option value="pendiente">Pendiente</option>
                <option value="aprobado">Aprobado</option>
                <option value="rechazado">Rechazado</option>
              </select>
              <input
                type="text"
                placeholder="Responsable"
                value={respMap[item.id] || ''}
                onChange={e => setRespMap(prev => ({ ...prev, [item.id]: e.target.value }))}
                className="p-2 border rounded flex-1"
              />
            </div>
          ))}
        </div>
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
