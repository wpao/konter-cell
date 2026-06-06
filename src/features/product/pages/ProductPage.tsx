import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

import { productApi } from "../api/productApi";
import { useProducts } from "../hooks/useProducts";

import type { Product } from "../types/product";

export default function ProductPage() {
  const { products, reload } = useProducts();

  const handleCreate = async (payload: Product) => {
    await productApi.create(payload);
    reload();
  };

  const handleDelete = async (id: string) => {
    await productApi.delete(id);
    reload();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Produk</h1>

      <ProductForm onSubmit={handleCreate} />

      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
}
