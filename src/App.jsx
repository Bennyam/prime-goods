import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./layouts/HomePage.jsx";
import ProductsPage from "./layouts/ProductsPage.jsx";
import ProductDetailsPage from "./layouts/ProductDetailsPage.jsx";
import ContactPage from "./layouts/ContactPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
