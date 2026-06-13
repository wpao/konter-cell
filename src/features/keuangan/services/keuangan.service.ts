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
