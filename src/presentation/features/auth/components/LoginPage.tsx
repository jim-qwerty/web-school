import React from 'react';
import { Link } from 'react-router-dom';
import balloon from '@/assets/images/balloon.png';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* ———— Panel izquierdo: Branding & bienvenida (solo md+) */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#800020] to-[#55000e] items-center justify-center p-8">
        <div className="text-center space-y-6">
          <img
            src={balloon}
            alt="Logo Colegio"
            loading="lazy"
            className="mx-auto w-24 h-24 rounded-full shadow-lg"
          />
          <h1 className="text-4xl font-extrabold text-white">IEP La Católica</h1>
          <p className="text-lg text-gray-200">
            Bienvenido al portal administrativo. <br />
            Ingresa tus credenciales para continuar.
          </p>
        </div>
      </div>

      {/* ———— Panel derecho: Formulario */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-center text-[#800020]">
              Iniciar Sesión
            </h2>

            <form className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Institucional
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="usuario@catolica.edu.pe"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]"
                />
              </div>

              {/* Recordarme y Olvidé */}
              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-[#800020] focus:ring-[#800020] border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-600">Recordarme</span>
                </label>
                <Link to="/forgot" className="text-[#800020] hover:underline">
                  Olvidé mi contraseña
                </Link>
              </div>

              {/* Botón principal */}
              <button
                type="submit"
                className="w-full mt-4 py-2 rounded-lg bg-[#800020] text-[#FFffff] font-semibold hover:bg-[#a00030] transition"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
