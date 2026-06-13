import { api } from "../../../lib/axios";

// import type { Summary, Transaction } from "../types/dashboard.types";

// export const dashboardApi = {
//   getSummary: async (): Promise<Summary> => {
//     const { data } = await api.get("/dashboard/summary");
//     return data;
//   },

//   getRecentTransactions: async (): Promise<Transaction[]> => {
//     const { data } = await api.get("/dashboard/transactions");
//     return data;
//   },
// };

// ============
// import axios from "../../axios";

export const getDashboardSummary = async () => {
  const { data } = await api.get("/dashboard-summary");
  return data;
};

export const getLatestTransactions = async () => {
  const { data } = await api.get("/transactions");
  return data;
};
