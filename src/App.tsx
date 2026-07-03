import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { Login } from './views/Login'
import { Register } from './views/Register'
import './App.css'

function Catalog() {
  return (
    <main className="app-shell">
      <section className="landing-card">
        <p className="eyebrow">Econova</p>
        <h1>Catálogo</h1>
        <p className="landing-copy">
          Tu sesión está activa. Desde aquí puedes continuar con el flujo de la plataforma.
        </p>
        <div className="landing-actions">
          <Link to="/" className="secondary-action">Volver al inicio</Link>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="app-shell">
            <section className="landing-card">
              <p className="eyebrow">Econova</p>
              <h1>Simulación financiera simple, clara y rápida.</h1>
              <p className="landing-copy">
                Accede a tu cuenta o crea una nueva para empezar a usar la plataforma.
              </p>
              <div className="landing-actions">
                <Link to="/login" className="primary-action">Iniciar sesión</Link>
                <Link to="/register" className="secondary-action">Crear cuenta</Link>
              </div>
            </section>
          </main>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
