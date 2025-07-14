// src/presentation/App.tsx
import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SidebarLayout from './layouts/SidebarLayout'

// Code-splitting: cada página sólo se descargará cuando navegues a su ruta
const LoginPage = lazy(() => import('./features/auth/components/LoginPage'))
const SubsystemDashboard = lazy(
  () => import('./features/dashboard/components/SubsystemDashboard')
)
const AdmisionesPage = lazy(
  () => import('./features/admisiones/components/Dashboard_admisiones')
)
/*
const GestionAcademicaPage = lazy(
  () => import('./features/gestion-academica/components/GestionAcademicaPage')
)
const EvaluacionPage = lazy(
  () => import('./features/evaluacion/components/EvaluacionPage')
)
const FinanzasPage = lazy(
  () => import('./features/finanzas/components/FinanzasPage')
)
const RRHHPage = lazy(
  () => import('./features/rrhh/components/RRHHPage')
)
const CRMPage = lazy(() => import('./features/crm/components/CRMPage'))
const SeguridadPage = lazy(
  () => import('./features/seguridad/components/SeguridadPage')
)
const AnaliticaPage = lazy(
  () => import('./features/analitica/components/AnaliticaPage')
)
*/
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
          {/* Ruta de login sin sidebar */}
          <Route path="/login" element={<LoginPage />} />

          {/* Todas estas rutas comparten el mismo SidebarLayout */}
          <Route path="/" element={<SidebarLayout />}>
            {/* Ruta raíz (/) va a SubsystemDashboard */}
            <Route index element={<SubsystemDashboard />} />

            {/* Subsistemas: cada uno se renderiza en la parte derecha */}
            <Route path="admisiones" element={<AdmisionesPage />} />
            {/*
            <Route
              path="gestion-academica"
              element={<GestionAcademicaPage />}
            />
            <Route path="evaluacion" element={<EvaluacionPage />} />
            <Route path="finanzas" element={<FinanzasPage />} />
            <Route path="rrhh" element={<RRHHPage />} />
            <Route path="crm" element={<CRMPage />} />
            <Route path="seguridad" element={<SeguridadPage />} />
            <Route path="analitica" element={<AnaliticaPage />} />*/}
          </Route>

          {/* Cualquier otra URL redirige a login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
