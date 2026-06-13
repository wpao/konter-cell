import { Pencil, Trash2 } from "lucide-react";
import type { Product } from "../types/product";
import { motion } from "framer-motion";

interface Props {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export default function ProductTable({ products, onEdit, onDelete }: Props) {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          layout
          className="
    bg-white
    rounded-2xl
    shadow
    p-3
    flex
    gap-3
  "
        >
          {/* <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 rounded-lg object-cover"
          /> */}

          <div className="flex-1">
            <h3 className="font-semibold">{product.name}</h3>

            {/* <p className="text-xs text-gray-500">SKU: {product.sku}</p> */}

            <p className="text-sm text-gray-600">
              Kategori: {product.category}
            </p>

            <p className="font-bold text-lg">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
          </div>

          <div className="flex flex-col justify-between items-end">
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(product)}
                className="bg-blue-100 p-2 rounded-lg"
              >
                <Pencil size={16} className="text-blue-600" />
              </button>

              <button
                onClick={() => onDelete(product.id)}
                className="bg-red-100 p-2 rounded-lg"
              >
                <Trash2 size={16} className="text-red-600" />
              </button>
            </div>

            <span className="font-semibold">Stok: {product.stock}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
