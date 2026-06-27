import { useMemo } from "react";
import { useProducts } from "../hooks/useProducts.js";
import { useOrders } from "../hooks/useOrders.js";
import { useParams } from "react-router-dom";
import { formatMoney } from "../utils/formatMoney.js";
import { OrderDetailsStyled } from "../styles/details/OrderDetails.styled.jsx";

function OrderDetails() {
  const { products } = useProducts();
  const { orders } = useOrders();
  const { id } = useParams();

  const order = orders.find((order) => order.id === id);

  const matchingOrders = useMemo(() => {
    if (!order) return [];

    return order.items.map((item) => {
      const product = products.find((product) => product.id === item.productId);
      return {
        ...product,
        quantity: item.quantity,
      };
    });
  }, [products, order]);

  if (orders.length === 0) {
    return (
      <h1
        style={{
          flex: 1,
          textAlign: "center",
          marginTop: "${({theme}) => theme.spacing.heroSmall}",
        }}
      >
        No orders
      </h1>
    );
  }

  if (!order) {
    return (
      <h1
        style={{
          flex: 1,
          textAlign: "center",
          marginTop: "${({theme}) => theme.spacing.heroSmall}",
        }}
      >
        Order not found
      </h1>
    );
  }

  const { total, customer, createdAt } = order;

  return (
    <OrderDetailsStyled>
      <div className="order-details--header row">
        <h2>
          Comanda <span>#{id}</span>
        </h2>
        <div className="client">
          <p>
            Data:{" "}
            <span>{new Date(createdAt).toLocaleDateString("ro-RO")}</span>{" "}
          </p>
          <p>
            Client:{" "}
            <span>
              {customer.fullName.surname} {customer.fullName.name}
            </span>
          </p>
        </div>
      </div>

      {matchingOrders.map((item, index) => (
        <div key={index} className="details">
          <p>{item.name}</p>
          <span className="dots"></span>
          <p>Cantitate: {item.quantity}</p>
          <span className="dots"></span>
          <p>Subtotal: {formatMoney(item.price * item.quantity)} lei</p>
        </div>
      ))}
      <div className="total">
        <p>Total: </p>
        <span>{total.toFixed(2)} lei</span>
      </div>
    </OrderDetailsStyled>
  );
}

export default OrderDetails;
