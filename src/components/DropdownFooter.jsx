import { Link } from "react-router-dom";
import { DropdownFooterStyled } from "../styles/Dropdown.styled";

function DropdownFooter({showDropdown, totalCart, totalQuantity }) {
  return (
    <DropdownFooterStyled>
      <div className="cart-total row">
        <span>Total:</span>
        <span>{totalCart.toFixed(2)}</span>
      </div>
      <div className="cart-link-container row">
        <Link className="cart-link" to={"/cart"} onClick={showDropdown}>
          Vezi cart
        </Link>
        <p>Total: {totalQuantity} {totalQuantity > 1 ? "produse" : "produs"}</p>
      </div>
    </DropdownFooterStyled>
  );
}

export default DropdownFooter;
