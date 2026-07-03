import api from '../api/axiosConfig';
import type { CalculateRequest, CalculateResponse } from '../types/simulation.types';

export const simulationService = {
  calculate: async (data: CalculateRequest): Promise<CalculateResponse> => {
    const response = await api.post<CalculateResponse>('/simulations/calculate', data);
    return response.data;
  },
};