import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import ProductSingleCard from './pages/ProductSingleCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="product/:id" element={<ProductSingleCard />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
