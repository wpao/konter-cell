// src/types/konter.ts

export interface Konter {
  id: string;
  nomor: string;
  nama: string;
  harga: number;
  admin: number;
  createdAt: string;
}

export interface KonterFormData {
  nomor: string;
  nama: string;
  harga: number;
  admin: number;
}
