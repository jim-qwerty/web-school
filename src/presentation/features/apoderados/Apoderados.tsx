// src/presentation/features/admisiones/components/Apoderados.tsx
"use client"

import { useState } from "react"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/presentation/components/ui/table"
import { Button } from "@/presentation/components/ui/button"
import { Input } from "@/presentation/components/ui/input"
import { Label } from "@/presentation/components/ui/label"
import { Edit2, Trash2, Plus, X } from "lucide-react"

interface Apoderado {
  id: string
  nombres: string
  apellidos: string
  dni: string
  alumno: string
  parentesco: string
  celular: string
  correo: string
  foto?: string
}

const apoderadosIniciales: Apoderado[] = [
  {
    id: "P1001",
    nombres: "John",
    apellidos: "Doe",
    dni: "12345678",
    alumno: "Sarah Brewer",
    parentesco: "Padre",
    celular: "912345678",
    correo: "john@doe.com",
    foto: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "P1002",
    nombres: "Jane",
    apellidos: "Doe",
    dni: "87654321",
    alumno: "Cecilia Bradley",
    parentesco: "Madre",
    celular: "987654321",
    correo: "jane@doe.com",
    foto: "https://i.pravatar.cc/150?img=4",
  },
]

export default function ApoderadosPage() {
  const [apoderados, setApoderados] = useState<Apoderado[]>(apoderadosIniciales)
  const [modalOpen, setModalOpen] = useState(false)

  const [nuevo, setNuevo] = useState({
    nombres: "",
    apellidos: "",
    dni: "",
    alumno: "",
    parentesco: "",
    celular: "",
    correo: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value })
  }

  const guardarApoderado = () => {
    const { nombres, apellidos, dni, alumno, parentesco, celular, correo } = nuevo
    if (!nombres || !apellidos || !dni || !alumno || !parentesco || !celular || !correo)
      return

    const newApod: Apoderado = {
      id: `P${Math.floor(Math.random() * 1000000)}`,
      nombres,
      apellidos,
      dni,
      alumno,
      parentesco,
      celular,
      correo,
      foto: `https://i.pravatar.cc/150?u=${dni}`,
    }

    setApoderados([newApod, ...apoderados])
    setNuevo({
      nombres: "",
      apellidos: "",
      dni: "",
      alumno: "",
      parentesco: "",
      celular: "",
      correo: "",
    })
    setModalOpen(false)
  }

  const eliminar = (id: string) =>
    setApoderados(apoderados.filter((a) => a.id !== id))

  return (
    <div className="p-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Todos los Apoderados</h2>
        <Button onClick={() => setModalOpen(true)} className="flex gap-2">
          <Plus className="w-4 h-4" />
          Agregar Apoderado
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Info</TableHead>
            <TableHead>DNI</TableHead>
            <TableHead>Alumno</TableHead>
            <TableHead>Parentesco</TableHead>
            <TableHead>Celular</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead className="text-center">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apoderados.map((ap) => (
            <TableRow key={ap.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    src={ap.foto}
                    alt="Foto"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {ap.nombres} {ap.apellidos}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{ap.dni}</TableCell>
              <TableCell>{ap.alumno}</TableCell>
              <TableCell>{ap.parentesco}</TableCell>
              <TableCell>{ap.celular}</TableCell>
              <TableCell>{ap.correo}</TableCell>
              <TableCell>
                <div className="flex justify-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-red-500"
                    onClick={() => eliminar(ap.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Nuevo Apoderado</h2>
              <button onClick={() => setModalOpen(false)}>
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </header>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                guardarApoderado()
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                
                <div className="col-span-2">
                  <Label>Alumno</Label>
                  <Input
                    name="alumno"
                    value={nuevo.alumno}
                    onChange={handleChange}
                    placeholder="Nombre del alumno"
                    required
                  />
                </div>
                <div>
                  <Label>Nombres</Label>
                  <Input
                    name="nombres"
                    value={nuevo.nombres}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label>Apellidos</Label>
                  <Input
                    name="apellidos"
                    value={nuevo.apellidos}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label>DNI</Label>
                  <Input
                    name="dni"
                    value={nuevo.dni}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label>Parentesco</Label>
                  <Input
                    name="parentesco"
                    value={nuevo.parentesco}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label>Celular</Label>
                  <Input
                    name="celular"
                    value={nuevo.celular}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div >
                  <Label>Correo electrónico</Label>
                  <Input
                    type="email"
                    name="correo"
                    value={nuevo.correo}
                    onChange={handleChange}
                    required
                  />
                </div>
                
              </div>

              <footer className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Guardar</Button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
