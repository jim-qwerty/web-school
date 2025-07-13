import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@/presentation/features/auth/components/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal redirige a /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Tu ruta de login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Opcional: cualquier otro path también redirige */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
