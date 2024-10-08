import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ProductSingleCard from "./pages/ProductSingleCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/CartContext";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:id" element={<ProductSingleCard />} />
        <Route path="pages/Cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
