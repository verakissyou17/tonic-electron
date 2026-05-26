import { useState, useEffect } from "react";
import { formatMoney } from "../../utils/formatMoney";
import { CartRowStyled } from "../../styles/cart/CartRow.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function CartRow({ item, deleteFromCart, isLast, setCart }) {
  const [newQuantity, setNewQuantity] = useState(item.quantity);

  useEffect(() => {
    setNewQuantity(item.quantity);
  }, [item.quantity]);

  const incrementQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item,
      ),
    );
  };

  return (
    <CartRowStyled $isLast={isLast}>
      <div className="row">
        <section className="product-details">
          <div className="product-image">
            <img src={item.product.image} alt={item.product.name} />
          </div>
          <h3>{item.product.name}</h3>
        </section>

        <div className="price-container">
          <p>Pret</p>
          <span>{formatMoney(item.product.price)} lei</span>
        </div>
      </div>

      <div className="row">
        <div className="input-container">
          <FontAwesomeIcon
            className="icon"
            icon={faMinus}
            onClick={() => {
              decrementQuantity(item.productId);
            }}
          />
          <label htmlFor={item.product.id} className="sr-only">
            Input:{" "}
          </label>
          <input
            type="text"
            name={item.product.name}
            id={item.product.id}
            value={newQuantity}
            onChange={(e) => {
              setNewQuantity(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const value = Number(newQuantity);

                if (!Number.isFinite(value) || value < 1) return;

                setCart((prev) =>
                  prev.map((cartItem) =>
                    cartItem.productId === item.productId
                      ? { ...cartItem, quantity: value }
                      : cartItem,
                  ),
                );
              }
            }}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faPlus}
            onClick={() => {
              incrementQuantity(item.productId);
            }}
          />
        </div>

        <div className="subtotal-container">
          <p>Subtotal</p>
          <span>{formatMoney(item.product.price * item.quantity)} lei</span>
        </div>

        <div className="trash-container">
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ color: "rgb(236, 8, 8)" }}
            onClick={() => deleteFromCart(item.product.id)}
          />
        </div>
      </div>
    </CartRowStyled>
  );
}

export default CartRow;
