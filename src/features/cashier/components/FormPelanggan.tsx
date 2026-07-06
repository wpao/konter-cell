// import { useState } from "react";

// export default function FormPelanggan() {
//   const [nomorHp, setNomorHp] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     await fetch(
//       "https://doctorially-exegetic-kensley.ngrok-free.dev/pelanggan",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           nomorHp,
//         }),
//       },
//     );

//     alert("Terima kasih");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Masukkan Nomor HP</h2>

//       <input
//         type="tel"
//         placeholder="08xxxxxxxxxx"
//         value={nomorHp}
//         onChange={(e) => setNomorHp(e.target.value)}
//       />

//       <button type="submit">Simpan</button>
//     </form>
//   );
// }

//
import { useState } from "react";

export default function FormPelanggan() {
  const [nomorHp, setNomorHp] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://doctorially-exegetic-kensley.ngrok-free.dev/pelanggan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomorHp,
            tanggal: new Date().toISOString(),
          }),
        },
      );

      if (response.ok) {
        alert("Data berhasil disimpan");
        setNomorHp("");
      }
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="tel"
        placeholder="08xxxxxxxxxx"
        value={nomorHp}
        onChange={(e) => setNomorHp(e.target.value)}
      />

      <button type="submit">Simpan</button>
    </form>
  );
}
