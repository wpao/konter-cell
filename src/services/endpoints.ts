export const ENDPOINTS = {
  dashboard: {
    summary: '/dashboard/summary',
    stats: '/dashboard/stats',
  },
  cashier: {
    transactions: '/cashier/transactions',
    payment: '/cashier/payment',
  },
  product: {
    list: '/products',
    detail: (id: string) => `/products/${id}`,
    create: '/products',
    update: (id: string) => `/products/${id}`,
    delete: (id: string) => `/products/${id}`,
  },
  report: {
    sales: '/reports/sales',
    inventory: '/reports/inventory',
  },
  finance: {
    transactions: '/finance/transactions',
    balance: '/finance/balance',
  },
} as const
