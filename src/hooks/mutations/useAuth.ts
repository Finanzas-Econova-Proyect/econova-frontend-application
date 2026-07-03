import { useMutation } from '@tanstack/react-query';
import { authService } from '../../services/authService';
import type { AxiosError } from 'axios';

type LoginRequest = {
  email: string;
  password: string;
};

type RegisterRequest = {
  firstName: string;
  lastName: string;
  dni: string;
  phone: string;
  email: string;
  password: string;
};

type AuthResponse = {
  token: string;
};

export const useLogin = () => {
  return useMutation<AuthResponse, AxiosError<{ message: string }>, LoginRequest>({
    mutationFn: (credentials) => authService.login(credentials),
    onSuccess: (data) => {
      // Guardamos el JWT para que el interceptor de Axios lo empiece a usar
      localStorage.setItem('jwt_token', data.token);
    }
  });
};

export const useRegister = () => {
  return useMutation<AuthResponse, AxiosError<{ message: string }>, RegisterRequest>({
    mutationFn: (userData) => authService.register(userData),
    // Si el registro devuelve un token automáticamente y loguea al usuario:
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem('jwt_token', data.token);
      }
    }
  });
};