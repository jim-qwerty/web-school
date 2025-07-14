// src/presentation/features/admisiones/components/Dashboard_admisiones.tsx
import { useState } from 'react'
import Calendar, { type CalendarProps } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Link } from 'react-router-dom'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

// Interfaces para datos de ejemplo
interface Kpi { label: string; value: number; bg: string }
interface Distribution { name: string; value: number }
interface Attendance { day: string; present: number; absent: number }
interface EventItem { title: string; time: string }
interface AnnouncementItem { title: string; date: string }

// Datos de ejemplo (reemplazar con fetch/API real)
const kpis: Kpi[] = [
  { label: 'Admins', value: 2, bg: 'from-indigo-400 to-indigo-600' },
  { label: 'Teachers', value: 24, bg: 'from-yellow-300 to-yellow-500' },
  { label: 'Students', value: 460, bg: 'from-teal-300 to-teal-500' },
  { label: 'Parents', value: 382, bg: 'from-pink-300 to-pink-500' }
]
const studentDistribution: Distribution[] = [
  { name: 'Boys', value: 207 },
  { name: 'Girls', value: 253 }
]
const COLORS: string[] = ['#60A5FA', '#FBBF24']
const attendanceData: Attendance[] = [
  { day: 'Mon', present: 50, absent: 50 },
  { day: 'Tue', present: 60, absent: 40 },
  { day: 'Wed', present: 75, absent: 25 },
  { day: 'Thu', present: 55, absent: 45 },
  { day: 'Fri', present: 65, absent: 35 }
]
const events: EventItem[] = [
  { title: 'Book Fair', time: '08:00 - 10:00' },
  { title: 'Sports Day', time: '10:00 - 12:00' },
  { title: 'Art Exhibition', time: '12:00 - 14:00' }
]
const announcements: AnnouncementItem[] = [
  { title: 'Picture Day Reminder', date: '16/09/2024' }
]

// Componente Dashboard de Admisiones
function Dashboard_admisiones() {
  const [date, setDate] = useState<CalendarProps['value']>(new Date())

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map(kpi => (
          <div
            key={kpi.label}
            className={`bg-gradient-to-br ${kpi.bg} text-white rounded-xl p-4 flex flex-col justify-between shadow`}
          >
            <span className="uppercase text-sm font-medium">{kpi.label}</span>
            <span className="text-3xl font-bold">{kpi.value}</span>
          </div>
        ))}
      </div>

      {/* Grilla principal: Pie, Bar, Calendar + Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Students Pie Chart */}
        <section className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Students</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={studentDistribution}
                dataKey="value"
                nameKey="name"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
              >
                {studentDistribution.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </section>

        {/* Attendance Bar Chart */}
        <section className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Attendance</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={attendanceData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="present" stackId="a" />
              <Bar dataKey="absent" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Calendar + Events */}
        <div className="flex flex-col space-y-6">
          <section className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Calendar</h3>
            <Calendar
              value={date}
              onChange={value => setDate(value)}
            />
          </section>
          <section className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Events</h3>
            <ul className="space-y-3">
              {events.map(e => (
                <li key={e.title} className="border-l-4 border-purple-600 pl-3">
                  <span className="font-medium">{e.title}</span>
                  <span className="text-sm text-gray-500">{e.time}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Segunda fila: Finanzas + Anuncios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-xl p-6 shadow h-72">
          <h3 className="text-lg font-semibold mb-4">Finance</h3>
        </section>
        <section className="bg-white rounded-xl p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Announcements</h3>
            <Link to="/admisiones/announcements" className="text-sm text-purple-600">
              View All
            </Link>
          </div>
          <ul className="space-y-4">
            {announcements.map(a => (
              <li key={a.title} className="border rounded-lg p-4">
                <span className="font-medium">{a.title}</span>
                <span className="text-xs text-gray-500 block mt-1">{a.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Dashboard_admisiones
