import styled from "styled-components";

export const CartRowStyled = styled.div`
  display: flex;
  gap: var(--space-lg);
  flex-direction: column;
  padding-block: var(--space-md);
  border-bottom: ${(props) => (props.$isLast ? "none" : `1px solid var(--cl-border)`)};

  @media (min-width: 48rem) {
    flex-direction: row;
    gap: var(--space-xl);
  }

  p {
    margin-bottom: var(--space-sm);
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-md);
    flex: 1;
    width: 100%;
  }

  .product-details {
    display: flex;
    align-items: center;
    gap: var(--space-md);

    .product-image {
      width: var(--space-3xl);
      height: var(--space-3xl);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    h3 {
      font-size: var(--fs-sm);
    }
  }

  .price-container {
    text-align: right;
    p {
      margin-bottom: var(--space-xs);
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: var(--space-sm);
    border: 1px solid var(--cl-accent);
    border-radius: var(--radius-md);
    min-width: var(--space-3xl);
    height: var(--space-xxl);

    .icon {
      cursor: pointer;
      padding: var(--space-xs);
    }

    input {
      text-align: center;
      background: inherit;
      color: inherit;
      width: var(--space-xxl);
      font-size: var(--space-md);
    }
  }

  .subtotal-container {
    text-align: center;
    p {
      margin-bottom: var(--space-xs);
    }
  }

  .trash-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: var(--fs-md);
  }
`;
