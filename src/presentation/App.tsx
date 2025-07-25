// src/presentation/App.tsx
import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'
import { admisionesNav, gestionAcademicaNav } from './config/navItems'

const LoginPage              = lazy(() => import('./features/auth/components/LoginPage'))
const SubsystemDashboard     = lazy(() => import('./features/dashboard/components/SubsystemDashboard'))

// ——————— ADMISIONES ———————
const AdmisionesPage         = lazy(() => import('./features/admisiones/components/Dashboard'))
const Configuracion          = lazy(() => import('./features/admisiones/components/Configuracion'))
const Estudiantes            = lazy(() => import('./features/admisiones/components/Estudiantes'))
const Apoderados             = lazy(() => import('./features/admisiones/components/Apoderados'))
const Admision               = lazy(() => import('./features/admisiones/components/Admision'))
const Matricula              = lazy(() => import('./features/admisiones/components/Matricula'))
const Mensualidad              = lazy(() => import('./features/admisiones/components/Mensualidad'))
const Notas              = lazy(() => import('./features/admisiones/components/Notas'))
const Usuarios               = lazy(() => import('./features/admisiones/components/Usuarios'))
const Docentes               = lazy(() => import('./features/admisiones/components/Docentes'))


// ——————— GESTIÓN ACADÉMICA ———————
const GestionAcademicaPage   = lazy(() => import('./features/gestion-academica/components/gestionAcademica'))

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
          {/* 1. Rutas públicas */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SubsystemDashboard />} />

          {/* 2. Sección ADMISIONES */}
          <Route
            path="admisiones/*"
            element={
              <SidebarLayout
                items={admisionesNav}
                basePath="/admisiones"
              />
            }
          >
            <Route index element={<AdmisionesPage />} />
            <Route path="dashboard" element={<AdmisionesPage />} />
            <Route path="configuracion" element={<Configuracion />} />
            <Route path="estudiantes" element={<Estudiantes />} />
            <Route path="apoderados" element={<Apoderados />} />
            <Route path="admision" element={<Admision />} />
            <Route path="matricula" element={<Matricula />} />
            <Route path="mensualidad" element={<Mensualidad />} />
            
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="docentes" element={<Docentes />} />
            <Route path="Notas" element={<Notas />} />
          </Route>

          {/* 3. Sección GESTIÓN ACADÉMICA */}
          <Route
            path="gestion-academica/*"
            element={
              <SidebarLayout
                items={gestionAcademicaNav}
                basePath="/gestion-academica"
              />
            }
          >
            <Route index element={<GestionAcademicaPage />} />
            {/* hijos de Gestión Académica */}
          </Route>

          {/* 4. Sección RRHH (comentada) */}
          {/* <Route
            path="rrhh/*"
            element={
              <SidebarLayout
                items={rrhhNav}
                basePath="/rrhh"
              />
            }
          >
            <Route index element={<RRHHPage />} />
          </Route> */}

          {/* 5. Cualquier otra ruta */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
