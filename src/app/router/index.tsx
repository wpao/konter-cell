import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import ProductPage from "../../features/product/pages/ProductPage";
import CashierPage from "../../features/cashier/pages/CashierPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "cashier",
        element: <CashierPage />,
      },
    ],
  },
]);
