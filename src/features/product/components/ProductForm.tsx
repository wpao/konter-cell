import { useState } from "react";

import type { Product } from "../types/product";

interface Props {
  onSubmit: (product: Product) => void;
}

export default function ProductForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      name,
      price,
      stock,
    });

    setName("");
    setPrice(0);
    setStock(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        className="w-full border p-2"
        placeholder="Nama Produk"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        className="w-full border p-2"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <input
        type="number"
        className="w-full border p-2"
        placeholder="Stok"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
      />

      <button
        className="rounded bg-blue-500 px-4 py-2 text-white"
        type="submit"
      >
        Simpan
      </button>
    </form>
  );
}
