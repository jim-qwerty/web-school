// src/presentation/App.tsx
import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'

// code-splitting
const LoginPage           = lazy(() => import('./features/auth/components/LoginPage'))
const SubsystemDashboard  = lazy(() => import('./features/dashboard/components/SubsystemDashboard'))
const AdmisionesPage      = lazy(() => import('./features/admisiones/components/Dashboard_admisiones'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          Cargando…
        </div>
      }>
        <Routes>
          {/* 1. Login sin sidebar */}
          <Route path="/login" element={<LoginPage />} />

          {/* 2. Home / overview sin sidebar */}
          <Route path="/" element={<SubsystemDashboard />} />

          {/* 3. Sólo en /admisiones y sus hijas mostramos el SidebarLayout */}
          <Route path="admisiones/*" element={<SidebarLayout />}>
            {/* index de /admisiones */}
            <Route index element={<AdmisionesPage />} />
            {/* aquí podrías añadir /admisiones/:id, /admisiones/config, etc */}
          </Route>

          {/* 4. Cualquier otra URL la mandamos a “/” o a login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
