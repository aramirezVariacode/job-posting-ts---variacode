export interface User {
  email: string;
  id: string;
  phone: string;
  postulant?: string | null;
  recruiter?: string | null;
  role: string;
  verified: boolean;
}