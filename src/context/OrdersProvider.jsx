import { useState, useEffect, useMemo } from "react";
import { OrdersContext } from "./OrdersContext";

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  function addOrder(newOrder) {
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
  }

  const value = useMemo(
    () => ({
      orders,
      addOrder,
    }),
    [orders],
  );

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
}
