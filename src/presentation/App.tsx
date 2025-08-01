// src/presentation/App.tsx
import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'
import { admisionesNav } from './config/navItems'

const LoginPage      = lazy(() => import('./features/auth/components/LoginPage'))
const AdmisionesPage = lazy(() => import('./features/dashboard/Dashboard'))
const Configuracion  = lazy(() => import('./features/configuracion/Configuracion'))
const Estudiantes    = lazy(() => import('./features/alumnos/Estudiantes'))
const Apoderados     = lazy(() => import('./features/apoderados/Apoderados'))
const Matricula      = lazy(() => import('./features/matricula/Matricula'))
const Mensualidad    = lazy(() => import('./features/mensualidad/Mensualidad'))
const Notas          = lazy(() => import('./features/notas/Notas'))
const Usuarios       = lazy(() => import('./features/usuarios/Usuarios'))
const Docentes       = lazy(() => import('./features/docentes/Docentes'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            Cargando…
          </div>
        }
      >
        <Routes>
          {/* 1) Entrar siempre al login en "/" */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />

          {/* 2) Rutas protegidas envueltas en SidebarLayout */}
          <Route
            element={
              <SidebarLayout
                items={admisionesNav}
                basePath=""      // <- IMPORTANTE: vacío, no "/"
              />
            }
          >
            {/* Si vas a "/" dentro de este wrapper, redirige a "dashboard" */}
            <Route index element={<Navigate to="dashboard" replace />} />

            <Route path="dashboard"     element={<AdmisionesPage />} />
            <Route path="configuracion" element={<Configuracion />} />
            <Route path="estudiantes"   element={<Estudiantes />} />
            <Route path="apoderados"    element={<Apoderados />} />
            <Route path="matricula"     element={<Matricula />} />
            <Route path="mensualidad"   element={<Mensualidad />} />
            <Route path="notas"         element={<Notas />} />
            <Route path="usuarios"      element={<Usuarios />} />
            <Route path="docentes"      element={<Docentes />} />
          </Route>

          {/* 3) Cualquier otra ruta → login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
