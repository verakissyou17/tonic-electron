import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";
import ClientOrder from "./pages/ClientOrder";

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
        <Route path="/orders" element={<ClientOrder />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
