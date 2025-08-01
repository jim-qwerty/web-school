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
  { name: 'Dashboard',     href: 'dashboard',     icon: HomeIcon },
  { name: 'Configuración', href: 'configuracion', icon: CogIcon },
  {
    name: 'Alumnos',
    href: 'estudiantes',
    icon: UsersIcon,
    children: [
      { name: 'Notas',      href: 'notas',        icon: BookOpenIcon },
      { name: 'Asistencia', href: 'asistencia',   icon: CalendarIcon },
      { name: 'Horario',    href: 'horario',      icon: CalendarIcon },
    ],
  },
  { name: 'Apoderados',   href: 'apoderados',   icon: UsersIcon },
  { name: 'Matrícula',    href: 'matricula',    icon: CalendarIcon },
  { name: 'Mensualidad',  href: 'mensualidad',  icon: CalendarIcon },
  { name: 'Notas',        href: 'notas',        icon: BookOpenIcon },
  { name: 'Usuarios',     href: 'usuarios',     icon: UsersIcon },
  { name: 'Docentes',     href: 'docentes',     icon: UsersIcon },
]
