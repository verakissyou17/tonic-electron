import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import SearchBar from "./components/global/SearchBar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import FooterBottom from "./components/footer/FooterBottom.jsx";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails.jsx";
import ScrollToTop from "./components/global/ScrollToTop.jsx";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Header />
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/category/:category" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/details/:id" element={<OrderDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ScrollToTop />
      <FooterBottom />
    </>
  );
}

export default App;
