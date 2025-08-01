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
} from "@/presentation/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/presentation/components/ui/select";

interface Grade {
  id: number;
  studentName: string;
  subject: string;
  score: string;
  date: string;
  comments: string;
}

export default function GradesPage() {
  const [grades, setGrades] = useState<Grade[]>([
    { id: 1, studentName: "Juan Perez", subject: "Matemáticas", score: "18", date: "2025-07-24", comments: "" },
    { id: 2, studentName: "María Rodriguez", subject: "Historia", score: "16", date: "2025-07-23", comments: "" },
  ]);
  const [open, setOpen] = useState(false);

  const [student, setStudent] = useState("");
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("");
  const [date, setDate] = useState("");
  const [comments, setComments] = useState("");

  const students = ["Juan Perez", "María Rodriguez", "Luis García"];
  const subjects = ["Matemáticas", "Historia", "Ciencias", "Inglés"];

  const handleAddGrade = () => {
    const newGrade: Grade = {
      id: grades.length + 1,
      studentName: student,
      subject,
      score,
      date,
      comments,
    };
    setGrades([...grades, newGrade]);
    setStudent("");
    setSubject("");
    setScore("");
    setDate("");
    setComments("");
    setOpen(false);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Gestión de Calificaciones</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Agregar Calificación</Button>
          </DialogTrigger>
          <DialogOverlay />
          <DialogContent className="max-w-md w-full">
            <DialogHeader>
              <DialogTitle>Agregar Calificación</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label>Alumno</Label>
                <Select value={student} onValueChange={setStudent}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un alumno" />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Asignatura</Label>
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona una asignatura" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Calificación</Label>
                <Input
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  placeholder="0-20"
                />
              </div>
              <div>
                <Label>Fecha</Label>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div>
                <Label>Comentarios</Label>
                <Input
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Opcional"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddGrade}>Registrar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Alumno</TableHead>
            <TableHead>Asignatura</TableHead>
            <TableHead>Calificación</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Comentarios</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grades.map((grade) => (
            <TableRow key={grade.id}>
              <TableCell>{grade.studentName}</TableCell>
              <TableCell>{grade.subject}</TableCell>
              <TableCell>{grade.score}</TableCell>
              <TableCell>{grade.date}</TableCell>
              <TableCell>{grade.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
