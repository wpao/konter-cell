import { api } from "../../../lib/axios";
import type { Product, ProductPayload } from "../types/product";

export const productApi = {
  getAll: async (): Promise<Product[]> => {
    const { data } = await api.get("/products");
    return data;
  },

  getById: async (id: string): Promise<Product> => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },

  create: async (payload: ProductPayload): Promise<Product> => {
    const { data } = await api.post("/products", payload);
    return data;
  },

  update: async (id: string, payload: ProductPayload): Promise<Product> => {
    const { data } = await api.put(`/products/${id}`, payload);
    return data;
  },

  remove: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`);
  },
};
