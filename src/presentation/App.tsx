// src/presentation/App.tsx
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Code-splitting: cada página sólo se descargará cuando navegues a su ruta
const LoginPage = lazy(() => import('./features/auth/components/LoginPage'))
const SubsystemDashboard = lazy(
  () => import('./features/dashboard/components/SubsystemDashboard')
)/*
const AdmisionesPage = lazy(
  () => import('./features/admisiones/components/AdmisionesPage')
)
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
)*/

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Cargando…
        </div>
      }
    >
      <Routes>
        {/* Autenticación */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard principal */}
        <Route path="/" element={<SubsystemDashboard />} />


        {/* Subsistemas */}
        {/* 
        <Route path="/admisiones" element={<AdmisionesPage />} />
        <Route
          path="/gestion-academica"
          element={<GestionAcademicaPage />}
        />
        <Route path="/evaluacion" element={<EvaluacionPage />} />
        <Route path="/finanzas" element={<FinanzasPage />} />
        <Route path="/rrhh" element={<RRHHPage />} />
        <Route path="/crm" element={<CRMPage />} />
        <Route path="/seguridad" element={<SeguridadPage />} />
        <Route path="/analitica" element={<AnaliticaPage />} />
*/}
        {/* Ruta comodín: podrías redirigir a "/" o a una 404 */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default App
