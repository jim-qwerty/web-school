// src/presentation/App.tsx
import  { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'
import { admisionesNav } from './config/navItems'

const LoginPage      = lazy(() => import('./features/auth/components/LoginPage'))
const DashboardPage  = lazy(() => import('./features/dashboard/Dashboard'))
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
          {/** 1) Raíz “/” → siempre login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/** 2) Página de login */}
          <Route path="/login" element={<LoginPage />} />

          {/**
            3) Rutas protegidas: layout sin path para no capturar la raíz
          **/}
          <Route element={<SidebarLayout items={admisionesNav} basePath="" />}>
            <Route path="dashboard"     element={<DashboardPage />} />
            <Route path="configuracion" element={<Configuracion />} />
            <Route path="estudiantes"   element={<Estudiantes />} />
            <Route path="apoderados"    element={<Apoderados />} />
            <Route path="matricula"     element={<Matricula />} />
            <Route path="mensualidad"   element={<Mensualidad />} />
            <Route path="notas"         element={<Notas />} />
            <Route path="usuarios"      element={<Usuarios />} />
            <Route path="docentes"      element={<Docentes />} />

            {/** 4) Cualquier otra ruta → redirigir a login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
