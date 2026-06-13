import { toast } from "sonner";

import { useProductMutation } from "./useProductMutation";
import { useProductPage } from "./useProductPage";

import type { Product, ProductPayload } from "../types/product";

type ProductPageState = ReturnType<typeof useProductPage>;

export const useProductActions = (page: ProductPageState) => {
  const mutation = useProductMutation();

  const createProduct = async (payload: ProductPayload) => {
    try {
      await mutation.createProduct(payload);

      page.closeDrawer();

      toast.success("Produk berhasil ditambahkan");
    } catch (error) {
      console.error(error);

      toast.error("Gagal menambahkan produk");
    }
  };

  const updateProduct = async (product: Product) => {
    try {
      const { id, ...data } = product;

      await mutation.updateProduct({
        id,
        data,
      });

      page.closeEdit();

      toast.success("Produk berhasil diperbarui");
    } catch (error) {
      console.error(error);

      toast.error("Gagal memperbarui produk");
    }
  };

  const deleteProduct = async (id: string) => {
    const confirmed = window.confirm("Hapus produk ini?");

    if (!confirmed) {
      return;
    }

    try {
      await mutation.deleteProduct(id);

      toast.success("Produk berhasil dihapus");
    } catch (error) {
      console.error(error);

      toast.error("Gagal menghapus produk");
    }
  };

  return {
    createProduct,
    updateProduct,
    deleteProduct,

    isCreating: mutation.isCreating,
    isUpdating: mutation.isUpdating,
    isDeleting: mutation.isDeleting,
  };
};
