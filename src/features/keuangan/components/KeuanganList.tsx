// components/KeuanganList.tsx

import { useEffect, useState } from "react";
import {
  getKeuangan,
  deleteTransaksi,
  editTransaksi,
  type KeuanganItem,
} from "../services/keuangan.service";

export default function KeuanganList() {
  useEffect(() => {
    loadData();
  }, []);

  const [data, setData] = useState<KeuanganItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState<any>(null);
  const [openEdit, setOpenEdit] = useState(false);
  const kategoriList = ["UANG ES", "UANG TOKO", "UANG KONTER"];

  const loadData = async () => {
    try {
      const result = await getKeuangan();
      console.log("Data sss:", result);
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="rounded-2xl bg-white p-4 shadow">Loading...</div>;
  }

  if (data.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-4 shadow">Belum ada data</div>
    );
  }

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus data?");

    if (!confirmDelete) return;

    try {
      await deleteTransaksi(id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id: any) => {
    const item = data.find((item) => item.id === id);

    if (!item) return;

    setEditData({ ...item });
    setOpenEdit(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setEditData((prev: any) => {
      const updated = {
        ...prev,
        [name]:
          name === "harga" || name === "jumlah"
            ? Number(value)
            : name === "beli"
              ? value === "true"
              : value,
      };

      updated.total = updated.harga * updated.jumlah;

      return updated;
    });
  };

  const handleSave = async () => {
    try {
      await editTransaksi(editData.id, {
        beli: editData.beli,
        kategori: editData.kategori,
        nama: editData.nama,
        harga: editData.harga,
        jumlah: editData.jumlah,
        total: editData.total,
      });

      // setDatas((prev) =>
      //   prev.map((item) =>
      //     item.id === editData.id ? editData : item
      //   )
      // );

      setOpenEdit(false);
      setEditData(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-3 text-left">Tanggal</th>
            <th className="p-3 text-left">Nama</th>
            <th className="p-3 text-left">Kategori</th>
            <th className="p-3 text-right">Jumlah</th>
            <th className="p-3 text-right">Harga</th>
            <th className="p-3 text-right">Total</th>
            <th className="p-3 text-right">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            // <tr key={item.id} className="border-t hover:bg-slate-50">
            // ==============================
            // <tr
            //   key={item.id}
            //   className={`border-t ${
            //     item.beli
            //       ? "bg-red-50 text-red-800"
            //       : "bg-green-50 text-green-800"
            //   }`}
            // >
            // ==============================
            <tr
              key={item.id}
              className={`border-t hover:bg-slate-50 ${
                !item.beli ? "bg-green-50" : ""
              }`}
            >
              <td className="p-3">
                {new Date(item.createdAt).toLocaleDateString("id-ID")}
              </td>

              <td className="p-3">{item.nama}</td>

              <td className="p-3">{item.kategori}</td>

              <td className="p-3 text-right">{item.jumlah}</td>

              <td className="p-3 text-right">
                Rp {item.harga.toLocaleString("id-ID")}
              </td>

              <td className="p-3 text-right font-semibold">
                Rp {item.total.toLocaleString("id-ID")}
              </td>
              <td className="p-3 text-right">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="ml-2 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*  */}
      {openEdit && editData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-xl bg-white p-4">
            <h2 className="mb-4 text-lg font-bold">Edit Transaksi</h2>

            <div className="space-y-3">
              <select
                name="beli"
                value={String(editData.beli)}
                onChange={handleChange}
                className="w-full rounded border p-2"
              >
                <option value="true">Beli</option>
                <option value="false">Jual</option>
              </select>

              {/* <input
                name="kategori"
                value={editData.kategori}
                onChange={handleChange}
                placeholder="Kategori"
                className="w-full rounded border p-2"
              /> */}

              <select
                name="kategori"
                value={editData.kategori}
                onChange={handleChange}
                className="w-full rounded border p-2"
              >
                {kategoriList.map((kategori) => (
                  <option key={kategori} value={kategori}>
                    {kategori}
                  </option>
                ))}
              </select>

              <input
                name="nama"
                value={editData.nama}
                onChange={handleChange}
                placeholder="Nama"
                className="w-full rounded border p-2"
              />

              <input
                type="text"
                name="harga"
                // value={editData.harga}
                value={
                  editData.harga ? editData.harga.toLocaleString("id-ID") : ""
                }
                onChange={handleChange}
                placeholder="Harga"
                className="w-full rounded border p-2"
              />

              <input
                type="text"
                name="jumlah"
                value={editData.jumlah}
                onChange={handleChange}
                placeholder="Jumlah"
                className="w-full rounded border p-2"
              />

              <input
                // value={editData.total}
                value={
                  editData.total ? editData.total.toLocaleString("id-ID") : ""
                }
                readOnly
                className="w-full rounded border bg-gray-100 p-2"
              />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setOpenEdit(false)}
                className="rounded bg-gray-300 px-4 py-2"
              >
                Batal
              </button>

              <button
                onClick={handleSave}
                className="rounded bg-green-500 px-4 py-2 text-white"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
