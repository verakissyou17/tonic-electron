import styled from "styled-components";

export const DropdownStyled = styled.section`
  display: ${(props) => (props.$isDropDownShown ? "block" : "none")};
  position: absolute;
  top: clamp(var(--space-md), 0.12rem + 3.756vw, var(--space-3xl));
  right: 0;
  left: 0;
  transform: translateY(var(--space-xxxl));
  background: var(--cl-white);
  backdrop-filter: blur(6px);
  border: 1px solid var(--cl-border);
  border-radius: var(--radius-md);
  padding: var(--space-sm);
  z-index: var(--z-dropdown);
  height: calc(100vh - clamp(var(--space-lg), 0.12rem + 3.756vw, var(--space-3xl)) - var(--space-3xl));
  overflow-y: auto;

  @media screen and (min-width: 48rem) {
    left: 70%;
  }

  &::-webkit-scrollbar {
    width: var(--space-sm);
  }

  &::-webkit-scrollbar-track {
     background: var(--gradient-primary);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gr-glow);
    border-radius: var(--radius-sm);
    border: 1px solid var(--cl-secondary);
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md);
    gap: var(--space-md);
  }

  .head {
    font-weight: var(--fw-bold);
     background: var(--gradient-primary);
    border-radius: var(--radius-md);
    color: var(--cl-white);
  }
`;

export const DropdownRowStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md);
  gap: var(--space-md);
  max-height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  border-bottom: ${(props) => (props.$isLast ? "none" : `1px solid var(--cl-border)`)};

  .img-container {
    width: 4rem;
    height: 100%;
    border-radius: var(--radius-md);
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .product-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-sm);
  }
`;

export const DropdownFooterStyled = styled.div`
  margin-top: var(--space-md);

  .cart-total {
    font-weight: var(--fw-bold);
     background: var(--gradient-primary);
    border-radius: var(--radius-md);
    color: var(--cl-white);
  }

  .total-container {
    flex-basis: 4rem;
    font-weight: var(--fw-bold);
  }

  .cart-link-container {
    margin-top: var(--space-md);

    .cart-link {
      font-weight: var(--fw-bold);
      background: var(--gradient-primary);
      border-radius: var(--radius-md);
      color: var(--cl-white);
      padding: var(--space-sm) var(--space-md);

      &:focus-visible {
        outline: 2px solid black;
        outline-offset: 4px;
        border-radius: var(--radius-sm);
      }
    }

    p {
      text-decoration: underline;
    }
  }
`;
