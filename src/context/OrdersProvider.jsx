import { useState, useEffect } from "react";
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

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
