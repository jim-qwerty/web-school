// src/presentation/features/auth/components/LoginPage.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DUMMY_USER = 'admin'
const DUMMY_PASS = 'admin'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === DUMMY_USER && password === DUMMY_PASS) {
      // Limpia el error y navega
      setError('')
      navigate('/dashboard', { replace: true })
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="transform scale-[0.8] origin-center w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl">
        {/* Logo & Title */}
        <img
          //src={logo}
          alt="SchooLama Logo"
          loading="lazy"
          className="mx-auto h-12 w-12 mb-4"
        />
        <h1 className="text-2xl font-bold text-center text-gray-800">SchooLama</h1>
        <p className="text-center text-gray-500 mb-6">Sign in to your account</p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-red-600 text-sm text-center">
              {error}
            </p>
          )}

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter your id"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
