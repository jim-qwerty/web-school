// src/presentation/features/admisiones/components/Estudiantes.tsx
import { useState } from 'react'

interface Estudiante {
  documento: string
  apellidos: string
  nombres: string
  fechaNacimiento: string
  sexo: string
  ubigeo: string
  lenguaMaterna: string
  segundaLengua: string
  peso: number
  talla: number
  alergias: string
  discapacidad: string
}

export default function Estudiantes() {
  const [ficha, setFicha] = useState<Estudiante>({
    documento: '', apellidos: '', nombres: '', fechaNacimiento: '', sexo: '',
    ubigeo: '', lenguaMaterna: '', segundaLengua: '', peso: 0, talla: 0,
    alergias: '', discapacidad: ''
  })
  const [filtros, setFiltros] = useState({ grado: '', seccion: '', estado: '' })

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Estudiantes</h1>

      {/* Ficha única */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Ficha única (SIAGIE)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span>Código/DNI</span>
            <input className="mt-1 p-2 border rounded" value={ficha.documento} onChange={e=>setFicha({...ficha, documento:e.target.value})}/>
          </label>
          <label className="flex flex-col">
            <span>Apellidos</span>
            <input className="mt-1 p-2 border rounded" value={ficha.apellidos} onChange={e=>setFicha({...ficha, apellidos:e.target.value})}/>
          </label>
          <label className="flex flex-col">
            <span>Nombres</span>
            <input className="mt-1 p-2 border rounded" value={ficha.nombres} onChange={e=>setFicha({...ficha, nombres:e.target.value})}/>
          </label>
          <label className="flex flex-col">
            <span>Fecha de Nacimiento</span>
            <input type="date" className="mt-1 p-2 border rounded" value={ficha.fechaNacimiento} onChange={e=>setFicha({...ficha, fechaNacimiento:e.target.value})}/>
          </label>
          <label className="flex flex-col">
            <span>Sexo</span>
            <select className="mt-1 p-2 border rounded" value={ficha.sexo} onChange={e=>setFicha({...ficha, sexo:e.target.value})}>
              <option value="">Seleccione</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span>Ubigeo de Nacimiento</span>
            <input className="mt-1 p-2 border rounded" value={ficha.ubigeo} onChange={e=>setFicha({...ficha, ubigeo:e.target.value})}/>
          </label>
          <label className="flex flex-col">
            <span>Lengua Materna</span>
            <input className="mt-1 p-2 border rounded" value={ficha.lenguaMaterna} onChange={e=>setFicha({...ficha, lenguaMaterna:e.target.value})}/>
          </label>
          <label className="flex flex-col">
            <span>Segunda Lengua</span>
            <input className="mt-1 p-2 border rounded" value={ficha.segundaLengua} onChange={e=>setFicha({...ficha, segundaLengua:e.target.value})}/>
          </label>
          <label className="flex flex-col">
            <span>Peso (kg)</span>
            <input type="number" className="mt-1 p-2 border rounded" value={ficha.peso} onChange={e=>setFicha({...ficha, peso:+e.target.value})}/>
          </label>
          <label className="flex flex-col">
            <span>Talla (cm)</span>
            <input type="number" className="mt-1 p-2 border rounded" value={ficha.talla} onChange={e=>setFicha({...ficha, talla:+e.target.value})}/>
          </label>
          <label className="flex flex-col md:col-span-2">
            <span>Alergias</span>
            <input className="mt-1 p-2 border rounded" value={ficha.alergias} onChange={e=>setFicha({...ficha, alergias:e.target.value})}/>
          </label>
          <label className="flex flex-col md:col-span-2">
            <span>Discapacidad</span>
            <input className="mt-1 p-2 border rounded" value={ficha.discapacidad} onChange={e=>setFicha({...ficha, discapacidad:e.target.value})}/>
          </label>
        </div>
      </section>

      {/* Búsqueda y filtros */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Búsqueda y Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input className="p-2 border rounded" placeholder="Grado" value={filtros.grado} onChange={e=>setFiltros({...filtros, grado:e.target.value})}/>
          <input className="p-2 border rounded" placeholder="Sección" value={filtros.seccion} onChange={e=>setFiltros({...filtros, seccion:e.target.value})}/>
          <input className="p-2 border rounded" placeholder="Estado Matrícula" value={filtros.estado} onChange={e=>setFiltros({...filtros, estado:e.target.value})}/>
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