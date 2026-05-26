import { CartFooterStyled } from "../styles/Cart.styled";

function CartFooter({ totalCart }) {
  return (
    <CartFooterStyled>
      <p>Total:</p>
      <span>{totalCart.toFixed(2)} lei</span>
    </CartFooterStyled>
  );
}

export default CartFooter;
