import  { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/presentation/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/presentation/components/ui/tabs'
import { Label } from '@/presentation/components/ui/label'
import { Input } from '@/presentation/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/presentation/components/ui/select'
import { Button } from '@/presentation/components/ui/button'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/presentation/components/ui/table'
import { Plus, Upload } from 'lucide-react'

export default function ConfiguracionPage() {
  // Estado para manejar múltiples códigos modulares
  const [codigos, setCodigos] = useState<string[]>([''])

  const agregarCodigo = () => setCodigos([...codigos, ''])
  const actualizarCodigo = (index: number, value: string) => {
    const nuevos = [...codigos]
    nuevos[index] = value
    setCodigos(nuevos)
  }

  return (
    <div className="px-5 py-2 space-y-2">
      <h1 className="text-lg font-bold">Configuración</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Módulo 1: Datos Institución / Año Escolar */}
        <Card>
          <CardHeader>
            <CardTitle>Datos Institución / Año Escolar</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Campo dinámico de códigos modulares */}
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
                onClick={agregarCodigo}
                className="mt-2"
              >
                <Plus className="mr-2 h-4 w-4" />
                Agregar Código
              </Button>
            </div>

            {/* Campos estáticos */}
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
                <SelectTrigger id="anio">
                  <SelectValue placeholder="Seleccione año" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="fases">Fases</Label>
              <Select>
                <SelectTrigger id="fases">
                  <SelectValue placeholder="I, II" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="I">Fase I</SelectItem>
                  <SelectItem value="II">Fase II</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="periodos">Periodos Evaluación</Label>
              <Select>
                <SelectTrigger id="periodos">
                  <SelectValue placeholder="Bimestres/Trimestres" />
                </SelectTrigger>
                <SelectContent>
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
        <Card>
          <CardHeader>
            <Tabs defaultValue="grados" className="space-y-4">
              <TabsList>
                <TabsTrigger value="grados">Grados y Secciones</TabsTrigger>
                <TabsTrigger value="plantillas">Plantillas</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="grados">
              <TabsContent value="grados">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Grado</TableHead>
                      <TableHead>Sección</TableHead>
                      <TableHead>Cupo Máximo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[1, 2, 3, 4, 5].map((grado) => (
                      <TableRow key={grado}>
                        <TableCell>{`Grado ${grado}`}</TableCell>
                        <TableCell>
                          <Input placeholder="A, B, C" />
                        </TableCell>
                        <TableCell>
                          <Input type="number" placeholder="30" className="w-24" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button variant="outline" className="mt-4">
                  <Plus className="mr-2 h-4 w-4" />
                  Agregar Grado/Sección
                </Button>
              </TabsContent>

              <TabsContent value="plantillas">
                <div className="flex items-center space-x-3 mb-2">
                  <Upload className="h-5 w-5" />
                  <Label htmlFor="plantilla">Subir Nueva Plantilla</Label>
                </div>
                <Input id="plantilla" type="file" accept=".xlsx,.docx" className="mb-4" />
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
