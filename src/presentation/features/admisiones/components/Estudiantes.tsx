"use client"

import { useState } from "react"
import { Eye, Trash2, Plus, X } from "lucide-react"
import {
  Table, TableHeader, TableRow, TableHead, TableBody, TableCell
} from "@/presentation/components/ui/table"
import { Input } from "@/presentation/components/ui/input"
import { Label } from "@/presentation/components/ui/label"
import { Button } from "@/presentation/components/ui/button"

interface Alumno {
  id: string
  nombre: string
  seccion: string
  grado: number
  telefono: string
  direccion: string
  foto?: string
}

const alumnosIniciales: Alumno[] = [
  {
    id: "S293847",
    nombre: "Evan Ward",
    seccion: "2A",
    grado: 2,
    telefono: "987-654-321",
    direccion: "456 Oak Ave, Maplewood",
    foto: "https://i.pravatar.cc/150?img=1",
  },
]

export default function AlumnosPage() {
  const [alumnos, setAlumnos] = useState<Alumno[]>(alumnosIniciales)
  const [modalOpen, setModalOpen] = useState(false)

  const [nuevo, setNuevo] = useState({
    dni: "",
    nombres: "",
    fechaNacimiento: "",
    sexo: "",
    nivel: "",
    grado: "",
    seccion: "",
    direccion: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value })
  }

  const guardarAlumno = () => {
    const nuevoAlumno: Alumno = {
      id: `S${Math.floor(Math.random() * 1000000)}`,
      nombre: nuevo.nombres,
      seccion: nuevo.seccion,
      grado: Number(nuevo.grado),
      telefono: "—",
      direccion: nuevo.direccion,
      foto: "https://i.pravatar.cc/150?u=" + nuevo.dni,
    }
    setAlumnos([...alumnos, nuevoAlumno])
    setNuevo({
      dni: "", nombres: "", fechaNacimiento: "", sexo: "", nivel: "",
      grado: "", seccion: "", direccion: ""
    })
    setModalOpen(false)
  }

  return (
    <div className="p-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Todos los Alumnos</h2>
        <Button onClick={() => setModalOpen(true)} className="flex gap-2">
          <Plus className="w-4 h-4" />
          Agregar Alumno
        </Button>
      </div>

      {/* Tabla de alumnos */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Info</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Grado</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Dirección</TableHead>
            <TableHead className="text-center">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alumnos.map((alumno) => (
            <TableRow key={alumno.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    src={alumno.foto}
                    alt="Foto"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{alumno.nombre}</p>
                    <span className="text-sm text-gray-500">{alumno.seccion}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{alumno.id}</TableCell>
              <TableCell>{alumno.grado}</TableCell>
              <TableCell>{alumno.telefono}</TableCell>
              <TableCell>{alumno.direccion}</TableCell>
              <TableCell>
                <div className="flex justify-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal personalizado con fondo oscuro global */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg">
            <header className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Agregar Alumno</h2>
              <button onClick={() => setModalOpen(false)}>
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </header>

            <form onSubmit={(e) => {
              e.preventDefault()
              guardarAlumno()
            }} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>DNI</Label>
                  <Input name="dni" value={nuevo.dni} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Apellidos y Nombres</Label>
                  <Input name="nombres" value={nuevo.nombres} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Fecha de Nacimiento</Label>
                  <Input type="date" name="fechaNacimiento" value={nuevo.fechaNacimiento} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Sexo</Label>
                  <select name="sexo" value={nuevo.sexo} onChange={handleChange} className="w-full border rounded px-2 py-1">
                    <option value="">Seleccione</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </select>
                </div>
                <div>
                  <Label>Nivel Educativo</Label>
                  <Input name="nivel" value={nuevo.nivel} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Grado</Label>
                  <Input name="grado" value={nuevo.grado} onChange={handleChange} required />
                </div>
                <div>
                  <Label>Sección</Label>
                  <Input name="seccion" value={nuevo.seccion} onChange={handleChange} required />
                </div>
                <div className="col-span-2">
                  <Label>Dirección</Label>
                  <Input name="direccion" value={nuevo.direccion} onChange={handleChange} required />
                </div>
              </div>

              <footer className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setModalOpen(false)}>Cancelar</Button>
                <Button type="submit">Guardar</Button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
