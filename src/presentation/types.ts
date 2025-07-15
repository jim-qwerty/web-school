// src/presentation/types.ts
export interface NavItem {
  name: string
  href: string     // ruta _relativa_ dentro del subsistema
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}
