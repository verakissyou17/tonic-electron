import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";
import { CartStyled } from "../styles/cart/Cart.styled.jsx";
import CartRow from "../components/cart/CartRow.jsx";
import CartFooter from "../components/cart/CartFooter.jsx";

function Cart() {
  const { cart, deleteFromCart, setCart, matchingItems, totalCart } = useCart();

  if (cart.length === 0) {
    return (
      <h2 style={{ flex: 1,  textAlign: "center", padding: "var(--space-md)" }}>Cosul este gol</h2>
    );
  }

  return (
    <CartStyled>
      {cart.length > 0 && (
        <div className="cart-products">
          <div className="head">
            <h2 className="cart-title">Cos: </h2>
            <Link to={"/checkout"} className="order-link">
              Procesare Comanda
            </Link>
          </div>
          {matchingItems.map((item, index) => (
            <CartRow
              key={item.productId}
              item={item}
              isLast={index === matchingItems.length - 1}
              deleteFromCart={deleteFromCart}
              setCart={setCart}
              cart={cart}
            />
          ))}
          <CartFooter totalCart={totalCart} />
        </div>
      )}
    </CartStyled>
  );
}

export default Cart;
