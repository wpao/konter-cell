import { useEffect, useMemo, useState } from "react";
import { api } from "../../lib/axios";

import type { Konter } from "./types/konter";

import KonterList from "./components/KonterList";
import KonterGrafikList from "./components/KonterGrafikList";
import KonterForm from "./components/KonterForm";
import KonterEditModal from "./components/KonterEditModal";

const KonterPage = () => {
  const [data, setData] = useState<Konter[]>([]);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  const [selected, setSelected] = useState<Konter | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get<Konter[]>("/dataKonter");
        setData(res.data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    return data.filter((item) => {
      const date = new Date(item.createdAt);
      return date >= start && date <= end;
    });
  }, [data, startDate, endDate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  function fetchData(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="space-y-6 p-6">
      <KonterForm
        onSuccess={(newData) => {
          setData((prev) => [...prev, newData]);
        }}
      />

      <div className="flex gap-4">
        <div>
          <label>Mulai</label>

          <input
            type="date"
            className="rounded border p-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label>Sampai</label>

          <input
            type="date"
            className="rounded border p-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <KonterGrafikList data={filteredData} />

      <KonterList data={filteredData} onEdit={(item) => setSelected(item)} />
      <KonterEditModal
        item={selected}
        onClose={() => setSelected(null)}
        onSuccess={fetchData}
      />
    </div>
  );
};

export default KonterPage;
