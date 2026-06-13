import { useState } from "react";
import KeuanganForm from "./components/KeuanganForm";
import KeuanganList from "./components/KeuanganList";
import DashboardSummary from "./components/DashboardSummary";
import DashboardEs from "./components/DashboardEs";
import DashboardToko from "./components/DashboardToko";
import DashboardKonter from "./components/DashboardKonter";

export default function KeuanganPage() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-100">
      <div className="container mx-auto flex justify-around p-6">
        <h1 className="mb-6 text-3xl font-bold">Keuangan</h1>
        <button
          onClick={() => setOpenForm(true)}
          className="right-6 bottom-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-3xl text-white shadow-lg transition hover:bg-indigo-700"
        >
          +
        </button>
      </div>

      <div className="container mx-auto">
        <DashboardSummary />
      </div>
      <div className="container mx-auto mt-2 flex gap-4">
        <DashboardEs />
        <DashboardToko />
        <DashboardKonter />
      </div>

      <div className="container mx-auto">
        <KeuanganList />
      </div>

      {openForm && <KeuanganForm onClose={() => setOpenForm(false)} />}
    </div>
  );
}
