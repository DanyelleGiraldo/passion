import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./shop/shop";
import CartPage from "./shop/cart/page";
import { CartProvider } from "./shop/cart/components/CartContext";
import { FilterProvider } from "./shop/components/context/FilterContext";
import "./App.css";

function App() {
  return (
    <FilterProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
    </CartProvider>
    </FilterProvider>
  );
}

export default App;