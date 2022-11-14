import { BrowserRouter, Route, Routes } from "react-router-dom";
import { config } from "../app.config";
import AdminDashboard from "./app/pages/Admin/AdminDashboard/AdminDashboard";
import BrandsPage from "./app/pages/Admin/Brand/BrandsPage/BrandsPage";
import CreateBrandPage from "./app/pages/Admin/Brand/CreateBrandPage/CreateBrandPage";
import CategorysPage from "./app/pages/Admin/CategorysPage/CategorysPage";
import CreateProduct from "./app/pages/Admin/ProductsPage/CreateProductPage.jsx/CreateProduct";
import ProductsPage from "./app/pages/Admin/ProductsPage/ProductsPage/ProductsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/categorys" element={<CategorysPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/create" element={<CreateProduct />} />
      <Route path="/brands" element={<BrandsPage />} />
      <Route path="/brands/create" element={<CreateBrandPage />} />
      <Route path="*" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
