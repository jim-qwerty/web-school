// src/presentation/App.tsx
import  { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'
import { admisionesNav, /*rrhhNav*/ } from './config/navItems'

const LoginPage          = lazy(() => import('./features/auth/components/LoginPage'))
const SubsystemDashboard = lazy(() => import('./features/dashboard/components/SubsystemDashboard'))

// ——————— ADMISIONES ———————
const AdmisionesPage = lazy(() => import('./features/admisiones/components/Dashboard_admisiones'))
// const StudentsPage   = lazy(() => import('./features/admisiones/components/StudentsPage'))
// const CoursesPage    = lazy(() => import('./features/admisiones/components/CoursesPage'))
// const CalendarPage   = lazy(() => import('./features/admisiones/components/CalendarPage'))
// const SettingsPage   = lazy(() => import('./features/admisiones/components/SettingsPage'))

// ——————— RRHH ———————
// const RRHHPage       = lazy(() => import('./features/rrhh/components/Dashboard_rrhh'))
// const PayrollPage    = lazy(() => import('./features/rrhh/components/PayrollPage'))

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

          {/* 2. Sección ADMISIONES con sidebar */}
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
            {/* <Route path="students" element={<StudentsPage />} /> */}
            {/* <Route path="courses"  element={<CoursesPage />} /> */}
            {/* <Route path="calendar" element={<CalendarPage />} /> */}
            {/* <Route path="settings" element={<SettingsPage />} /> */}
          </Route>

          {/*
          // 3. Sección RRHH con el mismo layout (comentada)
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
            <Route path="payroll" element={<PayrollPage />} />
          </Route>
          */}

          {/* 4. Cualquier otra ruta */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
