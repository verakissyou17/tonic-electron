import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { HomeMainStyled } from "../styles/HomeMain.styled";

function HomeMain({
  products,
  quantity,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
  addToCart,
}) {
  return (
    <HomeMainStyled>
      {products.map((product) => {
        return (
          <section key={product.id} className="product-container">
            <h2 className="product-name">{product.name}</h2>
            <div className="image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <span className="brand">{product.brand}</span>
            <p className="price">
              {Math.round(product.price / 100).toFixed(2)} lei
            </p>
            <p className="product-description">{product.description}</p>
            <div className="product-add-to-cart-container">
              <div className="product-quantities">
                <button
                  className="decrement-quantity"
                  onClick={() => decreaseQuantity(Number(product.id))}
                >
                  -
                </button>
                <input
                  type="text"
                  name={product.name}
                  id={product.id}
                  value={quantity[product.id] ?? 1}
                  onChange={(e) => {
                    const val = e.target.value;
                    setQuantity((prev) => ({
                      ...prev,
                      [product.id]: val === "" ? "" : Number(val),
                    }));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const qty = quantity[product.id] || 0;
                      addToCart(product.id, qty);
                    }
                  }}
                />
                <button
                  className="increment-quantity"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>

              <button
                className="add-cart-btn"
                onClick={() => {
                  const qty = quantity[product.id] || 0;
                  addToCart(product.id, qty);
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
              </button>
            </div>
          </section>
        );
      })}
    </HomeMainStyled>
  );
}

export default HomeMain;
