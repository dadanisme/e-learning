import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
