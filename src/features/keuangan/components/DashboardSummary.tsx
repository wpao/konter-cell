// import { useEffect, useMemo, useState } from "react";
// import { getKeuangan } from "../services/keuangan.service";

type Props = {
  transaksi: KeuanganItem[];
};

export interface KeuanganItem {
  id: string;
  beli: boolean;
  kategori: string;
  nama: string;
  harga: number;
  jumlah: number;
  total: number;
  createdAt: string;
}

export default function DashboardSummary({
  transaksi: initialTransaksi,
}: Props) {
  const transaksi = initialTransaksi.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
  // ===============================
  // const [transaksi, setTransaksi] = useState<KeuanganItem[]>(initialTransaksi);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const data = await getKeuangan();
  //       setTransaksi(data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadData();
  // }, []);

  // const summary = useMemo(() => {
  //   const today = new Date().toISOString().split("T")[0];

  //   const transaksiHariIni = transaksi.filter(
  //     (item) => item.createdAt.split("T")[0] === today,
  //   );

  //   const omzetHariIni = transaksiHariIni
  //     .filter((item) => !item.beli)
  //     .reduce((sum, item) => sum + item.total, 0);

  //   const modalHariIni = transaksiHariIni
  //     .filter((item) => item.beli)
  //     .reduce((sum, item) => sum + item.total, 0);

  //   const profitHariIni = omzetHariIni - modalHariIni;

  //   const produkMap = transaksiHariIni
  //     .filter((item) => !item.beli)
  //     .reduce<Record<string, number>>((acc, item) => {
  //       acc[item.nama] = (acc[item.nama] || 0) + item.jumlah;
  //       return acc;
  //     }, {});

  //   const produkTerlaris = Object.entries(produkMap).sort(
  //     (a, b) => b[1] - a[1],
  //   )[0] ?? ["-", 0];

  //   return {
  //     omzetHariIni,
  //     profitHariIni,
  //     jumlahTransaksi: transaksiHariIni.length,
  //     produkTerlaris,
  //   };
  // }, [transaksi]);

  // if (loading) {
  //   return (
  //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
  //       {[1, 2, 3, 4].map((item) => (
  //         <div
  //           key={item}
  //           className="h-28 animate-pulse rounded-2xl bg-slate-200"
  //         />
  //       ))}
  //     </div>
  //   );
  // }

  // const cards = [
  //   // {
  //   //   title: "Omzet Hari Ini",
  //   //   value: `Rp ${summary.omzetHariIni.toLocaleString("id-ID")}`,
  //   //   color: "text-green-600",
  //   // },
  //   // {
  //   //   title: "Profit Hari Ini",
  //   //   value: `Rp ${summary.profitHariIni.toLocaleString("id-ID")}`,
  //   //   color: summary.profitHariIni >= 0 ? "text-blue-600" : "text-red-600",
  //   // },
  //   {
  //     title: "Jumlah Transaksi",
  //     value: summary.jumlahTransaksi,
  //     color: "text-violet-600",
  //   },
  //   {
  //     title: "Produk Terlaris",
  //     value: `${summary.produkTerlaris[0]} (${summary.produkTerlaris[1]})`,
  //     color: "text-amber-600",
  //   },
  // ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {/* {cards.map((card) => ( */}
      <div
        key="jumlah-transaksi"
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <p className="text-sm text-slate-500">Jumlah Transaksi</p>

        <h2
          className={`mt-2 bg-gradient-to-r from-violet-600 to-amber-600 bg-clip-text text-2xl font-bold text-transparent`}
        >
          {transaksi.length}
        </h2>
      </div>
      {/* ))} */}
    </div>
  );
}
