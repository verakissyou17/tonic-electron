import { useContext } from "react";
import { OrdersContext } from "../context/OrdersContext";

export function useOrders() {
  return useContext(OrdersContext);
}
