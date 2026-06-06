import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <div className="p-4 text-xl font-bold">Counter App</div>

        <nav className="space-y-2 p-4">
          <a href="/">Dashboard</a>
          <br />
          <a href="/products">Produk</a>
          <br />
          <a href="/cashier">Kasir</a>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-slate-50 p-6">
        <Outlet />
      </main>
    </div>
  );
}
