import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./pages/Home";
import FooterBottom from "./components/footer/FooterBottom.jsx";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails.jsx";
import ScrollToTop from "./components/global/ScrollToTop.jsx";
import PageNotFound from "./pages/PageNotFound";


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
        <Route path="/details/:id" element={<OrderDetails />} />
      </Routes>
      <ScrollToTop />
      <FooterBottom />
    </>
  );
}

export default App;
