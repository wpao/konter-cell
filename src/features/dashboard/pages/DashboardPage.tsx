import { BarChart3, Package, ShoppingCart, Wallet } from "lucide-react";

import { DashboardHeader } from "../components/DashboardHeader";
import { SummaryCard } from "../components/SummaryCard";
import { QuickAction } from "../components/QuickAction";
import { TransactionItem } from "../components/TransactionItem";
// import { BottomNavigation } from "../components/BottomNavigation";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 pb-24">
      <DashboardHeader />

      <div className="p-4 -mt-6">
        <div className="grid grid-cols-2 gap-4">
          <SummaryCard
            title="Penjualan Hari Ini"
            value="Rp 22.000"
            subtitle="1 transaksi"
            gradient="bg-gradient-to-r from-blue-600 to-blue-400"
          />

          <SummaryCard
            title="Laba Hari Ini"
            value="Rp 500"
            subtitle="Estimasi laba bersih"
            gradient="bg-gradient-to-r from-green-500 to-emerald-400"
          />

          <SummaryCard
            title="Omzet Bulan Ini"
            value="Rp 22.000"
            subtitle="1 transaksi"
            gradient="bg-gradient-to-r from-orange-500 to-amber-400"
          />

          <SummaryCard
            title="Stok Menipis"
            value="0"
            subtitle="Produk perlu restock"
            gradient="bg-gradient-to-r from-slate-500 to-slate-400"
          />
        </div>

        <div className="bg-white rounded-3xl mt-6 p-5">
          <h3 className="font-semibold mb-5">Aksi Cepat</h3>

          <div className="grid grid-cols-4">
            <QuickAction title="Kasir" icon={<ShoppingCart />} />

            <QuickAction title="Produk" icon={<Package />} />

            <QuickAction title="Laporan" icon={<BarChart3 />} />

            <QuickAction title="Keuangan" icon={<Wallet />} />
          </div>
        </div>

        <div className="bg-white rounded-3xl mt-6 p-5">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Transaksi Terbaru</h3>

            <button className="text-blue-600">Lihat Semua</button>
          </div>

          <TransactionItem
            invoice="INV260603202740"
            date="03 Jun 2026, 20:27"
            total={22000}
          />
        </div>
      </div>

      {/* <BottomNavigation /> */}
    </div>
  );
}
