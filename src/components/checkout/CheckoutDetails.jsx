import { useCart } from "../../hooks/useCart";

function CheckoutDetails() {
  const { totalQuantity, totalCart } = useCart();
  return (
    <section>
      <h2>Sumar comanda: </h2>
      <div className="checkout-details">
        <p>
          Produse: <span>{totalQuantity}</span>
        </p>
        <p>
          Subtotal: <span>{totalCart.toFixed(2)} lei</span>
        </p>
      </div>
    </section>
  );
}

export default CheckoutDetails;
