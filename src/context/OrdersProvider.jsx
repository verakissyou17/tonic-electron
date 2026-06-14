import { useMemo, useCallback } from "react";
import { OrdersContext } from "./OrdersContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useLocalStorage("orders", []);

const placeOrder = useCallback((newOrder) => {
  setOrders((prevOrders) => [newOrder, ...prevOrders]);
}, [setOrders]);

  const value = useMemo(
    () => ({
      orders,
      placeOrder,
    }),
    [orders, placeOrder]
  );

  return (
    <OrdersContext.Provider value={value}>
      {children}
    </OrdersContext.Provider>
  );
}
