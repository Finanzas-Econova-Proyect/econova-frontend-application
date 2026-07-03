// Mapeo de tu Enum GraceType en Java
export type GraceType = 'NONE' | 'PARTIAL' | 'TOTAL';

// Mapeo de CalculateRequest.java
export interface CalculateRequest {
  vehiclePrice: number;
  initialPayment: number;
  interestRate: number; // TEA o TEM
  termInMonths: number;
  graceType: GraceType;
  graceMonths: number;
}

// Mapeo de ScheduleRowResponse.java
export interface ScheduleRowResponse {
  month: number;
  installment: number; // Cuota
  principal: number;   // Amortización
  interest: number;    // Interés
  balance: number;     // Saldo restante
}

// Mapeo de CalculateResponse.java
export interface CalculateResponse {
  schedule: ScheduleRowResponse[];
  summary: {
    totalInterest: number;
    totalAmount: number;
    tir: number;
    tcea: number;
  };
}