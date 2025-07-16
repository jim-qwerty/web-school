// src/presentation/features/admisiones/components/Admision.tsx
import { useState } from 'react'

interface Convocatoria {
  nombre: string
  apertura: string // YYYY-MM-DD
  cierre: string   // YYYY-MM-DD
  documentos: string
  criterios: string
  puntajeMax: number
  responsable: string
}

interface Solicitud {
  id: string
  estado: 'nuevo' | 'en revisión' | 'aprobado' | 'rechazado'
}

export default function Admision() {
  const [convocatoria, setConvocatoria] = useState<Convocatoria>({
    nombre: '',
    apertura: '',
    cierre: '',
    documentos: '',
    criterios: '',
    puntajeMax: 0,
    responsable: ''
  })
  const [solicitudes, /*setSolicitudes*/] = useState<Solicitud[]>([])

  const handleConvChange = <K extends keyof Convocatoria>(
    field: K,
    value: Convocatoria[K]
  ) => setConvocatoria({ ...convocatoria, [field]: value })

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Admisión</h1>

      {/* Convocatorias */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Convocatoria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span>Nombre</span>
            <input
              type="text"
              value={convocatoria.nombre}
              onChange={e => handleConvChange('nombre', e.target.value)}
              className="mt-1 p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            <span>Fecha de apertura</span>
            <input
              type="date"
              value={convocatoria.apertura}
              onChange={e => handleConvChange('apertura', e.target.value)}
              className="mt-1 p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            <span>Fecha de cierre</span>
            <input
              type="date"
              value={convocatoria.cierre}
              onChange={e => handleConvChange('cierre', e.target.value)}
              className="mt-1 p-2 border rounded"
            />
          </label>
          <label className="flex flex-col md:col-span-2">
            <span>Documentos requeridos</span>
            <textarea
              value={convocatoria.documentos}
              onChange={e => handleConvChange('documentos', e.target.value)}
              className="mt-1 p-2 border rounded"
            />
          </label>
          <label className="flex flex-col md:col-span-2">
            <span>Criterios de selección</span>
            <textarea
              value={convocatoria.criterios}
              onChange={e => handleConvChange('criterios', e.target.value)}
              className="mt-1 p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            <span>Puntaje máximo</span>
            <input
              type="number"
              value={convocatoria.puntajeMax}
              onChange={e => handleConvChange('puntajeMax', +e.target.value)}
              className="mt-1 p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            <span>Responsable</span>
            <input
              type="text"
              value={convocatoria.responsable}
              onChange={e => handleConvChange('responsable', e.target.value)}
              className="mt-1 p-2 border rounded"
            />
          </label>
        </div>
      </section>

      {/* Solicitudes */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Solicitudes</h2>
        {solicitudes.length === 0 ? (
          <p className="text-gray-500">No hay solicitudes registradas.</p>
        ) : (
          <ul className="space-y-2">
            {solicitudes.map(s => (
              <li key={s.id} className="flex justify-between p-2 border rounded">
                <span>ID: {s.id}</span>
                <span>Estado: {s.estado}</span>
              </li>
            ))}
          </ul>
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
