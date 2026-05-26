import { StyledOrderItem } from "../styles/OrderItem.styled";

function OrderItem({ order }) {
  const { id, createdAt, customer, total } = order;
  return (
    <StyledOrderItem>
      <span>#{id}</span>
      <span>{new Date(createdAt).toLocaleDateString("ro-RO")}</span>
      <span>{customer.name}</span>
      <span>{total.toFixed(2)} lei</span>
    </StyledOrderItem>
  );
}

export default OrderItem;
