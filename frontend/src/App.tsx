import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Allocate from "./pages/Allocate";
import Obligations from "./pages/Obligations";
import AllocationSettings from "./pages/AllocationSettings";
import LivingExpenses from "./pages/LivingExpences";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/allocate" element={<Allocate />} />
      <Route path="/obligations" element={<Obligations />} />
      <Route path="/allocationsettings" element={<AllocationSettings />} />
      <Route path="/livingexpences" element={<LivingExpenses />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
