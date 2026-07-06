// import { createBrowserRouter } from "react-router-dom";

// import MainLayout from "../layouts/MainLayout";

// import DashboardPage from "../../features/dashboard/pages/DashboardPage";
// import ProductPage from "../../features/product/pages/ProductPage";
// import CashierPage from "../../features/cashier/pages/CashierPage";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <DashboardPage />,
//       },
//       {
//         path: "products",
//         element: <ProductPage />,
//       },
//       {
//         path: "cashier",
//         element: <CashierPage />,
//       },
//     ],
//   },
// ]);

//======
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import CashierPage from "../../features/cashier/pages/CashierPage";
import ProductPage from "../../features/product/pages/ProductPage";
import KeuanganPage from "../../features/keuangan/keuanganPage";
import FormPelanggan from "../../features/cashier/components/FormPelanggan";
import KonterPage from "../../features/konter/KonterPage";

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
        path: "cashier",
        element: <CashierPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "reports",
        element: <div>Report Page</div>,
      },
      // {
      //   path: "finance",
      //   element: <div>Finance Page</div>,
      // },
      {
        path: "finance",
        element: <KeuanganPage />,
      },
      {
        path: "form-pelanggan",
        element: <FormPelanggan />,
      },
    ],
  },
  {
    path: "w",
    element: <KonterPage />,
  },
]);
