import styled from "styled-components";

export const CartRowStyled = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  padding-block: 1rem;
  border-bottom: ${(props) => (props.$isLast ? "none" : `1px solid ${props.theme.colors.neutral.gray.dark}`)};

  @media (min-width: 48rem) {
    flex-direction: row;
    gap: 2rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex: 1;
    width: 100%;
  }

  .product-details {
    display: flex;
    align-items: center;
    gap: 1rem;

    .product-image {
      width: 5rem;
      min-width: 5rem;
      height: 5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    h3 {
      font-size: 1rem;
    }
  }

  .price-container {
    text-align: right;
    p {
      margin-bottom: 0.2rem;
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.cyan.primary};
    border-radius: 0.5rem;
    min-width: 6.5rem;
    height: 2.5rem;

    .icon {
      cursor: pointer;
      padding: 0.25rem;
    }

    input {
      text-align: center;
      background: inherit;
      color: inherit;
      width: 2.5rem;
      font-size: 1rem;
    }
  }

  .subtotal-container {
    text-align: center;
    p {
      margin-bottom: 0.2rem;
    }
  }

  .trash-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.2rem;
  }
`;
