import { CartFooterStyled } from "../styles/Cart.styled";

function CartFooter({ totalCart }) {
  return (
    <CartFooterStyled>
      <p>Total:</p>
      <span>{totalCart.toFixed(2)}</span>
    </CartFooterStyled>
  );
}

export default CartFooter;
