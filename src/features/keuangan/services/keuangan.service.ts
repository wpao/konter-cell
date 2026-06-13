import axios from "axios";

export interface KeuanganItem {
  id: string;
  beli: boolean;
  kategori: string;
  nama: string;
  harga: number;
  jumlah: number;
  total: number;
  createdAt: string;
}

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getKeuangan = async (): Promise<KeuanganItem[]> => {
  const response = await api.get("/transaksi");

  return response.data;
};

export const createKeuangan = async (payload: KeuanganItem) => {
  const response = await api.post("/transaksi", payload);

  return response.data;
};

export const deleteTransaksi = async (id: string) => {
  await api.delete(`/transaksi/${id}`);
};

export const editTransaksi = async (
  id: string,
  data: Partial<KeuanganItem>,
) => {
  await api.patch(`/transaksi/${id}`, data);
};

// jika menggunakan server express biasa, gunakan kode berikut untuk mengambil data transaksi dengan filter tanggal
// export async function getTransaksi(startDate?: string, endDate?: string) {
//   const response = await fetch("/api/transaksi");
//   const data = await response.json();

//   return data.filter((item: any) => {
//     if (!startDate || !endDate) return true;

//     return item.tanggal >= startDate && item.tanggal <= endDate;
//   });
// }

// ==============
// jika menggunakan json-server, gunakan kode berikut untuk mengambil data transaksi dengan filter tanggal
// export async function getTransaksi(startDate?: string, endDate?: string) {
//   const params = new URLSearchParams();

//   if (startDate) {
//     params.append("tanggal_gte", startDate);
//   }

//   if (endDate) {
//     params.append("tanggal_lte", endDate);
//   }

//   const res = await fetch(`http://localhost:3000/transaksi?${params}`);

//   return res.json();
// }

// ===========
export const getTransaksi = async (startDate: string, endDate: string) => {
  const start = `${startDate}T00:00:00.000Z`;
  const end = `${endDate}T23:59:59.999Z`;

  const res = await api.get(
    `/transaksi?createdAt_gte=${start}&createdAt_lte=${end}`,
  );

  return res.data;
};
