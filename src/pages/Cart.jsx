import { Link } from "react-router-dom";
import { useCart } from "../context/useCart.js";
import { CartStyled } from "../styles/Cart.styled.jsx";
import CartRow from "../components/CartRow.jsx";
import CartFooter from "../components/CartFooter.jsx";

function Cart() {
  const { cart, deleteFromCart, setCart, matchingItems, totalCart } = useCart();

  if (cart.length === 0) {
    return (
      <p style={{ textAlign: "center", padding: "1rem" }}>Cosul este gol</p>
    );
  }

  return (
    <CartStyled>
      <div className="cart-products">
        <div className="head">
          <h2 className="cart-title">Cos: </h2>
          <Link to={"/order"} className="order-link" >Procesare Comanda</Link>
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
    </CartStyled>
  );
}

export default Cart;
