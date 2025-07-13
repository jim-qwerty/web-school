// src/presentation/features/dashboard/components/SubsystemDashboard.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import type { Subsystem } from '../types'

const subsystems: Subsystem[] = [
  {
    id: 1,
    title: 'Información y Admisión de Alumnos',
    description:
      'Gestión del registro de alumnos, expedientes, apoderados y procesos de matrícula.',
    link: '/admisiones',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    id: 2,
    title: 'Gestión Académica',
    description:
      'Organización de programas, cursos, asignación de aulas, elaboración de horarios, seguimiento de asistencia y hojas de calificaciones.',
    link: '/gestion-academica',
    color: 'from-gray-700 to-gray-900',
  },
  {
    id: 3,
    title: 'Evaluación y Exámenes',
    description:
      'Ingreso de notas, generación automática de boletas y reportes de rendimiento.',
    link: '/evaluacion',
    color: 'from-teal-300 to-teal-500',
  },
  {
    id: 4,
    title: 'Finanzas y Tesorería',
    description:
      'Cobro de pensiones, emisión de facturas, conciliación con pasarelas de pago y reportes contables.',
    link: '/finanzas',
    color: 'from-gray-700 to-black',
  },
  {
    id: 5,
    title: 'Recursos Humanos y Nómina',
    description:
      'Altas y bajas de personal, control de asistencias, licencias, cálculo de sueldos y generación de recibos de pago.',
    link: '/rrhh',
    color: 'from-teal-300 to-teal-500',
  },
  {
    id: 6,
    title: 'Portal de Comunicación (CRM escolar)',
    description:
      'Comunicación bidireccional con padres y alumnos vía notificaciones por email/SMS.',
    link: '/crm',
    color: 'from-orange-400 to-orange-600',
  },
  {
    id: 7,
    title: 'Seguridad y Permisos',
    description:
      'Roles de usuario, control de acceso a módulos y auditoría de acciones.',
    link: '/seguridad',
    color: 'from-red-400 to-red-600',
  },
  {
    id: 8,
    title: 'Analítica e Informes',
    description:
      'Dashboards de indicadores clave (KPI), reportes académicos, financieros y de operación.',
    link: '/analitica',
    color: 'from-yellow-400 to-yellow-600',
  },
]

const SubsystemDashboard: React.FC = () => (
  <div className="bg-gray-50 py-12">
    {/* Márgenes laterales ampliados en móvil/tablet/desktop */}
    <div className="mx-auto max-w-screen-xl px-8 sm:px-16 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {subsystems.map((s) => (
          <div
            key={s.id}
            className="w-full bg-white rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <div className="p-6 flex items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-lg font-bold bg-gradient-to-br ${s.color}`}
              >
                {s.id}
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">
                {s.title}
              </h3>
            </div>
            <p className="px-6 text-gray-600 text-sm flex-grow">
              {s.description}
            </p>
            <div className="p-6">
              <Link
                to={s.link}
                className="block w-full text-center py-2 border-2 border-purple-600 rounded-lg hover:bg-purple-50 text-purple-600 font-medium transition"
              >
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default SubsystemDashboard
