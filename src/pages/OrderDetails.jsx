import { useProducts } from "../context/useProducts.js";
import { useOrders } from "../context/useOrders.js";
import { useParams } from "react-router-dom";
import { formatMoney } from "../utils/formatMoney.js";
import { OrderDetailsStyled } from "../styles/details/OrderDetails.styled.jsx";

function OrderDetails() {
  const { products } = useProducts();
  const { orders } = useOrders();
  const { id } = useParams();

  const order = orders.find((order) => order.id === id);

  if (!order) {
    return <h1>Comanda nu a fost găsită.</h1>;
  }
  const { items, total } = order;

  if (products.length === 0) {
  return <h1>Se încarcă...</h1>;
}

 const matchingItems = items.map(item => {
  const product = products.find(
    product => product.id === item.productId
  );

  return {
    ...product,
    quantity: item.quantity,
  };
});

  return (
    <OrderDetailsStyled>
      <h2>Comanda <span>#{id}</span></h2>
      {matchingItems.map((item, index) => (
        <div key={index} className="details">
          <p>{item.name}</p>
          <span className="dots"></span>
          <p>Cantitate: {item.quantity}</p>
          <span className="dots"></span>
          <p>Pret: {formatMoney(item.price * item.quantity)} lei</p>
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
