import { useEffect, useState } from "react";
import {
  getDashboardSummary,
  getLatestTransactions,
} from "../api/dashboardApi";

export const useDashboard = () => {
  const [summary, setSummary] = useState<any>(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const summaryData = await getDashboardSummary();
      const transactionData = await getLatestTransactions();

      setSummary(summaryData);
      setTransactions(transactionData);
    };

    fetchData();
  }, []);

  return {
    summary,
    transactions,
  };
};
