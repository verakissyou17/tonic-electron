import { useOrders } from "../hooks/useOrders.js";
import OrderItem from "../components/orders/OrderItem.jsx";
import { OrdersStyled } from "../styles/orders/Orders.styled.jsx";

function Orders() {
  const { orders } = useOrders();

  if (!orders || orders.length === 0) {
    return <h1 style={{ textAlign: "center", flex: 1, marginTop: "var(--space-3xl)" }}>Nu ai nicio comanda.</h1>;
  }

  return (
    <OrdersStyled>
      <h2 className="title">Comenzi procesate</h2>
      <div className="order-header">
        <span>Nr.com.</span>
        <span>Data</span>
        <span>Client</span>
        <span>Total</span>
      </div>

      {orders.map((order) => {
        return <OrderItem key={order.id} order={order} />;
      })}
    </OrdersStyled>
  );
}

export default Orders;
