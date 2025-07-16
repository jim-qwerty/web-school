// src/lib/utils.ts

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Concatenar y optimizar clases de Tailwind CSS.
 * @param inputs - Lista de clases
 * @returns Cadena de clases optimizada
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
