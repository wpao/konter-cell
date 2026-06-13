import { useState } from "react";

import type { Product } from "../types/product";

export const useProductPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openDrawer = () => setDrawerOpen(true);

  const closeDrawer = () => setDrawerOpen(false);

  const openEdit = (product: Product) => {
    setSelectedProduct(product);
    setEditOpen(true);
  };

  const closeEdit = () => setEditOpen(false);

  return {
    drawerOpen,
    editOpen,
    selectedProduct,

    openDrawer,
    closeDrawer,

    openEdit,
    closeEdit,
  };
};
