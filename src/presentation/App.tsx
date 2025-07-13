import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Code-splitting: LoginPage sólo se descarga cuando navegues a /login
const LoginPage = lazy(() => import('./features/auth/components/LoginPage'));

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
        <Route path="/login" element={<LoginPage />} />
        {/* ...otras rutas */}
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
