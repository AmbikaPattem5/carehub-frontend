export type Gender = 'male' | 'female' | 'other';
export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | 'Unknown';
export type PatientStatus = 'active' | 'inactive';

export interface Patient {
  _id?: string;
  id?: string;
  patientId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  phone: string;
  email?: string;
  address?: string;
  bloodGroup?: BloodGroup;
  emergencyContact?: string;
  status: PatientStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePatientRequest {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  phone: string;
  email?: string;
  address?: string;
  bloodGroup?: BloodGroup;
  emergencyContact?: string;
}

export interface PatientsResponse {
  success: boolean;
  count: number;
  patients: Patient[];
  message?: string;
}

export interface PatientResponse {
  success: boolean;
  patient: Patient;
  message?: string;
}
