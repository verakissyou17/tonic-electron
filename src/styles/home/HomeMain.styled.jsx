import styled from "styled-components";

export const HomeMainStyled = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
  gap: var(--space-xl);

  .product-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-sm);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    background: var(--cl-white);
    box-shadow: var(--shadow-container)
      
  }

  .image-container img:hover {
    scale: 1.2;
    transition: scale 0.3s ease;
  }

  .product-name {
    text-align: center;
    margin-bottom: var(--space-md);
    font-family: "Poppins", sans-serif;
    font-weight: var(--fw-bold);
  }

  .brand {
    font-style: italic;
    margin-top: var(--space-md);
  }

  .price {
    font-weight: var(--fw-bold);
  }

  .product-description {
    text-align: center;
    margin-block: var(--space-sm);
  }

  .product-add-to-cart-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  .product-quantities {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: var(--space-sm);
    border-radius: var(--radius-sm);
  }

  .product-quantities button {
    display: grid;
    place-content: center;
    font-size: var(--fs-sm);
    padding: var(--space-sm) var(--space-md);
    background-color: var(--cl-white);
    border: 1px solid var(--border-accent);
  }

  .product-quantities input {
    width: var(--space-xl);
    border: none;
    outline: none;
    text-align: center;
  }

  .increment-quantity,
  .decrement-quantity {
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
    border-radius: var(--radius-md);
    transition: box-shadow 0.3s ease, cursor 0.3s ease;
  }

  .increment-quantity:hover,
  .decrement-quantity:hover {
    box-shadow:
      var(--shadow-md),
      var(--shadow-glow);
    cursor: pointer;
  }

  .add-cart-btn {
    padding: var(--space-sm);
    background: var(--gradient-primary);
    border-radius: var(--radius-sm);
    display: grid;
    place-content: center;
    transition: scale 0.3s ease, box-shadow 0.3s ease;
  }

  .cart-icon {
    font-size: var(--fs-lg);
    color: var(--cl-white);
  }

  .add-cart-btn:hover {
    scale: 1.1;
    box-shadow:
      var(--sh-md-rev),
      var(--shadow-md);
  }
`;
