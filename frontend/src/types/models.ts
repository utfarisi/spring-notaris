// frontend/src/types/models.ts
export interface Appointment {
  id: number;
  date: string;
  
}

export interface Deed {
  id: number;
  title: string;
  status: string;
  // ... properti lainnya
}

// Contoh untuk form data
export interface DeedForm {
  type: string;
  name: string;
  // ...
}