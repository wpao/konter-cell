// export interface Summary {
//   totalProducts: number;
//   totalTransactions: number;
//   totalRevenue: number;
//   totalProfit: number;
// }

// export interface Transaction {
//   id: string;
//   productName: string;
//   amount: number;
//   profit: number;
//   date: string;
// }

// =========
export interface DashboardSummary {
  todaySales: number;
  todayProfit: number;
  monthlyRevenue: number;
  lowStock: number;
}

export interface QuickAction {
  id: number;
  title: string;
  icon: string;
}

export interface Transaction {
  id: string;
  date: string;
  total: number;
  paymentMethod: string;
}
