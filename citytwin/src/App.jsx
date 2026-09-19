import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import DigitalMap from "./pages/DigitalMap";
import Reports from "./pages/Reports";
import AIInsights from "./pages/AIInsights";
import Simulation from "./pages/Simulation";
import History from "./pages/History";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="map" element={<DigitalMap />} />
        <Route path="reports" element={<Reports />} />
        <Route path="ai-insights" element={<AIInsights />} />
        <Route path="simulation" element={<Simulation />} />
        <Route path="history" element={<History />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;  
