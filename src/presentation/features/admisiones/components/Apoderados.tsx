// src/presentation/features/admisiones/components/Apoderados.tsx
import { useState } from 'react'

interface Apoderado {
  nombre: string
  relacion: string
  dni: string
  fechaNacimiento: string
  domicilio: string
  telefono: string
  email: string
  nivelInstruccion: string
  esApoderado: boolean
}
interface Vinculo { alumnoDocumento: string }

export default function Apoderados() {
  const [form, setForm] = useState<Apoderado>({
    nombre: '', relacion: '', dni: '', fechaNacimiento: '', domicilio: '',
    telefono: '', email: '', nivelInstruccion: '', esApoderado: false
  })
  const [vinculos, setVinculos] = useState<Vinculo[]>([])

  const addVinculo = () => setVinculos([...vinculos, { alumnoDocumento: '' }])

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Apoderados</h1>

      {/* Registro */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Registro de Apoderado</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Campos apoderado similares a Estudiante */}
          <label className="flex flex-col"><span>Nombre Completo</span><input className="mt-1 p-2 border rounded" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/></label>
          <label className="flex flex-col"><span>Relación</span><input className="mt-1 p-2 border rounded" value={form.relacion} onChange={e=>setForm({...form,relacion:e.target.value})}/></label>
          <label className="flex flex-col"><span>DNI</span><input className="mt-1 p-2 border rounded" value={form.dni} onChange={e=>setForm({...form,dni:e.target.value})}/></label>
          <label className="flex flex-col"><span>Fecha de Nac.</span><input type="date" className="mt-1 p-2 border rounded" value={form.fechaNacimiento} onChange={e=>setForm({...form,fechaNacimiento:e.target.value})}/></label>
          <label className="flex flex-col"><span>Domicilio</span><input className="mt-1 p-2 border rounded" value={form.domicilio} onChange={e=>setForm({...form,domicilio:e.target.value})}/></label>
          <label className="flex flex-col"><span>Teléfono</span><input className="mt-1 p-2 border rounded" value={form.telefono} onChange={e=>setForm({...form,telefono:e.target.value})}/></label>
          <label className="flex flex-col"><span>Email</span><input type="email" className="mt-1 p-2 border rounded" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label>
          <label className="flex flex-col"><span>Nivel Instrucción</span><input className="mt-1 p-2 border rounded" value={form.nivelInstruccion} onChange={e=>setForm({...form,nivelInstruccion:e.target.value})}/></label>
          <label className="flex items-center space-x-2 mt-4 md:col-span-2">
            <input type="checkbox" checked={form.esApoderado} onChange={e=>setForm({...form,esApoderado:e.target.checked})}/> <span>¿Es Apoderado?</span>
          </label>
        </div>
      </section>

      {/* Vínculo */}
      <section className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Vínculo con Estudiantes</h2>
          <button onClick={addVinculo} className="px-3 py-1 bg-green-500 text-white rounded">+ Agregar</button>
        </div>
        <div className="space-y-3">
          {vinculos.map((v,i)=>(
            <div key={i} className="flex space-x-2">
              <input placeholder="DNI Alumno" className="p-2 border rounded" value={v.alumnoDocumento} onChange={e=>{
                const arr=[...vinculos]; arr[i].alumnoDocumento=e.target.value; setVinculos(arr);
              }}/>
            </div>
          ))}
        </div>
      </section>

      {/* Plantillas */}
      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Plantillas</h2>
        <div className="space-x-2"><button className="px-4 py-2 border rounded">Agregar</button><button className="px-4 py-2 border rounded">Ver</button></div>
      </section>
    </div>
)}
