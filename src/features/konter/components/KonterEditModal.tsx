import { useEffect, useState } from "react";
import type { Konter } from "../types/konter";
import { api } from "../../../lib/axios";

interface Props {
  item: Konter | null;
  onClose: () => void;
  onSuccess: () => void;
}

const KonterEditModal = ({ item, onClose, onSuccess }: Props) => {
  const [form, setForm] = useState<Konter | null>(null);

  useEffect(() => {
    setForm(item);
  }, [item]);

  if (!form) return null;

  const handleSave = async () => {
    try {
      await api.put(`/dataKonter/${form.id}`, form);

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Hapus data ini?")) return;

    try {
      await api.delete(`/dataKonter/${form.id}`);

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-96 rounded-lg bg-white p-6 shadow-xl">
        {/* Tombol X */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-gray-500 transition hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="mb-6 text-xl font-bold">Edit Data Konter</h2>

        <input
          className="mb-3 w-full rounded border p-2"
          value={form.nomor}
          onChange={(e) =>
            setForm({
              ...form,
              nomor: e.target.value,
            })
          }
        />

        <input
          className="mb-3 w-full rounded border p-2"
          value={form.nama}
          onChange={(e) =>
            setForm({
              ...form,
              nama: e.target.value,
            })
          }
        />

        <input
          type="number"
          className="mb-3 w-full rounded border p-2"
          value={form.harga}
          onChange={(e) =>
            setForm({
              ...form,
              harga: Number(e.target.value),
            })
          }
        />

        <input
          type="number"
          className="mb-6 w-full rounded border p-2"
          value={form.admin}
          onChange={(e) =>
            setForm({
              ...form,
              admin: Number(e.target.value),
            })
          }
        />

        <div className="flex justify-between">
          <button
            onClick={handleDelete}
            className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
          >
            Delete
          </button>

          <button
            onClick={handleSave}
            className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default KonterEditModal;
