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
} from "@/presentation/components/ui/dialog";

interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
  phone: string;
}

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
  });

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleAdd = () => {
    const newTeacher: Teacher = {
      id: teachers.length + 1,
      name: form.name,
      subject: form.subject,
      email: form.email,
      phone: form.phone,
    };
    setTeachers([...teachers, newTeacher]);
    setForm({ name: "", subject: "", email: "", phone: "" });
    setOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Teachers</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>New Teacher</Button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Teacher</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="col-span-1 sm:col-span-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="e.g., Jane Doe"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={form.subject}
                  onChange={handleChange("subject")}
                  placeholder="e.g., Mathematics"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="e.g., jane.doe@school.edu"
                />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="e.g., +1 234 567 890"
                />
              </div>
            </div>
            <DialogFooter className="mt-4 space-x-2">
              <Button onClick={handleAdd}>Save</Button>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.length ? (
            teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.id}</TableCell>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>{teacher.phone}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4">
                No teachers found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
