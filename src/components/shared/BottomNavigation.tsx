import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  BarChart3,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Kasir",
    path: "/cashier",
    icon: ShoppingCart,
  },
  {
    label: "Produk",
    path: "/products",
    icon: Package,
  },
  {
    label: "Laporan",
    path: "/reports",
    icon: BarChart3,
  },
  {
    label: "Keuangan",
    path: "/finance",
    icon: Wallet,
  },
];

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-sm">
      <div className="grid grid-cols-5 h-16">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 text-xs transition ${
                  isActive ? "text-blue-600" : "text-slate-400"
                }`
              }
            >
              <Icon size={22} />
              <span>{menu.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
