import styled from "styled-components";

export const ProductsMainStyled = styled.div`
  flex-grow: 1;

  .products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
    gap: ${({theme}) => theme.spacing.xl};
  }

  .product-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: ${({theme}) => theme.spacing.sm};
    border-radius: ${({theme}) => theme.radius.md};
    padding: ${({theme}) => theme.spacing.md};
    background: ${({theme}) => theme.gradients.primary};
    box-shadow: ${({theme}) => theme.shadows.container};
    color: ${({theme}) => theme.colors.text.primary};
  }

  .image-container img:hover {
    scale: 1.2;
    transition: scale 0.3s ease;
  }

  .product-name {
    text-align: center;
    margin-bottom: ${({theme}) => theme.spacing.md};
    font-family: "Poppins", sans-serif;
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }

  .brand {
    font-style: italic;
    margin-top: ${({theme}) => theme.spacing.md};
  }

  .price {
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }

  .product-description {
    text-align: center;
    margin-block: ${({theme}) => theme.spacing.sm};
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
    gap: ${({theme}) => theme.spacing.sm};
    border-radius: ${({theme}) => theme.radius.sm};
  }

  .product-quantities button {
    display: grid;
    place-content: center;
    font-size: ${({theme}) => theme.tipography.sm};
    padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.md};
    background: ${({theme}) => theme.gradients.glow};
    border: 1px solid ${({theme}) => theme.colors.border.accent};
    color: ${({theme}) => theme.colors.text.dark};
  }

  .product-quantities input {
    width: ${({theme}) => theme.spacing.xl};
    border: none;
    outline: none;
    text-align: center;
    background: transparent;
    color: ${({theme}) => theme.colors.text.primary};
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }

  .increment-quantity,
  .decrement-quantity {
    font-weight: ${({theme}) => theme.fontWeights.bold};
    font-size: ${({theme}) => theme.tipography.md};
    border-radius: ${({theme}) => theme.radius.md};
    transition:
      box-shadow 0.3s ease,
      cursor 0.3s ease;
  }

  .increment-quantity:hover,
  .decrement-quantity:hover {
    box-shadow: ${({theme}) => theme.shadows.md}, ${({theme}) => theme.shadows.glow};
    cursor: pointer;
  }

  .add-cart-btn {
    padding: ${({theme}) => theme.spacing.sm};
    background: ${({theme}) => theme.gradients.glow};
    border-radius: ${({theme}) => theme.radius.sm};
    display: grid;
    place-content: center;
    transition:
      scale 0.3s ease,
      box-shadow 0.3s ease;
  }

  .cart-icon {
    font-size: ${({theme}) => theme.tipography.md};
    color: ${({theme}) => theme.colors.text.dark};
  }

  .add-cart-btn:hover {
    scale: 1.1;
    box-shadow: ${({theme}) => theme.shadows.glow};
  }
`;
