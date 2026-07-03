import React, { useState } from 'react';
import { useRegister } from '../hooks/mutations/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const { mutate: registerUser, isPending, isError, error } = useRegister();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerUser(formData, {
      onSuccess: () => navigate('/login') // O directo a '/catalog' si el backend autologea
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 px-4">
      {/* Botón de retroceso libre en la pantalla */}
      <div className="w-full max-w-xl mx-auto pt-8 pb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver
        </button>
      </div>

      {/* Contenedor principal del formulario */}
      <div className="flex-1 flex items-center justify-center pb-12">
        <div className="w-full max-w-xl p-8 bg-white rounded-xl shadow-sm border border-gray-100">
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Crear Cuenta</h2>
            <p className="text-sm text-gray-500 mt-2">Completa tus datos para empezar a simular créditos</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text" 
                  name="firstName" 
                  required 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:bg-white focus:outline-none transition-all" 
                  onChange={handleChange} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                <input 
                  type="text" 
                  name="lastName" 
                  required 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:bg-white focus:outline-none transition-all" 
                  onChange={handleChange} 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">DNI</label>
                <input 
                  type="text" 
                  name="dni" 
                  maxLength={8}
                  required 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:bg-white focus:outline-none transition-all" 
                  onChange={handleChange} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:bg-white focus:outline-none transition-all" 
                  onChange={handleChange} 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:bg-white focus:outline-none transition-all" 
                onChange={handleChange} 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input 
                type="password" 
                name="password" 
                required 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:bg-white focus:outline-none transition-all" 
                onChange={handleChange} 
              />
            </div>

            {isError && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-100 p-3 rounded-lg flex items-start">
                 <svg className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error?.response?.data?.message || 'Error al procesar el registro. Inténtalo de nuevo.'}</span>
              </div>
            )}

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={isPending} 
                className="w-full bg-gray-900 text-white font-medium py-2.5 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isPending ? 'Procesando...' : 'Confirmar Registro'}
              </button>
            </div>
          </form>

          {/* Enlace de alternancia (Toggle) */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/login" className="text-gray-900 font-semibold hover:underline">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};