import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <div>
        <h1>Main Page Layout</h1>
      </div>
      <Outlet />
    </div>
  );
}
