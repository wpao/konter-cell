import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "../types/product";
import { useEffect, useState } from "react";

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onSave: (data: Product) => void;
}

export default function ProductEditModal({
  product,
  open,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<Product | null>(null);

  useEffect(() => {
    setForm(product);
  }, [product]);

  if (!form) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className="
              fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              bg-white
              rounded-2xl
              p-5
              w-[90%]
            "
          >
            <h2 className="font-bold text-lg mb-4">Edit Produk</h2>

            <select
              className="input text-start w-full mb-2"
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value,
                })
              }
            >
              <option value="">Pilih Kategori</option>
              <option value="Pulsa Bank">Pulsa Bank</option>
              <option value="Kartu">Kartu</option>
              <option value="Aces">Aces</option>
            </select>

            <input
              value={form.name}
              className="input mb-2"
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <input
              value={form.price}
              className="input mb-2"
              onChange={(e) =>
                setForm({
                  ...form,
                  price: Number(e.target.value),
                })
              }
            />
            <input
              value={form.stock}
              className="input mb-2"
              onChange={(e) =>
                setForm({
                  ...form,
                  stock: Number(e.target.value),
                })
              }
            />

            {/* <input
              value={form.category}
              className="input mb-2"
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value,
                })
              }
            /> */}

            {/* <input
              value={form.sku}
              className="input mb-2"
              onChange={(e) =>
                setForm({
                  ...form,
                  sku: e.target.value,
                })
              }
            /> */}

            <button
              className="
                w-full
                bg-blue-600
                text-white
                py-3
                rounded-xl
              "
              onClick={() => {
                onSave(form);
                onClose();
              }}
            >
              Update
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
