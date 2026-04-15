import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { HomeMainStyled } from "../styles/HomeMain.styled";

function HomeMain({
  products,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  cart,
  addToCart,
}) {
  console.log(cart);
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
                <span
                  className="decrement-quantity"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </span>
                <span>{quantity[product.id] || 0}</span>
                <span
                  className="increment-quantity"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </span>
              </div>

              <button
                className="add-cart-btn"
                onClick={() => addToCart(product.id, quantity[product.id] || 0)}
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
