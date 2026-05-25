import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ProductsProvider } from "./context/ProductsProvider.jsx";
import { CartProvider } from "./context/CartProvider.jsx";
import { OrdersProvider } from "./context/OrdersProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <OrdersProvider>
            <App />
          </OrdersProvider>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </StrictMode>,
);
