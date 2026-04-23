import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DropdownStyled } from "../styles/Dropdown.styled";

function Dropdown({
  products,
  cart,
  deleteFromCart,
  isDropDownShown,
  showDropdown,
}) {
  const totalCart = cart.reduce((sum, cartItem) => {
    const product = products.find((p) => p.id === cartItem.productId);

    if (!product) return sum;

    return sum + (product.price / 100) * cartItem.quantity;
  }, 0);

  return (
    <DropdownStyled style={{ display: isDropDownShown ? "block" : "none" }}>
      <div className="intro">
        <h3 className="dropdown-title">Cos</h3>
        <FontAwesomeIcon icon={faClose} onClick={showDropdown} />
      </div>

      {cart.length > 0 ? (
        <>
          <div className="head">
            <p>Denumire produs</p>
            <p>Total</p>
          </div>
          {cart.map((cartItem, index) => {
            const matchingProduct = products.find(
              (product) => product.id === cartItem.productId,
            );

            if (!matchingProduct) return null;

            return (
              <div key={index} className="dropdown-container">
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
            <span>{totalCart.toFixed(2)} lei</span>
          </div>
        </>
      ) : (
        <p style={{textAlign: "center", padding: "1rem"}}>Cosul este gol</p>
      )}
    </DropdownStyled>
  );
}

export default Dropdown;
