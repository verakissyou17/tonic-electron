import styled from "styled-components";

export const HomeMainStyled = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  /* padding: 1em;
  width: 100%;
  max-width: 1400px;
  margin: 1em auto; */

  .product-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    padding: 1em;
    background: white;
    box-shadow:
      2px 2px 5px rgba(59, 59, 59, 0.25),
      -2px -2px 5px rgba(59, 59, 59, 0.25);
  }

  .image-container img:hover {
    scale: 1.2;
  }

  .product-name {
    text-align: center;
    margin-bottom: 1rem;
  }

  .brand {
    font-style: italic;
    margin-top: 1rem;
  }

  .price {
    font-weight: bold;
  }

  .product-description {
    text-align: center;
    margin-block: 0.5em;
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
    gap: 0.5rem;
    border-radius: 0.25rem;
  }

  .product-quantities button {
    display: grid;
    place-content: center;
    font-size: 1.2rem;
    padding: 0.5em 1em;
    background-color: white;
    border: 1px solid rgba(7, 207, 238, 0.3);
  }

  .product-quantities input {
    width: 2rem;
    border: none;
    outline: none;
    text-align: center;
  }

  .increment-quantity,
  .decrement-quantity {
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 0.5rem;
  }

  .increment-quantity:hover,
  .decrement-quantity:hover {
    box-shadow:
      2px 2px 2px rgba(0, 0, 0, 0.3),
      -2px -2px 2px rgba(112, 232, 250, 0.5);
    cursor: pointer;
  }

  .add-cart-btn {
    padding: 0.25em 0.75em;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 0.25rem;
    display: grid;
    place-content: center;
  }

  .cart-icon {
    font-size: 2rem;
    color: white;
  }

  .add-cart-btn:hover {
    scale: 1.1;
    box-shadow:
      -2px -2px 2px rgba(0, 0, 0, 0.3),
      2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`;
