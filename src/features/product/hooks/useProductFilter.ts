import { useMemo, useState } from "react";

import type { Product } from "../types/product";

export const useProductFilter = (products: Product[]) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = !category || product.category === category;

      return matchSearch && matchCategory;
    });
  }, [products, search, category]);

  return {
    search,
    setSearch,

    category,
    setCategory,

    filteredProducts,
  };
};
