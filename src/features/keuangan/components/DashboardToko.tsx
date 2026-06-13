import { useQuery } from "@tanstack/react-query";
import { getKeuangan } from "../services/keuangan.service";

export default function DashboardToko() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["transaksi"],
    queryFn: getKeuangan,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const transaksiToko = data.filter((item) => item.kategori === "UANG TOKO");

  const totalJual = transaksiToko
    .filter((item) => !item.beli)
    .reduce((sum, item) => sum + item.total, 0);

  const totalModal = transaksiToko
    .filter((item) => item.beli)
    .reduce((sum, item) => sum + item.total, 0);

  const jumlahTransaksi = transaksiToko.filter((item) => !item.beli).length;

  const laba = totalJual - totalModal;

  // const stokMasuk = transaksiToko
  //   .filter((item) => item.beli)
  //   .reduce((sum, item) => sum + item.jumlah, 0);

  // const stokKeluar = transaksiToko
  //   .filter((item) => !item.beli)
  //   .reduce((sum, item) => sum + item.jumlah, 0);

  // const stok = stokMasuk - stokKeluar;

  return (
    <div className="rounded-2xl bg-white p-4 shadow">
      <h1 className="text-lg font-bold">Toko</h1>

      <div>Transaksi : {jumlahTransaksi}</div>
      <div>Modal : Rp {totalModal.toLocaleString("id-ID")}</div>
      <div>Jual : Rp {totalJual.toLocaleString("id-ID")}</div>
      <div>Laba : Rp {laba.toLocaleString("id-ID")}</div>
      {/* <div>Stok : {stok} pcs</div> */}
    </div>
  );
}

/*
12 * 5 = 60
3 * 8 = 24
60 - 24 = 36
*/
