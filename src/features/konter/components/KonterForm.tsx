// import { useState } from "react";
// import type { Konter, KonterFormData } from "../types/konter";
// import { api } from "../../../lib/axios";

// interface Props {
//   onSuccess?: (data: Konter) => void;
// }

// const initialForm: KonterFormData = {
//   nomor: "",
//   nama: "",
//   harga: 0,
//   admin: 0,
// };

// const KonterForm = ({ onSuccess }: Props) => {
//   const [form, setForm] = useState(initialForm);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: name === "harga" || name === "admin" ? Number(value) : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const payload = {
//         ...form,
//         createdAt: new Date().toISOString(),
//       };

//       const res = await api.post<Konter>("/dataKonter", payload);

//       setForm(initialForm);

//       onSuccess?.(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Gagal menyimpan data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4 rounded-lg border bg-white p-6 shadow"
//     >
//       <h2 className="text-xl font-bold">Tambah Data Konter</h2>

//       <div>
//         <label className="mb-1 block">Nomor</label>

//         <input
//           name="nomor"
//           value={form.nomor}
//           onChange={handleChange}
//           className="w-full rounded border p-2"
//           required
//         />
//       </div>

//       <div>
//         <label className="mb-1 block">Provider</label>

//         <select
//           name="nama"
//           value={form.nama}
//           onChange={handleChange}
//           className="w-full rounded border p-2"
//           required
//         >
//           <option value="">Pilih Provider</option>
//           <option value="XL">XL</option>
//           <option value="Telkomsel">Telkomsel</option>
//           <option value="Indosat">Indosat</option>
//           <option value="Tri">Tri</option>
//           <option value="Smartfren">Smartfren</option>
//         </select>
//       </div>

//       <div>
//         <label className="mb-1 block">Harga</label>

//         <input
//           type="number"
//           name="harga"
//           value={form.harga}
//           onChange={handleChange}
//           className="w-full rounded border p-2"
//           required
//         />
//       </div>

//       <div>
//         <label className="mb-1 block">Admin</label>

//         <input
//           type="number"
//           name="admin"
//           value={form.admin}
//           onChange={handleChange}
//           className="w-full rounded border p-2"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
//       >
//         {loading ? "Menyimpan..." : "Simpan"}
//       </button>
//     </form>
//   );
// };

// export default KonterForm;

import { useState } from "react";
// import { api } from "../../lib/axios";
import type { Konter, KonterFormData } from "../types/konter";
import { api } from "../../../lib/axios";

interface Props {
  onSuccess?: (data: Konter) => void;
}

const initialForm: KonterFormData = {
  nomor: "",
  nama: "",
  harga: 0,
  admin: 0,
};

const KonterForm = ({ onSuccess }: Props) => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "harga" || name === "admin" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        ...form,
        createdAt: new Date().toISOString(),
      };

      const res = await api.post<Konter>("/dataKonter", payload);

      setForm(initialForm);

      onSuccess?.(res.data);
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border bg-white p-6 shadow"
    >
      <h2 className="text-xl font-bold">Tambah Data Konter</h2>

      {/* Nomor */}
      <div>
        <label className="mb-1 block">Nomor</label>

        <input
          type="text"
          name="nomor"
          value={form.nomor}
          onChange={handleChange}
          className="w-full rounded border p-2"
          placeholder="Masukkan nomor"
          required
          min="0"
        />
      </div>

      {/* Provider */}
      <div>
        <label className="mb-1 block">Provider</label>

        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          className="w-full rounded border p-2"
          placeholder="Contoh: XL, Telkomsel, Indosat"
          required
        />
      </div>

      {/* Harga */}
      <div>
        <label className="mb-1 block">Harga</label>

        <input
          type="number"
          name="harga"
          value={form.harga}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
          min="0"
        />
      </div>

      {/* Admin */}
      <div>
        <label className="mb-1 block">Admin</label>

        <input
          type="number"
          name="admin"
          value={form.admin}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
          min="0"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Menyimpan..." : "Simpan"}
      </button>
    </form>
  );
};

export default KonterForm;
