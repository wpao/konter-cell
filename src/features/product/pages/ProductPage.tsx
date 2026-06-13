import { Filter, Search } from "lucide-react";

import FloatingAddButton from "../components/FloatingAddButton";
import ProductDrawer from "../components/ProductDrawer";
import ProductEditModal from "../components/ProductEditModal";
import ProductFilter from "../components/ProductFilter";
import ProductTable from "../components/ProductTable";

import { useProductActions } from "../hooks/useProductActions";
import { useProductFilter } from "../hooks/useProductFilter";
import { useProductPage } from "../hooks/useProductPage";
import { useProductQuery } from "../hooks/useProductQuery";

export default function ProductPage() {
  const page = useProductPage();

  const { data = [] } = useProductQuery();

  const actions = useProductActions(page);

  const { search, setSearch, category, setCategory, filteredProducts } =
    useProductFilter(data);

  return (
    <div className="mx-auto max-w-md p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Produk</h1>
        <FloatingAddButton onClick={page.openDrawer} />
      </div>

      <div className="mb-4 flex gap-2">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border p-2 pl-10"
          />
        </div>

        <button className="flex items-center gap-2 rounded-xl border px-4">
          <Filter size={18} />
          Filter
        </button>
      </div>

      <div className="mb-4">
        <ProductFilter value={category} onChange={setCategory} />
      </div>

      <ProductTable
        products={filteredProducts}
        onEdit={page.openEdit}
        onDelete={actions.deleteProduct}
      />

      <ProductDrawer
        open={page.drawerOpen}
        onClose={page.closeDrawer}
        onSubmit={actions.createProduct}
      />

      <ProductEditModal
        open={page.editOpen}
        product={page.selectedProduct}
        onClose={page.closeEdit}
        onSave={actions.updateProduct}
      />
    </div>
  );
}
