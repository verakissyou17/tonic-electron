import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/useCart.js";
import { formatMoney } from "../../utils/formatMoney.js";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <section className="product-container">
      <h2 className="product-name">{product.name}</h2>
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <span className="brand">{product.brand}</span>
      <p className="price">{formatMoney(product.price)} lei</p>
      <p className="product-description">{product.description}</p>
      <div className="product-add-to-cart-container">
        <div className="product-quantities">
          <button className="decrement-quantity" onClick={decreaseQuantity}>
            -
          </button>
          <label htmlFor={product.id} className="sr-only">
            Cantitate:
          </label>
          <input
            type="text"
            name={product.name}
            id={product.id}
            value={quantity}
            onChange={(e) => {
              const value = Number(e.target.value);
              setQuantity(Number.isFinite(value) ? value : 1);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addToCart(product.id, Number(quantity));
              }
            }}
          />
          <button className="increment-quantity" onClick={increaseQuantity}>
            +
          </button>
        </div>

        <button
          aria-label="Adauga in cos"
          className="add-cart-btn"
          onClick={() => {
            addToCart(product.id, Number(quantity));
          }}
        >
          <FontAwesomeIcon
            aria-hidden="true"
            icon={faShoppingCart}
            className="cart-icon"
          />
        </button>
      </div>
    </section>
  );
}

export default ProductCard;
