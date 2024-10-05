import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import ProductSingleCard from './pages/ProductSingleCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="ProductSingleCard" element={<ProductSingleCard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
