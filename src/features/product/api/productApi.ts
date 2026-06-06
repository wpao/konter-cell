// import { api } from "@/services/axios";
import { api } from "../../../services/axios";

import type { Product } from "../types/product";

export const productApi = {
  getAll: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data;
  },

  create: async (payload: Product) => {
    const { data } = await api.post("/products", payload);

    return data;
  },

  update: async (id: string, payload: Product) => {
    const { data } = await api.put(`/products/${id}`, payload);

    return data;
  },

  delete: async (id: string) => {
    await api.delete(`/products/${id}`);
  },
};
