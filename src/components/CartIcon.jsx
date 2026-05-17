import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/useCart.js";


function CartIcon({ showDropdown }) {
  const { cart } = useCart();

  const totalQuantity = (cart ?? []).reduce((sum, item) => {
    return sum + (Number(item.quantity) || 0);
  }, 0);

  return (
    <div className="cart-container" onClick={showDropdown}>
      <span className="cart-quantity">{totalQuantity}</span>
      <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
    </div>
  );
}

export default CartIcon;
