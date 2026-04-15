import styled from "styled-components";

export const HomeMainStyled = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1em;
  width: 100%;
  max-width: 1400px;
  margin: 1em auto;

  .product-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    padding: 1em;
    background-color: white;
    box-shadow:
      2px 2px 5px rgba(59, 59, 59, 0.25),
      -2px -2px 5px rgba(59, 59, 59, 0.25);
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
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }

  .product-quantities span {
    display: grid;
    place-content: center;
    font-size: 1.2rem;
    border-left: 1px solid #ccc;
    padding: 0.5em 1em;
  }

  .increment-quantity,
  .decrement-quantity {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .increment-quantity:hover,
  .decrement-quantity:hover {
    background-color: #07cfee;
    cursor: pointer;
  }

  .add-cart-btn {
    padding: 0.25em 0.75em;
    background-color: green;
    border-radius: 0.25rem;
    box-shadow: 3px 3px 2px #454545;
    display: grid;
    place-content: center;
  }

  .cart-icon {
    font-size: 2rem;
    color: white;
  }

  .add-cart-btn:hover,
  .image-container img:hover {
    scale: 1.1;
  }
`;
