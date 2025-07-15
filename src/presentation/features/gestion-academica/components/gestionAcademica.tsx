// src/presentation/features/gestion-academica/components/GestionAcademicaPage.tsx


export default function gestionAcademica() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Gestión Académica</h1>
      <p className="mb-6 text-gray-600">
        Bienvenido al módulo de Gestión Académica. Desde aquí puedes administrar los cursos, profesores, horarios y matrículas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Cursos</h2>
          <p className="text-sm text-gray-500">Gestiona los planes de estudio y materias.</p>
          <button className="mt-3 px-3 py-1 bg-purple-600 text-white rounded text-xs">
            Ver Cursos
          </button>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Profesores</h2>
          <p className="text-sm text-gray-500">Asigna y edita información de docentes.</p>
          <button className="mt-3 px-3 py-1 bg-purple-600 text-white rounded text-xs">
            Ver Profesores
          </button>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Horarios</h2>
          <p className="text-sm text-gray-500">Configura horarios de clases y examenes.</p>
          <button className="mt-3 px-3 py-1 bg-purple-600 text-white rounded text-xs">
            Ver Horarios
          </button>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Matrículas</h2>
          <p className="text-sm text-gray-500">Controla inscripciones y cupos.</p>
          <button className="mt-3 px-3 py-1 bg-purple-600 text-white rounded text-xs">
            Ver Matrículas
          </button>
        </div>
      </div>
    </div>
  )
}
