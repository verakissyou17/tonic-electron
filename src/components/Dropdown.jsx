import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DropdownStyled } from "../styles/Dropdown.styled";
import { useProducts } from "../context/useProducts.js";
import { useCart } from "../context/useCart.js";

function Dropdown({ isDropDownShown, showDropdown }) {
  const { products } = useProducts();
  const { cart, deleteFromCart } = useCart();

  const totalCart = cart.reduce((sum, cartItem) => {
    const matchingProduct = products.find(
      (product) => product.id === cartItem.productId,
    );

    if (!matchingProduct) return sum;

    const result = sum + (matchingProduct.price / 100) * cartItem.quantity;

    return result;
  }, 0);

  return (
    <DropdownStyled style={{ display: isDropDownShown ? "block" : "none" }}>
      <div className="intro">
        <h3 className="dropdown-title">Cos</h3>
        <FontAwesomeIcon icon={faClose} onClick={showDropdown} />
      </div>

      {cart.length > 0 ? (
        <div>
          <div className="head">
            <p>Denumire produs</p>
            <p>Total</p>
          </div>
          {cart.map((cartItem, index) => {
            const matchingProduct = products.find(
              (product) => product.id === cartItem.productId,
            );
            const isLast = index === cart.length - 1;

            if (!matchingProduct) return null;

            return (
              <div
                key={index}
                className="dropdown-container"
                style={{
                  borderBottom: isLast ? "none" : "1px solid #cccccc86",
                }}
              >
                <div className="img-container">
                  <img
                    className="dropdown-img"
                    src={matchingProduct.image}
                    alt={matchingProduct.name}
                  />
                </div>
                <div className="product-details">
                  <h4>{matchingProduct.name}</h4>
                  <div className="price-details">
                    <span>
                      {cartItem.quantity} x{" "}
                      {Math.round(matchingProduct.price / 100).toFixed(2)}{" "}
                      lei{" "}
                    </span>
                    <button
                      className="delete-btn"
                      onClick={() => deleteFromCart(matchingProduct.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
                <div className="total-container">
                  {Math.round(
                    (matchingProduct.price / 100) * cartItem.quantity,
                  ).toFixed(2)}{" "}
                  lei
                </div>
              </div>
            );
          })}
          <div className="cart-total">
            <span>Total:</span>
            <span>{totalCart.toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center", padding: "1rem" }}>Cosul este gol</p>
      )}
    </DropdownStyled>
  );
}

export default Dropdown;
