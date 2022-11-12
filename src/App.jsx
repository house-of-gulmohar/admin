import { BrowserRouter, Route, Routes } from "react-router-dom";
import { config } from "../app.config";
import AdminDashboard from "./app/pages/Admin/AdminDashboard/AdminDashboard";
import CategorysPage from "./app/pages/Admin/CategorysPage/CategorysPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/categorys" element={<CategorysPage />} />
      <Route path="*" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
