import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { simulationService } from '../../services/simulationService';
import type { CalculateRequest, CalculateResponse } from '../../types/simulation.types';
import type { AxiosError } from 'axios';

export const useCalculateSimulation = (): UseMutationResult<
  CalculateResponse,
  AxiosError<{ message: string }>, // Mapea el GlobalExceptionHandler del backend
  CalculateRequest
> => {
  return useMutation({
    mutationFn: (calculationData: CalculateRequest) => 
      simulationService.calculate(calculationData),
    onError: (error: AxiosError<{ message: string }>) => {
      // TypeScript ahora sabe que error.response.data.message existe
      console.error('Business Exception:', error.response?.data?.message);
    }
  });
};