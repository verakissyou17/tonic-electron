import styled from "styled-components";

export const DropdownStyled = styled.section`
  display: ${(props) => (props.$isDropDownShown ? "block" : "none")};
  position: absolute;
  top: clamp(1rem, 0.12rem + 3.756vw, 3.5rem);
  right: 0;
  left: 0;
  transform: translateY(3rem);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.95),
    rgba(240, 253, 244, 0.9)
  );
  backdrop-filter: blur(6px);
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  z-index: 2;
  height: calc(100vh - clamp(1.5rem, 0.12rem + 3.756vw, 3.5rem) - 3.5rem);
  overflow-y: auto;

  @media screen and (min-width: 48em) {
    left: 70%;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: linear-gradient(135deg, #0f172a, #1e293b);
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(4, 220, 253);
    border-radius: 0.5rem;
    border: 1px solid black;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
  }

  .head {
    font-weight: bold;
  }

  .head {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 0.5rem;
    color: white;
  }
`;

export const DropdownRowStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
  max-height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  border-bottom: ${(props) => (props.$isLast ? "none" : "1px solid #cccccc86")};

  .img-container {
    width: 4rem;
    height: 100%;
    border-radius: 0.5rem;
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
    gap: 0.5rem;
  }
`;

export const DropdownFooterStyled = styled.div`
  margin-top: 1rem;

  .cart-total {
    font-weight: bold;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 0.5rem;
    color: white;
  }

  .total-container {
    flex-basis: 4rem;
    font-weight: bold;
  }

  .cart-link-container {
    margin-top: 1rem;

    .cart-link {
      font-weight: bold;
      background: linear-gradient(135deg, #0f172a, #1e293b);
      border-radius: 0.5rem;
      color: white;
      padding: 0.5rem 1rem;

      &:focus-visible {
        outline: 2px solid #0f172a;
        outline-offset: 4px;
        border-radius: 4px;
      }
    }

    p {
      text-decoration: underline;
    }
  }
`;
