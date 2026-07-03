import React, { useState } from 'react';
import { useLogin } from '../hooks/mutations/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending, isError, error } = useLogin();
  
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData, {
      onSuccess: () => navigate('/catalog') // Redirige al catálogo tras el login
    });
  };

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <div className="auth-header">
          <p className="eyebrow">Econova</p>
          <h2>Iniciar sesión</h2>
          <p className="auth-subtitle">Ingresa con tu correo y contraseña para continuar.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="field">
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              id="login-email"
              name="email"
              required
              className="input"
              onChange={handleChange}
            />
          </div>
          
          <div className="field">
            <label htmlFor="login-password">Contraseña</label>
            <input
              type="password"
              id="login-password"
              name="password"
              required
              className="input"
              onChange={handleChange}
            />
          </div>

          {isError && (
            <div className="feedback feedback-error">
              {error?.response?.data?.message || 'Credenciales inválidas.'}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="button-primary"
          >
            {isPending ? 'Autenticando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <p className="auth-footer">
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </main>
  );
};