"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/presentation/components/ui/card";
import { Input } from "@/presentation/components/ui/input";
import { Label } from "@/presentation/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/presentation/components/ui/select";
import { Button } from "@/presentation/components/ui/button";
import { Textarea } from "@/presentation/components/ui/textarea";

interface Alumno {
  id: number;
  nombre: string;
  grado: string;
  seccion: string;
  nivel: string;
}

type AutoField = "grado" | "seccion" | "nivel";
const autoFields: AutoField[] = ["grado", "seccion", "nivel"];

export default function PagoMensualidadPage() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [alumnoId, setAlumnoId] = useState<string>("");
  const [mes, setMes] = useState<string>("");
  const [fechaPago, setFechaPago] = useState<string>("");
  const [monto, setMonto] = useState<string>("");
  const [metodoPago, setMetodoPago] = useState<string>("");
  const [observaciones, setObservaciones] = useState<string>("");

  useEffect(() => {
    setAlumnos([
      { id: 1, nombre: "María Pérez", grado: "3°", seccion: "A", nivel: "Primaria" },
      { id: 2, nombre: "Juan Gómez", grado: "5°", seccion: "B", nivel: "Secundaria" },
    ]);
  }, []);

  const alumnoSeleccionado = alumnos.find((a) => a.id.toString() === alumnoId);
  const mesesDelAno = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",
  ];
  const metodos = ["Efectivo", "Tarjeta", "Transferencia"];

  function handleRegistrarPago() {
    console.log({ alumnoId, mes, fechaPago, monto, metodoPago, observaciones });
    // TODO: llamar a tu API aquí
  }

  return (
    <Card className="max-w-3xl mx-auto mt-10 shadow-lg dark:bg-gray-900 text-white">
      {/* Ahora todo el texto hereda blanco */}
      <CardHeader>
        <CardTitle className="text-3xl">Registro de Pago</CardTitle>
        <CardDescription>
          Completa el formulario para registrar la mensualidad del alumno.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Label htmlFor="alumno" className="text-white">
              Alumno
            </Label>
            <Select value={alumnoId} onValueChange={setAlumnoId}>
              <SelectTrigger id="alumno" className="w-full">
                <SelectValue placeholder="Selecciona un alumno" />
              </SelectTrigger>
              <SelectContent>
                {alumnos.map((al) => (
                  <SelectItem key={al.id} value={al.id.toString()}>
                    {al.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {autoFields.map((field) => {
            const value = alumnoSeleccionado?.[field] ?? "";
            const label = field === "nivel"
              ? "Nivel Educativo"
              : field.charAt(0).toUpperCase() + field.slice(1);

            return (
              <div key={field}>
                <Label htmlFor={field} className="text-white">
                  {label}
                </Label>
                <Input
                  id={field}
                  value={value}
                  disabled
                  className="bg-gray-700 text-white" 
                  // fondo más oscuro y texto blanco
                />
              </div>
            );
          })}

          <div>
            <Label htmlFor="mes" className="text-white">
              Mes
            </Label>
            <Select value={mes} onValueChange={setMes}>
              <SelectTrigger id="mes" className="w-full">
                <SelectValue placeholder="Selecciona el mes" />
              </SelectTrigger>
              <SelectContent>
                {mesesDelAno.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="fechaPago" className="text-white">
              Fecha de Pago
            </Label>
            <Input
              id="fechaPago"
              type="date"
              value={fechaPago}
              onChange={(e) => setFechaPago(e.target.value)}
              className="text-white"
            />
          </div>

          <div>
            <Label htmlFor="monto" className="text-white">
              Monto (S/.)
            </Label>
            <Input
              id="monto"
              type="number"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              placeholder="0.00"
              className="text-white"
            />
          </div>

          <div>
            <Label htmlFor="metodoPago" className="text-white">
              Método de Pago
            </Label>
            <Select value={metodoPago} onValueChange={setMetodoPago}>
              <SelectTrigger id="metodoPago" className="w-full">
                <SelectValue placeholder="Selecciona método" />
              </SelectTrigger>
              <SelectContent>
                {metodos.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="observaciones" className="text-white">
              Observaciones
            </Label>
            <Textarea
              id="observaciones"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
              placeholder="Anota detalles adicionales..."
              className="h-24 text-white bg-gray-700"
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button onClick={handleRegistrarPago} className="px-8">
          Registrar Pago
        </Button>
      </CardFooter>
    </Card>
  );
}
