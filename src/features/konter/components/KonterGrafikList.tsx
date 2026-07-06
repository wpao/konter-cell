// ==================== total transaksi ===
// import type { Konter } from "../types/konter";

// interface Props {
//   data: Konter[];
// }

// const KonterGrafikList = ({ data }: Props) => {
//   return (
//     <div className="rounded border p-4">
//       <h2 className="mb-3 font-bold">Grafik</h2>

//       <p>Total Data : {data.length}</p>

//       <p>
//         Total Harga :{" "}
//         {data
//           .reduce((sum, item) => sum + item.harga, 0)
//           .toLocaleString("id-ID")}
//       </p>

//       <p>
//         Total Admin :{" "}
//         {data
//           .reduce((sum, item) => sum + item.admin, 0)
//           .toLocaleString("id-ID")}
//       </p>

//       {/* paling banyak laku */}
//     </div>
//   );
// };

// export default KonterGrafikList;

// ==================== paling banyak laku ===
// import { useMemo } from "react";
// import type { Konter } from "../types/konter";

// interface Props {
//   data: Konter[];
// }

// const KonterGrafikList = ({ data }: Props) => {
//   const ranking = useMemo(() => {
//     const result: Record<
//       string,
//       {
//         nama: string;
//         jumlah: number;
//         omzet: number;
//       }
//     > = {};

//     data.forEach((item) => {
//       if (!result[item.nama]) {
//         result[item.nama] = {
//           nama: item.nama,
//           jumlah: 0,
//           omzet: 0,
//         };
//       }

//       result[item.nama].jumlah += 1;
//       result[item.nama].omzet += item.harga;
//     });

//     return Object.values(result).sort((a, b) => b.jumlah - a.jumlah);
//   }, [data]);

//   return (
//     <div className="rounded-lg border bg-white p-5 shadow">
//       <h2 className="mb-4 text-xl font-bold">Produk Paling Banyak Laku</h2>

//       {ranking.length === 0 ? (
//         <p className="text-gray-500">Belum ada data.</p>
//       ) : (
//         <div className="space-y-3">
//           {ranking.map((item, index) => (
//             <div
//               key={item.nama}
//               className="flex items-center justify-between rounded border p-3"
//             >
//               <div>
//                 <p className="font-semibold">
//                   #{index + 1} {item.nama.toUpperCase()}
//                 </p>

//                 <p className="text-sm text-gray-500">{item.jumlah} transaksi</p>
//               </div>

//               <div className="text-right">
//                 <p className="font-semibold">
//                   Rp {item.omzet.toLocaleString("id-ID")}
//                 </p>

//                 <p className="text-sm text-gray-500">Omzet</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default KonterGrafikList;

// ================ grafig====
// pnpm add recharts
import { useMemo } from "react";
import type { Konter } from "../types/konter";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: Konter[];
}

const KonterGrafikList = ({ data }: Props) => {
  const chartData = useMemo(() => {
    const map = new Map<
      string,
      {
        nama: string;
        jumlah: number;
        omzet: number;
      }
    >();

    data.forEach((item) => {
      const current = map.get(item.nama);

      if (current) {
        current.jumlah += 1;
        current.omzet += item.harga;
      } else {
        map.set(item.nama, {
          nama: item.nama.toUpperCase(),
          jumlah: 1,
          omzet: item.harga,
        });
      }
    });

    return [...map.values()].sort((a, b) => b.jumlah - a.jumlah);
  }, [data]);

  return (
    <div className="rounded-lg border bg-white p-5 shadow">
      <h2 className="mb-5 text-xl font-bold">Produk Paling Banyak Laku</h2>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="nama" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Bar dataKey="jumlah" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KonterGrafikList;
