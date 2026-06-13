import { useCart } from "../hooks/useCart.js";
import { CheckoutStyled } from "../styles/checkout/Checkout.styled.jsx";
import FormData from "../components/checkout/FormData.jsx";
import CheckoutDetails from "../components/checkout/CheckoutDetails.jsx";

function Checkout() {
  const { cart} = useCart(); 

  if (cart.length === 0) {
    return (
      <p
        style={{ flex: 1, textAlign: "center", marginTop: "var(--space-3xl)" }}
      >
        Cosul este gol.
      </p>
    );
  }

  return (
    <CheckoutStyled>
      <CheckoutDetails />
      <FormData />
    </CheckoutStyled>
  );
}

export default Checkout;
