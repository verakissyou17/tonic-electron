import styled from "styled-components";

export const StyledProductCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.gradients.primary};
  box-shadow: ${({ theme }) => theme.shadows.container};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: transform 0.3s ease;

  @media screen and (min-width: 48rem) {
    flex-direction: ${({ $path }) => ($path === "product" ? "row" : "column")};
  }

  .image-container {
    height: 12.5rem;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    img:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease;
    }
  }


  .product-details,
  .product-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};
  }

  .product-name {
    text-align: center;
    margin-block: ${({ theme }) => theme.spacing.sm};
    font-family: "Poppins", sans-serif;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  .brand {
    font-style: italic;
    margin-block: ${({ theme }) => theme.spacing.md};
  }

  .price {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  .product-description {
    text-align: center;
    -webkit-text-wrap: pretty;
    margin-block: ${({ theme }) => theme.spacing.sm};
  }

  .product-add-to-cart-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};
    margin-block: ${({ theme }) => theme.spacing.sm};
  }

  .product-quantities {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.radius.sm};
    flex: 1;
  }

  .product-quantities button {
    display: grid;
    place-content: center;
    font-size: ${({ theme }) => theme.tipography.sm};
    padding: ${({ theme }) => theme.spacing.sm}  ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.gradients.glow};
    border: 1px solid ${({ theme }) => theme.colors.border.accent};
    color: ${({ theme }) => theme.colors.text.dark};
  }

  .product-quantities input {
    width: ${({ theme }) => theme.spacing.xl};
    border: none;
    outline: none;
    text-align: center;
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  .increment-quantity,
  .decrement-quantity {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.tipography.md};
    border-radius: ${({ theme }) => theme.radius.md};
    transition:
      box-shadow 0.3s ease,
      cursor 0.3s ease;
  }

  .increment-quantity:hover,
  .decrement-quantity:hover {
    box-shadow:
      ${({ theme }) => theme.shadows.md}, ${({ theme }) => theme.shadows.glow};
    cursor: pointer;
  }

  .add-cart-btn {
    flex: 1;
    padding: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.gradients.glow};
    border-radius: ${({ theme }) => theme.radius.sm};
    display: grid;
    place-content: center;
    transition:
      scale 0.3s ease,
      box-shadow 0.3s ease;
  }

  .cart-icon {
    font-size: ${({ theme }) => theme.tipography.md};
    color: ${({ theme }) => theme.colors.text.dark};
  }

  .add-cart-btn:hover {
    scale: 1.1;
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;
