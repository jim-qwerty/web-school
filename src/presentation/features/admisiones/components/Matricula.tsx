// src/presentation/features/admisiones/components/Matricula.tsx
import { useState } from 'react'

interface Asignacion {
  documento: string
  fecha: string
  observaciones: string
}

export default function Matricula() {
  const [grado, setGrado] = useState('')
  const [seccion, setSeccion] = useState('')
  const [documento, setDocumento] = useState('')
  const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0])
  const [observaciones, setObservaciones] = useState('')
  const [asignaciones, setAsignaciones] = useState<Asignacion[]>([])

  const handleAdd = () => {
    if (!grado || !seccion || !documento) return
    setAsignaciones([
      ...asignaciones,
      { documento, fecha, observaciones }
    ])
    setDocumento('')
    setObservaciones('')
  }

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Matrícula</h1>

      {/* Asignación a sección */}
      <section className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Asignación a sección</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Grado"
            value={grado}
            onChange={e => setGrado(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Sección"
            value={seccion}
            onChange={e => setSeccion(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="DNI o código alumno"
            value={documento}
            onChange={e => setDocumento(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            className="p-2 border rounded"
          />
          <textarea
            placeholder="Observaciones"
            value={observaciones}
            onChange={e => setObservaciones(e.target.value)}
            className="md:col-span-4 p-2 border rounded"
          />
        </div>
        <button
          onClick={handleAdd}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Agregar asignación
        </button>

        {asignaciones.length > 0 && (
          <ul className="mt-4 space-y-2">
            {asignaciones.map((a, i) => (
              <li
                key={i}
                className="flex justify-between p-2 border rounded"
              >
                <span>{a.documento}</span>
                <span>{a.fecha}</span>
                <span>{a.observaciones}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Exportación a SIAGIE */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Exportación a SIAGIE</h2>
        <button className="px-4 py-2 border rounded hover:bg-gray-100">
          Generar CSV/XML
        </button>
      </section>

      {/* Plantillas */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Plantillas</h2>
        <div className="space-x-2">
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            Agregar Plantilla
          </button>
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            Ver Plantillas
          </button>
        </div>
      </section>
    </div>
  )
}
