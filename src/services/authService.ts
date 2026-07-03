import api from '../api/axiosConfig';

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

export const authService = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', data);
    return response.data;
  },
  
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/register', data);
    return response.data;
  }
};