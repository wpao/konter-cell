import { Outlet } from "react-router-dom";
import BottomNavigation from "../../components/shared/BottomNavigation";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <main className="pb-20">
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
}
