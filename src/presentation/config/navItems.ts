// src/presentation/config/navItems.ts
import {
  HomeIcon,
  UsersIcon,
  BookOpenIcon,
  CalendarIcon,
  CogIcon,
} from 'lucide-react'
import type { NavItem } from '../types'

export const admisionesNav: NavItem[] = [
  { name: 'Dashboard',     href: 'dashboard',         icon: HomeIcon },
  { name: 'Configuración', href: 'configuracion',     icon: CogIcon },
  {
    name: 'Alumnos',
    href: 'estudiantes',
    icon: UsersIcon,
    children: [
      { name: 'Notas',      href: 'estudiantes/notas',      icon: BookOpenIcon },
      { name: 'Asistencia', href: 'estudiantes/asistencia', icon: CalendarIcon },
      { name: 'Horario',    href: 'estudiantes/horario',    icon: CalendarIcon },
    ],
  },
  { name: 'Apoderados',   href: 'apoderados',       icon: UsersIcon },
  { name: 'Matrícula',    href: 'matricula',        icon: CalendarIcon },
  { name: 'Mensualidad',  href: 'mensualidad',      icon: CalendarIcon },
  { name: 'Traslados',    href: 'traslados',        icon: CogIcon },
  { name: 'Usuarios',     href: 'usuarios',         icon: UsersIcon },
  { name: 'Docentes',     href: 'docentes',         icon: UsersIcon },
]

export const gestionAcademicaNav: NavItem[] = [
  { name: 'Dashboard',     href: 'dashboard',     icon: HomeIcon },
  { name: 'Configuración', href: 'configuracion', icon: CogIcon },
  {
    name: 'Alumnos',
    href: 'students',
    icon: UsersIcon,
    children: [
      { name: 'Notas',      href: 'students/grades',     icon: BookOpenIcon },
      { name: 'Asistencia', href: 'students/attendance', icon: CalendarIcon },
    ],
  },
]
