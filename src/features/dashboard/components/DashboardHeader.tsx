import { Settings } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white rounded">
      <div className="flex justify-between">
        <div>
          <p className="text-sm opacity-80">Selamat Datang di</p>

          <h1 className="text-3xl font-bold">ErindaCell</h1>

          <p className="text-sm mt-2">Rabu, 3 Juni 2026</p>
        </div>

        <button className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};
