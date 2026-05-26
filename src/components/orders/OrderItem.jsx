import { OrderItemStyled } from "../../styles/orders/OrderItem.styled";

function OrderItem({ order }) {
  const { id, createdAt, customer, total } = order;
  return (
    <OrderItemStyled>
      <span>#{id}</span>
      <span>{new Date(createdAt).toLocaleDateString("ro-RO")}</span>
      <span>{customer.name}</span>
      <span>{total.toFixed(2)} lei</span>
    </OrderItemStyled>
  );
}

export default OrderItem;
