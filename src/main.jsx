import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { ProductsProvider } from "./context/ProductsProvider.jsx";
import { CartProvider } from "./context/CartProvider.jsx";
import { OrdersProvider } from "./context/OrdersProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ProductsProvider>
        <CartProvider>
          <OrdersProvider>
            <App />
          </OrdersProvider>
        </CartProvider>
      </ProductsProvider>
    </HashRouter>
  </StrictMode>,
);
