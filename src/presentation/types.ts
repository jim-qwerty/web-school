// src/presentation/types.ts
import type { ComponentType, SVGProps } from 'react'

export interface NavItem {
  /** Texto a mostrar */
  name: string
  /** Ruta relativa dentro del subsistema */
  href: string
  /** Icono SVG */
  icon: ComponentType<SVGProps<SVGSVGElement>>
  /** Sub-menú desplegable (opcional) */
  children?: NavItem[]
}
