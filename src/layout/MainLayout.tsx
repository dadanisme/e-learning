import { Outlet } from "react-router-dom";
import AuthLayout from "./AuthLayout";

export default function MainLayout() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
