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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/presentation/components/ui/tabs"
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
import { Plus, Upload } from "lucide-react"

export default function ConfiguracionPage() {
  // Estado para manejar múltiples códigos modulares
  const [codigos, setCodigos] = useState<string[]>([""])
  const agregarCodigo = () => setCodigos([...codigos, ""])
  const actualizarCodigo = (index: number, value: string) => {
    const nuevos = [...codigos]
    nuevos[index] = value
    setCodigos(nuevos)
  }

  // Nivel seleccionado (evita warning de "assigned but never used")
  const [nivel, setNivel] = useState<string>("")

  // Estado para Grados/Secciones dinámicos
  const [secciones, setSecciones] = useState<
    { grado: string; seccion: string; cupo: string }[]
  >([{ grado: "", seccion: "", cupo: "" }])

  const agregarSeccion = () =>
    setSecciones([...secciones, { grado: "", seccion: "", cupo: "" }])

  const actualizarSeccion = (
    idx: number,
    field: "grado" | "seccion" | "cupo",
    value: string
  ) => {
    const copia = [...secciones]
    copia[idx][field] = value
    setSecciones(copia)
  }

  return (
    <div className="px-5 py-2 space-y-2">
      <h1 className="text-lg font-bold">Configuración</h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Módulo 1: Datos Institución / Año Escolar */}
        <Card className="bg-gray-900 text-white" >
          <CardHeader>
            <CardTitle className="text-xs">Datos Institución / Año Escolar</CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Códigos Modulares */}
            <div className="col-span-1 md:col-span-2 space-y-1">
              <Label>Códigos Modulares</Label>
              {codigos.map((codigo, idx) => (
                <Input
                  key={idx}
                  value={codigo}
                  onChange={(e) => actualizarCodigo(idx, e.target.value)}
                  placeholder="Ej. 12345"
                />
              ))}
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={agregarCodigo}
              >
                <Plus className="mr-2 h-4 w-4" />
                Agregar Código
              </Button>
            </div>

            {/* Nombre IE */}
            <div className="space-y-1">
              <Label htmlFor="nombre">Nombre de la IE</Label>
              <Input id="nombre" placeholder="Ej. Colegio Nacional" />
            </div>

            {/* Dirección */}
            <div className="space-y-1">
              <Label htmlFor="direccion">Dirección</Label>
              <Input id="direccion" placeholder="Dirección completa" />
            </div>

            {/* Año Lectivo */}
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

            {/* Fases */}
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

            {/* Periodos Evaluación */}
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

        {/* Módulo 2: Secciones a través de Tabs */}
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <Tabs defaultValue="grados">
              <TabsList>
                <TabsTrigger value="grados">Grados y Secciones</TabsTrigger>
                <TabsTrigger value="plantillas">Plantillas</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="grados">
              <TabsContent value="grados" className="space-y-4">
                {/* Select de Nivel (ahora con value para evitar warning) */}
                <div className="space-y-1">
                  <Label htmlFor="nivel" className="text-white">
                    Nivel
                  </Label>
                  <Select value={nivel} onValueChange={setNivel}>
                    <SelectTrigger id="nivel" className="w-48">
                      <SelectValue placeholder="Seleccione nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inicial">Inicial</SelectItem>
                      <SelectItem value="primaria">Primaria</SelectItem>
                      <SelectItem value="secundaria">Secundaria</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tabla dinámica de Grados/Secciones */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Grado</TableHead>
                      <TableHead>Sección</TableHead>
                      <TableHead>Cupo Máximo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {secciones.map((s, i) => (
                      <TableRow key={i}>
                        {/* Grado: ahora Select */}
                        <TableCell>
                          <Select
                            value={s.grado}
                            onValueChange={(v) =>
                              actualizarSeccion(i, "grado", v)
                            }
                          >
                            <SelectTrigger className="w-24">
                              <SelectValue placeholder="Grado" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1°</SelectItem>
                              <SelectItem value="2">2°</SelectItem>
                              <SelectItem value="3">3°</SelectItem>
                              <SelectItem value="4">4°</SelectItem>
                              <SelectItem value="5">5°</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>

                        {/* Sección */}
                        <TableCell>
                          <Input
                            placeholder="A, B,…"
                            value={s.seccion}
                            onChange={(e) =>
                              actualizarSeccion(i, "seccion", e.target.value)
                            }
                          />
                        </TableCell>

                        {/* Cupo Máximo */}
                        <TableCell>
                          <Input
                            type="number"
                            placeholder="30"
                            className="w-20"
                            value={s.cupo}
                            onChange={(e) =>
                              actualizarSeccion(i, "cupo", e.target.value)
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Botón Agregar Sección (ahora usa onClick) */}
                <Button
                  variant="outline"
                  className="mt-2 text-white"
                  onClick={agregarSeccion}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Agregar Grado/Sección
                </Button>
              </TabsContent>

              <TabsContent value="plantillas">
                <div className="flex items-center space-x-3 mb-2">
                  <Upload className="h-5 w-5" />
                  <Label htmlFor="plantilla" className="text-white">
                    Subir Nueva Plantilla
                  </Label>
                </div>
                <Input
                  id="plantilla"
                  type="file"
                  accept=".xlsx,.docx"
                  className="mb-4 bg-white text-black"
                />
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Aquí mapear las plantillas existentes */}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
