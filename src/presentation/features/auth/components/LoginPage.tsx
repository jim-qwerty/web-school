import React from 'react';
import { Link } from 'react-router-dom';
import balloon from '@/assets/images/balloon.png';
import googleIcon from '@/assets/images/google-icon.svg';
import githubIcon from '@/assets/images/github-icon.svg';

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* ——————  LADO IZQUIERDO (ilustración) —————— */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-blue-50 relative overflow-hidden">
        {/* fondo amarillo orgánico */}
        <div className="absolute w-3/4 h-3/4 bg-yellow-300 rounded-3xl"></div>
        {/* ilustración recortada */}
        <img
          src={balloon}
          alt="Illustration"
          className="relative w-2/3 object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* ——————  LADO DERECHO (formulario) —————— */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-8">Iniciar Sesión</h2>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Ingresa tu correo"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg bg-yellow-300 hover:bg-yellow-400 transition"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Enlace a registro */}
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="font-medium text-yellow-300 hover:underline">
            Regístrate
          </Link>
        </p>

        {/* — O — */}
        <div className="mt-6 text-center text-sm text-gray-500">— o inicia con —</div>

        {/* Botones sociales */}
        <div className="mt-4 flex justify-center gap-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <img src={githubIcon} alt="GitHub" className="w-5 h-5 mr-2" />
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
