import { motion, AnimatePresence } from "framer-motion";
import type { ProductPayload } from "../types/product";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ProductPayload) => void;
}

export default function ProductDrawer({ open, onClose, onSubmit }: Props) {
  const [form, setForm] = useState<ProductPayload>({
    name: "",
    sku: "",
    category: "",
    price: 0,
    stock: 0,
    image: "",
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: 0 }}
            transition={{ duration: 0 }}
            className="
              fixed
              bottom-0
              left-0
              right-0
              bg-white
              rounded-3xl
              p-5
              max-h-[90vh]
              overflow-y-auto
              mb-24
              mx-10
            "
          >
            <h2 className="text-xl font-bold mb-4">Tambah Produk</h2>

            <div className="space-y-3">
              <select
                className="input text-start w-full"
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
                placeholder="Nama Produk + harga beli"
                className="input"
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

              {/* <input
                placeholder="SKU"
                className="input"
                onChange={(e) =>
                  setForm({
                    ...form,
                    sku: e.target.value,
                  })
                }
              /> */}

              <input
                type="number"
                placeholder="Harga jual"
                className="input"
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: Number(e.target.value),
                  })
                }
              />

              <input
                type="number"
                placeholder="Stok"
                className="input"
                onChange={(e) =>
                  setForm({
                    ...form,
                    stock: Number(e.target.value),
                  })
                }
              />

              {/* <input
                placeholder="URL Gambar"
                className="input"
                onChange={(e) =>
                  setForm({
                    ...form,
                    image: e.target.value,
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
                  onSubmit(form);
                  onClose();
                }}
              >
                Simpan
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
