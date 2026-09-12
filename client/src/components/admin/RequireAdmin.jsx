import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export default function RequireAdmin() {
  const storeUser = useAuthStore((state) => state.user);
  const isInitialized = useAuthStore((state) => state.isInitialized);

  let user = storeUser;
  if (!user) {
    const rawUser = localStorage.getItem("user_profile_cache") || localStorage.getItem("user");
    if (rawUser) {
      try {
        user = JSON.parse(rawUser);
      } catch {
        user = null;
      }
    }
  }

  if (!user) {
    // Nếu chưa khởi tạo xong và không có cached user, đợi nhẹ
    if (!isInitialized) return null;
    return <Navigate to="/login" replace />;
  }

  // Chuẩn hoá role
  const role =
    user?.role ??
    user?.roles?.[0]?.id ??
    user?.roles?.[0]?.name;

  const isAdmin =
    Number(role) === 1 ||
    role === "admin" ||
    user?.roles?.some((r) => r.name === "admin" || Number(r.id) === 1);

  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
}