// import { useQuery } from "@tanstack/react-query";
// import { getKeuangan } from "../services/keuangan.service";
// import { useState } from "react";

type Props = {
  transaksi: Transaksi[];
};

export interface Transaksi {
  id: string;
  beli: boolean;
  kategori: string;
  nama: string;
  harga: number;
  jumlah: number;
  total: number;
  createdAt: string;
}

export default function DashboardKonter({ transaksi }: Props) {
  // const [showDetail, setShowDetail] = useState(false);

  // const { data = [], isLoading } = useQuery({
  //   queryKey: ["transaksi"],
  //   queryFn: getKeuangan,
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // const transaksiKonter = data.filter(
  //   (item) => item.kategori === "UANG KONTER",
  // );

  // const totalJual = transaksiKonter
  //   .filter((item) => !item.beli)
  //   .reduce((sum, item) => sum + item.total, 0);

  // const totalModal = transaksiKonter
  //   .filter((item) => item.beli)
  //   .reduce((sum, item) => sum + item.total, 0);

  // const jumlahTransaksi = transaksiKonter.filter((item) => !item.beli).length;

  // const laba = totalJual - totalModal;

  // rengking
  // const ranking = transaksiKonter
  //   .filter((item) => !item.beli)
  //   .sort((a, b) => b.total - a.total)
  //   .slice(0, 5);
  // const rankingProduk = Object.values(
  //   transaksiKonter
  //     .filter((item) => item.kategori === "UANG KONTER" && !item.beli)
  //     .reduce<
  //       Record<
  //         string,
  //         {
  //           id: string;
  //           nama: string;
  //           jumlah: number;
  //           total: number;
  //         }
  //       >
  //     >((acc, item) => {
  //       if (!acc[item.nama]) {
  //         acc[item.nama] = {
  //           id: item.id,
  //           nama: item.nama,
  //           jumlah: 0,
  //           total: 0,
  //         };
  //       }

  //       acc[item.nama].jumlah += item.jumlah;
  //       acc[item.nama].total += item.total;

  //       return acc;
  //     }, {}),
  // ).sort((a, b) => b.jumlah - a.jumlah);

  // =======================
  const transaksiKonter = transaksi.filter(
    (item) => item.kategori === "UANG KONTER",
  );

  const totalJual = transaksiKonter
    .filter((item) => !item.beli)
    .reduce((sum, item) => sum + item.total, 0);

  const totalModal = transaksiKonter
    .filter((item) => item.beli)
    .reduce((sum, item) => sum + item.total, 0);

  const jumlahTransaksi = transaksiKonter.filter((item) => !item.beli).length;

  const laba = totalJual - totalModal;

  return (
    <>
      <div
        // onClick={() => setShowDetail(!showDetail)}
        className="rounded-2xl bg-white p-4 shadow"
      >
        <h1 className="text-lg font-bold">Konter</h1>
        <div>Transaksi : {jumlahTransaksi}</div>
        <div>Modal : Rp {totalModal.toLocaleString("id-ID")}</div>
        <div>Jual : Rp {totalJual.toLocaleString("id-ID")}</div>
        <div>Laba : Rp {laba.toLocaleString("id-ID")}</div>
      </div>

      {/* {
      showDetail && (
        <div className="mt-4 rounded bg-gray-100 p-4">
          <h2 className="mb-2 text-sm font-bold">Detail Transaksi</h2>
          <ul>
            {rankingProduk.map((item) => (
              <li key={item.id} className="text-xs">
                {item.nama} - {item.jumlah} x Rp{" "}
                {item.harga.toLocaleString("id-ID")} = Rp{" "}
                {item.total.toLocaleString("id-ID")}
              </li>
            ))
            }
          </ul>
        </div>
      )} */}
    </>
  );
}
