import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { DropdownRowStyled } from "../styles/Dropdown.styled";
import { formatMoney } from "../utils/formatMoney";

function DropdownRow({ item, isLast, deleteFromCart }) {
  return (
    <DropdownRowStyled $isLast={isLast}>
      <div className="img-container">
        <img
          className="dropdown-img"
          src={item.product.image}
          alt={item.product.name}
        />
      </div>
      <div className="product-details">
        <h4>{item.product.name}</h4>
        <div className="price-details">
          <span>
            {item.quantity} x {Math.round(item.product.price / 100).toFixed(2)}{" "}
            lei{" "}
          </span>
          <button
            className="delete-btn"
            onClick={() => deleteFromCart(item.product.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <div className="total-container">
        {formatMoney((item.product.price) * item.quantity)} lei
      </div>
    </DropdownRowStyled>
  );
}

export default DropdownRow;
