import { useState } from "react";
import { createKeuangan } from "../services/keuangan.service";

interface KeuanganFormProps {
  onClose: () => void;
}

const kategoriList = ["UANG ES", "UANG TOKO", "UANG KONTER"];

export default function KeuanganForm({ onClose }: KeuanganFormProps) {
  // const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    beli: true,
    kategori: "",
    nama: "",
    harga: 0,
    jumlah: 0,
  });

  // const formatNumber = (value: string) => {
  //   const number = value.replace(/\D/g, "");
  //   return new Intl.NumberFormat("id-ID").format(Number(number || 0));
  // };

  const total = (Number(form.harga) || 0) * (Number(form.jumlah) || 0);
  const formattedTotal = total.toLocaleString("id-ID");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = {
        id: crypto.randomUUID(),
        beli: form.beli,
        kategori: form.kategori,
        nama: form.nama,
        harga: Number(form.harga),
        jumlah: Number(form.jumlah),
        total,
        createdAt: new Date().toISOString(),
      };

      await createKeuangan(data);

      setForm({
        beli: true,
        kategori: "",
        nama: "",
        harga: 0,
        jumlah: 0,
      });

      onClose();
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan data");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Tambah Transaksi</h2>

          <button
            onClick={onClose}
            className="text-xl text-slate-500 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* seluruh isi form yang sudah dibuat sebelumnya */}
          {/* BELI / JUAL */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">
              Jenis Transaksi
            </label>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, beli: true }))}
                className={`rounded-xl border p-3 font-medium transition ${
                  form.beli
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-slate-300 bg-white"
                }`}
              >
                BELI
              </button>

              <button
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, beli: false }))}
                className={`rounded-xl border p-3 font-medium transition ${
                  !form.beli
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-slate-300 bg-white"
                }`}
              >
                JUAL
              </button>
            </div>
          </div>

          {/* KATEGORI */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">
              Kategori
            </label>

            <select
              value={form.kategori}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  kategori: e.target.value,
                }))
              }
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="">Pilih kategori</option>

              {kategoriList.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* NAMA */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">
              Nama
            </label>

            <input
              type="text"
              value={form.nama}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  nama: e.target.value,
                }))
              }
              placeholder="Masukkan nama"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* HARGA */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">
              Harga
            </label>

            <input
              type="text"
              // value={form.harga}
              // onChange={(e) =>
              //   setForm((prev) => ({
              //     ...prev,
              //     harga: e.target.value,
              //   }))
              // }

              value={form.harga ? form.harga.toLocaleString("id-ID") : ""}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "");

                setForm((prev) => ({
                  ...prev,
                  harga: Number(raw),
                }));
              }}
              placeholder="0"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* JUMLAH */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">
              Jumlah
            </label>

            <input
              type="text"
              value={form.jumlah ? form.jumlah.toLocaleString("id-ID") : ""}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  jumlah: Number(e.target.value),
                }))
              }
              placeholder="0"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* TOTAL */}
          <div className="rounded-2xl border bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Total</p>

            <p className="text-2xl font-bold text-slate-800">
              Rp {formattedTotal}
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => onClose()}
              className="flex-1 rounded-xl border py-3"
            >
              Batal
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-indigo-600 py-3 text-white"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/*
{
  "id": "6c5e8c53-fc93-4e84-bd1e-7e82d6b3f11c",
  "beli": true,
  "kategori": "UANG ES",
  "nama": "ES",
  "harga": 8000,
  "jumlah": 3,
  "total": 24000,
  "createdAt": "2026-06-12T18:30:00.000Z"
}
*/
