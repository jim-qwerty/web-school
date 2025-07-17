"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md border bg-transparent px-3 py-2 text-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        outline: "border",
        ghost: "bg-muted hover:bg-muted/80",
      },
      size: {
        default: "h-8",
        sm: "h-9 text-xs",
        lg: "h-11 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, variant, size, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(inputVariants({ variant, size, className }))}
    {...props}
  />
))
Input.displayName = "Input"
