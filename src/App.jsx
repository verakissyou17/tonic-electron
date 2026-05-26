import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header.jsx";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/global/ScrollToTop.jsx";
import PageNotFound from "./pages/PageNotFound";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
