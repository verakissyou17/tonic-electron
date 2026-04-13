import { HomeMainStyled } from "../styles/HomeMain.styled";

function HomeMain({ products, quantity, increaseQuantity, decreaseQuantity }) {
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
                <span className="decrement-quantity" onClick={decreaseQuantity}>
                  -
                </span>
                <span>{quantity}</span>
                <span className="increment-quantity" onClick={increaseQuantity}>
                  +
                </span>
              </div>
              <button className="add-cart-btn">
                <img
                  src="/images/shopping-cart.svg"
                  alt="shopping-cart"
                  className="cart-icon"
                />
              </button>
            </div>
          </section>
        );
      })}
    </HomeMainStyled>
  );
}

export default HomeMain;
