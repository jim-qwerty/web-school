"use client";

import { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/presentation/components/ui/table";
import { Input } from "@/presentation/components/ui/input";
import { Label } from "@/presentation/components/ui/label";
import { Button } from "@/presentation/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogOverlay,
  
  DialogPortal,
} from "@/presentation/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/presentation/components/ui/select";

interface Matricula {
  id: number;
  codigo: string;
  alumno: string;
  fechaMatricula: string;
}

export default function MatriculaPage() {
  const [search, setSearch] = useState("");
  const [list] = useState<Matricula[]>([]);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"registro" | "apoderado" | "pago">("registro");

  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    dni: "",
    fechaNacimiento: "",
    nivel: "",
    grado: "",
    seccion: "",
    sexo: "",
    direccion: "",
    apNombres: "",
    apApellidos: "",
    apDni: "",
    parentesco: "",
    celular: "",
    correo: "",
  });

  const [pagoData, setPagoData] = useState({
    monto: "",
    metodo: "",
    fechaPago: "",
    observacion: "",
  });

  const filtered = list.filter(
    (item) =>
      item.codigo.toLowerCase().includes(search.toLowerCase()) ||
      item.alumno.toLowerCase().includes(search.toLowerCase())
  );

  const handleSaveRegistro = () => {
    setStep("apoderado");
  };

  const handleSaveApoderado = () => {
    setStep("pago");
  };

  const handleSavePago = () => {
    // Aquí podrías enviar todo el formData + pagoData al servidor
    setOpen(false);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 space-y-2 md:space-y-0">
        <Input
          placeholder="Buscar por código o nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3"
        />
        <Dialog
          open={open}
          onOpenChange={(val) => {
            setOpen(val);
            if (val) setStep("registro");
          }}
        >
          <DialogTrigger asChild>
            <Button>Agregar Matrícula</Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay />
            <DialogContent 
              className=" bg-gray-900 text-white
                fixed left-1/2 top-1/2 z-50
                w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]
                max-h-[90vh] overflow-y-auto
                translate-x-[-50%] translate-y-[-50%]
                grid gap-4 border p-6 shadow-lg rounded-lg
              "
            >
              <DialogHeader>
                <DialogTitle>
                  {step === "registro"
                    ? "Registro de Matrícula"
                    : step === "apoderado"
                    ? "Datos del Apoderado"
                    : "Pago de Matrícula"}
                </DialogTitle>
              </DialogHeader>

              {step === "registro" && (
                <div className="space-y-6">
                  <h3 className="font-medium mb-2">Datos del Alumno</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Nombres</Label>
                      <Input
                        value={formData.nombres}
                        onChange={(e) =>
                          setFormData({ ...formData, nombres: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Apellidos</Label>
                      <Input
                        value={formData.apellidos}
                        onChange={(e) =>
                          setFormData({ ...formData, apellidos: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>DNI</Label>
                      <Input
                        value={formData.dni}
                        onChange={(e) =>
                          setFormData({ ...formData, dni: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Fecha de Nacimiento</Label>
                      <Input
                        type="date"
                        value={formData.fechaNacimiento}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fechaNacimiento: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label>Nivel Educativo</Label>
                      <Select
                        onValueChange={(val) =>
                          setFormData({ ...formData, nivel: val })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Inicial">Inicial</SelectItem>
                          <SelectItem value="Primaria">Primaria</SelectItem>
                          <SelectItem value="Secundaria">Secundaria</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Grado</Label>
                      <Select
                        onValueChange={(val) =>
                          setFormData({ ...formData, grado: val })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Sección</Label>
                      <Input
                        value={formData.seccion}
                        onChange={(e) =>
                          setFormData({ ...formData, seccion: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Sexo</Label>
                      <Select
                        onValueChange={(val) =>
                          setFormData({ ...formData, sexo: val })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="M">Masculino</SelectItem>
                          <SelectItem value="F">Femenino</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="sm:col-span-2">
                      <Label>Dirección</Label>
                      <Input
                        value={formData.direccion}
                        onChange={(e) =>
                          setFormData({ ...formData, direccion: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <Button className="mt-4 w-full" onClick={handleSaveRegistro}>
                    Continuar a Apoderado
                  </Button>
                </div>
              )}

              {step === "apoderado" && (
                <div className="space-y-6">
                  <h3 className="font-medium mb-2">Datos del Apoderado</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Nombres</Label>
                      <Input
                        value={formData.apNombres}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            apNombres: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label>Apellidos</Label>
                      <Input
                        value={formData.apApellidos}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            apApellidos: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label>DNI</Label>
                      <Input
                        value={formData.apDni}
                        onChange={(e) =>
                          setFormData({ ...formData, apDni: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Parentesco</Label>
                      <Input
                        value={formData.parentesco}
                        onChange={(e) =>
                          setFormData({ ...formData, parentesco: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Celular</Label>
                      <Input
                        value={formData.celular}
                        onChange={(e) =>
                          setFormData({ ...formData, celular: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Correo Electrónico</Label>
                      <Input
                        value={formData.correo}
                        onChange={(e) =>
                          setFormData({ ...formData, correo: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <Button className="mt-4 w-full" onClick={handleSaveApoderado}>
                    Continuar a Pago de Matrícula
                  </Button>
                </div>
              )}

              {step === "pago" && (
                <div className="space-y-4">
                  <div>
                    <Label>Alumno</Label>
                    <Input
                      value={`${formData.nombres} ${formData.apellidos}`}
                      disabled
                    />
                  </div>
                  <div>
                    <Label>DNI</Label>
                    <Input value={formData.dni} disabled />
                  </div>
                  <div>
                    <Label>Monto a Pagar</Label>
                    <Input
                      type="number"
                      value={pagoData.monto}
                      onChange={(e) =>
                        setPagoData({ ...pagoData, monto: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label>Método de Pago</Label>
                    <Select
                      onValueChange={(val) =>
                        setPagoData({ ...pagoData, metodo: val })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Efectivo">Efectivo</SelectItem>
                        <SelectItem value="Tarjeta">Tarjeta</SelectItem>
                        <SelectItem value="Transferencia">Transferencia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Fecha de Pago</Label>
                    <Input
                      type="date"
                      value={pagoData.fechaPago}
                      onChange={(e) =>
                        setPagoData({ ...pagoData, fechaPago: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label>Observación</Label>
                    <Input
                      value={pagoData.observacion}
                      onChange={(e) =>
                        setPagoData({ ...pagoData, observacion: e.target.value })
                      }
                    />
                  </div>
                  <Button className="mt-4 w-full" onClick={handleSavePago}>
                    Guardar Pago
                  </Button>
                </div>
              )}

              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancelar
                </Button>
              </DialogFooter>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Alumno</TableHead>
              <TableHead>Fecha Matrícula</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.codigo}</TableCell>
                <TableCell>{item.alumno}</TableCell>
                <TableCell>{item.fechaMatricula}</TableCell>
                <TableCell>
                  {/* acciones */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
