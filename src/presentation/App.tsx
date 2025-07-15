// src/presentation/App.tsx
import  { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'
import { admisionesNav, gestionAcademicaNav } from './config/navItems'

const LoginPage           = lazy(() => import('./features/auth/components/LoginPage'))
const SubsystemDashboard  = lazy(() => import('./features/dashboard/components/SubsystemDashboard'))

// ——————— ADMISIONES ———————
const AdmisionesPage      = lazy(() => import('./features/admisiones/components/Main_admisiones'))

// ——————— GESTIÓN ACADÉMICA ———————
const GestionAcademicaPage = lazy(() => import('./features/gestion-academica/components/gestionAcademica'))

// ——————— RRHH (comentada) ———————
// const RRHHPage = lazy(() => import('./features/rrhh/components/Dashboard_rrhh'))

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
          <Route path="/"        element={<SubsystemDashboard />} />

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
            {/* aquí podrías añadir más rutas de Admisiones */}
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
            {/* aquí podrías añadir hijos de Gestión Académica */}
          </Route>

          {/*
          // 4. Sección RRHH
          <Route
            path="rrhh/*"
            element={
              <SidebarLayout
                items={rrhhNav}
                basePath="/rrhh"
              />
            }
          >
            <Route index element={<RRHHPage />} />
          </Route>
          */}

          {/* 5. Cualquier otra ruta */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
