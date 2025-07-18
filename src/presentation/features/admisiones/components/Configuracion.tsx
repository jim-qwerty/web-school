// src/presentation/features/admisiones/components/Configuracion.tsx
"use client"

import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/presentation/components/ui/card"
import { Label } from "@/presentation/components/ui/label"
import { Input } from "@/presentation/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/presentation/components/ui/select"
import { Button } from "@/presentation/components/ui/button"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/presentation/components/ui/table"
import { Plus, X } from "lucide-react"

export default function ConfiguracionPage() {
  // — Datos Institución / Año Escolar —
  const [codigos, setCodigos] = useState<string[]>([""])
  const agregarCodigo = () => setCodigos([...codigos, ""])
  const actualizarCodigo = (i: number, v: string) => {
    const copia = [...codigos]
    copia[i] = v
    setCodigos(copia)
  }

  // — Grados y Secciones (lectura + modal) —
  const [nivelGlobal, setNivelGlobal] = useState<string>("")
  const [secciones, setSecciones] = useState<
    { nivel: string; grado: string; seccion: string; cupo: string }[]
  >([])

  // Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [nueva, setNueva] = useState({
    nivel: "",
    grado: "",
    seccion: "",
    cupo: "",
  })

  const abrirModal = () => {
    setNueva({ nivel: "", grado: "", seccion: "", cupo: "" })
    setModalOpen(true)
  }
  const cerrarModal = () => setModalOpen(false)

  const guardarNueva = () => {
    const { nivel, grado, seccion, cupo } = nueva
    if (!nivel || !grado || !seccion || !cupo) return
    setSecciones([...secciones, nueva])
    cerrarModal()
  }

  return (
    <div className="px-5 py-4 space-y-4">
      <h1 className="text-2xl font-semibold">Configuración</h1>

      {/* Wrapper relativo para centrar modal entre los dos cards */}
      <div className="relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Card 1: Datos Institución / Año Escolar */}
          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <CardTitle>Datos Institución / Año Escolar</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 space-y-2">
                <Label>Códigos Modulares</Label>
                {codigos.map((c, i) => (
                  <Input
                    key={i}
                    value={c}
                    placeholder="Ej. 12345"
                    onChange={(e) => actualizarCodigo(i, e.target.value)}
                  />
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={agregarCodigo}
                >
                  <Plus className="mr-1 h-4 w-4" />
                  Agregar Código
                </Button>
              </div>
              <div className="space-y-1">
                <Label htmlFor="nombre">Nombre de la IE</Label>
                <Input id="nombre" placeholder="Ej. Colegio Nacional" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="direccion">Dirección</Label>
                <Input id="direccion" placeholder="Dirección completa" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="anio">Año Lectivo</Label>
                <Select>
                  <SelectTrigger id="anio" className="w-full">
                    <SelectValue placeholder="Seleccione año" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="fases">Fases</Label>
                <Select>
                  <SelectTrigger id="fases" className="w-full">
                    <SelectValue placeholder="I, II" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="I">Fase I</SelectItem>
                    <SelectItem value="II">Fase II</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="periodos">Periodos Evaluación</Label>
                <Select>
                  <SelectTrigger id="periodos" className="w-full">
                    <SelectValue placeholder="Bimestres/Trimestres" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="bimestres">Bimestres</SelectItem>
                    <SelectItem value="trimestres">Trimestres</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Guardar Datos</Button>
            </CardFooter>
          </Card>

          {/* Card 2: Grados y Secciones */}
          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <div className="flex items-center justify-between w-full">
                <CardTitle>Grados y Secciones</CardTitle>
                <div className="flex items-center space-x-2">
                  <Select value={nivelGlobal} onValueChange={setNivelGlobal}>
                    <SelectTrigger id="nivel" className="w-48">
                      <SelectValue placeholder="Seleccione nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inicial">Inicial</SelectItem>
                      <SelectItem value="primaria">Primaria</SelectItem>
                      <SelectItem value="secundaria">Secundaria</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* Botón circular */}
                  <button
                    onClick={abrirModal}
                    className="h-10 w-10 flex items-center justify-center rounded-full border border-white hover:bg-white/20 transition"
                  >
                    <Plus className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Grado</TableHead>
                    <TableHead>Sección</TableHead>
                    <TableHead>Nivel</TableHead>
                    <TableHead>Cupo Máximo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {secciones.map((s, i) => (
                    <TableRow key={i}>
                      <TableCell>{s.grado}</TableCell>
                      <TableCell>{s.seccion}</TableCell>
                      <TableCell>{s.nivel}</TableCell>
                      <TableCell>{s.cupo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Overlay + Modal centrado entre los dos cards */}
        {modalOpen && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
              <header className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Agregar Grado / Sección</h2>
                <button onClick={cerrarModal}>
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </header>
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label>Nivel</Label>
                  <Select
                    value={nueva.nivel}
                    onValueChange={(v) => setNueva({ ...nueva, nivel: v })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccione nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inicial">Inicial</SelectItem>
                      <SelectItem value="primaria">Primaria</SelectItem>
                      <SelectItem value="secundaria">Secundaria</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label>Grado</Label>
                  <Input
                    placeholder="Ej. 1°"
                    value={nueva.grado}
                    onChange={(e) =>
                      setNueva({ ...nueva, grado: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label>Sección</Label>
                  <Input
                    placeholder="Ej. A"
                    value={nueva.seccion}
                    onChange={(e) =>
                      setNueva({ ...nueva, seccion: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label>Cupo Máximo</Label>
                  <Input
                    type="number"
                    placeholder="Ej. 30"
                    value={nueva.cupo}
                    onChange={(e) =>
                      setNueva({ ...nueva, cupo: e.target.value })
                    }
                  />
                </div>
              </div>
              <footer className="mt-6 flex justify-end space-x-2">
                <Button variant="outline" onClick={cerrarModal}>
                  Cancelar
                </Button>
                <Button onClick={guardarNueva}>Guardar</Button>
              </footer>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
