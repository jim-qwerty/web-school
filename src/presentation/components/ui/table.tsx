"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Tabla principal
export type TableProps = React.TableHTMLAttributes<HTMLTableElement>
export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => (
    <div className="w-full overflow-auto">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-xs border-collapse", className)}
        {...props}
      >
        {children}
      </table>
    </div>
  )
)
Table.displayName = "Table"

// Encabezado de tabla
export type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>
export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
  )
)
TableHeader.displayName = "TableHeader"

// Cuerpo de tabla
export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>
export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  TableBodyProps
>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
)
TableBody.displayName = "TableBody"

// Fila de tabla
export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>
export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  TableRowProps
>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-accent/50 data-[state=selected]:bg-accent",
        className
      )}
      {...props}
    />
  )
)
TableRow.displayName = "TableRow"

// Celda de encabezado
export type TableHeadProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement>
export const TableHead = React.forwardRef<
  HTMLTableHeaderCellElement,
  TableHeadProps
>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
)
TableHead.displayName = "TableHead"

// Celda de datos
export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>
export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  TableCellProps
>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
      {...props}
    />
  )
)
TableCell.displayName = "TableCell"
