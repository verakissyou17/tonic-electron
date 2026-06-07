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
    ${(props) => props.theme.colors.shadow.whiteTransparent},
    ${(props) => props.theme.colors.shadow.greenTransparent}
  );
  backdrop-filter: blur(6px);
  border: 1px solid ${(props) => props.theme.colors.neutral.gray.light};
  border-radius: 0.5rem;
  padding: 0.5rem;
  z-index: 2;
  height: calc(100vh - clamp(1.5rem, 0.12rem + 3.756vw, 3.5rem) - 3.5rem);
  overflow-y: auto;

  @media screen and (min-width: 48rem) {
    left: 70%;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.gradients.navy};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.cyan.bright};
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.blackText};
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
    background: ${(props) => props.theme.gradients.navy};
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
  border-bottom: ${(props) => (props.$isLast ? "none" : `1px solid ${props.theme.colors.neutral.gray.light}`)};

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
    background: ${(props) => props.theme.gradients.navy};
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
      background: ${(props) => props.theme.gradients.navy};
      border-radius: 0.5rem;
      color: white;
      padding: 0.5rem 1rem;

      &:focus-visible {
        outline: 2px solid ${(props) => props.theme.colors.navy.dark};
        outline-offset: 4px;
        border-radius: 4px;
      }
    }

    p {
      text-decoration: underline;
    }
  }
`;
