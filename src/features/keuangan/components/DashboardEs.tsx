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

export default function DashboardEs({ transaksi }: Props) {
  const transaksiEs = transaksi.filter((item) => item.kategori === "UANG ES");

  const totalJual = transaksiEs
    .filter((item) => !item.beli)
    .reduce((sum, item) => sum + item.total, 0);

  const totalModal = transaksiEs
    .filter((item) => item.beli)
    .reduce((sum, item) => sum + item.total, 0);

  const jumlahTransaksi = transaksiEs.filter((item) => !item.beli).length;

  const laba = totalJual - totalModal;

  const stokMasuk = transaksiEs
    .filter((item) => item.beli)
    .reduce((sum, item) => sum + item.jumlah, 0);

  const stokKeluar = transaksiEs
    .filter((item) => !item.beli)
    .reduce((sum, item) => sum + item.jumlah, 0);

  const stok = stokMasuk - stokKeluar;

  return (
    <div className="rounded-2xl bg-white p-4 shadow">
      <h1 className="text-lg font-bold">ES</h1>

      <div>Transaksi : {jumlahTransaksi}</div>
      {/* <div>Transaksi : {jumlahTransaksi}</div> */}
      <div>Modal : Rp {totalModal.toLocaleString("id-ID")}</div>
      <div>Jual : Rp {totalJual.toLocaleString("id-ID")}</div>
      <div>Laba : Rp {laba.toLocaleString("id-ID")}</div>
      <div>Stok : {stok} pcs</div>
    </div>
  );
}
