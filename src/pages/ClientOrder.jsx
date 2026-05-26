import { useOrders } from "../context/useOrders";
import OrderItem from "../components/OrderItem";
import { ClientOrderStyled } from "../styles/ClientOrder.styled.jsx";

function ClientOrder() {
  const { orders } = useOrders();

  if (!orders || orders.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Nu ai nicio comanda.</h1>;
  }

  return (
    <ClientOrderStyled>
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
    </ClientOrderStyled>
  );
}

export default ClientOrder;
