import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <div>
        <h1>Wrapped in Auth Layout</h1>
      </div>
      <Outlet />
    </div>
  );
}
