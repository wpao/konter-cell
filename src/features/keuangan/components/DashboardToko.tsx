// import { useQuery } from "@tanstack/react-query";
// import { getKeuangan } from "../services/keuangan.service";

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

export default function DashboardToko({ transaksi }: Props) {
  // const { data = [], isLoading } = useQuery({
  //   queryKey: ["transaksi"],
  //   queryFn: getKeuangan,
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // filter berdasarkan range tanggal
  // const transaksiToko = data.filter((item) => {
  //   const itemDate = new Date(item.createdAt);
  //   return (
  //     itemDate >= new Date(dateRange.startDate) &&
  //     itemDate <= new Date(dateRange.endDate)
  //   );
  // });

  // const jumlahTransaksiToko = transaksi
  //   .filter((item) => item.kategori === "UANG TOKO")
  //   .reduce((sum, item) => sum + item.jumlah, 0);

  // const transaksiToko = data.filter((item) => item.kategori === "UANG TOKO");

  // const totalJual = transaksiToko
  //   .filter((item) => !item.beli)
  //   .reduce((sum, item) => sum + item.total, 0);

  // const totalModal = transaksiToko
  //   .filter((item) => item.beli)
  //   .reduce((sum, item) => sum + item.total, 0);

  // const jumlahTransaksi = transaksiToko.filter((item) => !item.beli).length;

  // const laba = totalJual - totalModal;

  // const stokMasuk = transaksiToko
  //   .filter((item) => item.beli)
  //   .reduce((sum, item) => sum + item.jumlah, 0);

  // const stokKeluar = transaksiToko
  //   .filter((item) => !item.beli)
  //   .reduce((sum, item) => sum + item.jumlah, 0);

  // const stok = stokMasuk - stokKeluar;

  // =========================================================

  const transaksiToko = transaksi.filter(
    (item) => item.kategori === "UANG TOKO",
  );

  const totalJual = transaksiToko
    .filter((item) => !item.beli)
    .reduce((sum, item) => sum + item.total, 0);

  const totalModal = transaksiToko
    .filter((item) => item.beli)
    .reduce((sum, item) => sum + item.total, 0);

  const jumlahTransaksiToko = transaksiToko.filter((item) => !item.beli).length;
  const laba = totalJual - totalModal;

  return (
    <div className="rounded-2xl bg-white p-4 shadow">
      <h1 className="text-lg font-bold">Toko</h1>

      {/* <div>Transaksi : {jumlahTransaksi}</div> */}
      <div>Transaksi : {jumlahTransaksiToko}</div>
      <div>Modal : Rp {totalModal.toLocaleString("id-ID")}</div>
      <div>Jual : Rp {totalJual.toLocaleString("id-ID")}</div>
      <div>Laba : Rp {laba.toLocaleString("id-ID")}</div>
      {/* <div>Stok : {stok} pcs</div> */}
    </div>
  );
}
