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
  { name: 'Dashboard',     href: '',             icon: HomeIcon },
  { name: 'Configuración', href: 'configuracion', icon: CogIcon },
  { name: 'Alumnos',       href: 'students',     icon: UsersIcon },
  { name: 'Apoderados',    href: 'apoderados',   icon: UsersIcon },
  { name: 'Admisión',      href: 'admision',     icon: BookOpenIcon },
  { name: 'Matrícula',     href: 'matricula',    icon: CalendarIcon },
  { name: 'Traslados',     href: 'traslados',    icon: CogIcon },
  { name: 'Usuarios',      href: 'usuarios',     icon: UsersIcon },
]
