import styled from "styled-components";

export const DropdownStyled = styled.section`
  display: ${(props) => (props.$isDropDownShown ? "block" : "none")};
  position: absolute;
  top: calc(clamp(1rem, 0.12rem + 3.756vw, 3.5rem) + 3rem);
  right: 0;
  left: clamp(0rem, -16.901rem + 72.113vw, 48rem);
  background: ${({ theme }) => theme.backgrounds.base};
  backdrop-filter: blur(6px);
  border: 1px solid ${({ theme }) => theme.colors.border.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.sm};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  height: calc(100dvh - (clamp(1rem, 0.12rem + 3.756vw, 3.5rem) + 3rem));
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing.sm};
  }

  &::-webkit-scrollbar-track {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gradients.glow};
    border-radius: ${({ theme }) => theme.radius.sm};
    border: 1px solid var(--cl-secondary);
  }

  .intro {
    padding: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .head {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.radius.md};
    color: ${({ theme }) => theme.colors.text.primary};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const DropdownRowStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
  max-height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  border-bottom: ${({ theme, $isLast }) =>
    $isLast ? "none" : `1px solid ${theme.colors.border.soft}`};

  .img-container {
    width: ${({ theme }) => theme.spacing.heroMedium};
    height: 100%;
    border-radius: ${({ theme }) => theme.radius.md};
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
    gap: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .delete-btn {
    background: transparent;
    margin-left: ${({ theme }) => theme.spacing.sm};
  }

  .total-container {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const DropdownFooterStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};

  .cart-total {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.radius.md};
    color: ${({ theme }) => theme.colors.text.primary};
    padding: ${({ theme }) => theme.spacing.md};
    justify-content: space-between;
  }

  .total-container {
    flex-basis: ${({ theme }) => theme.spacing.heroMedium};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  .cart-link-container {
    margin-top: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.md};
    flex-wrap: wrap;

    .cart-link {
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      background: ${({ theme }) => theme.gradients.primary};
      border-radius: ${({ theme }) => theme.radius.md};
      color: ${({ theme }) => theme.colors.text.primary};
      padding: ${({ theme }) => theme.spacing.sm};
      text-align: center;

      &:focus-visible {
        outline: 2px solid black;
        outline-offset: ${({ theme }) => theme.spacing.xs};
        border-radius: ${({ theme }) => theme.radius.sm};
      }
    }

    p {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;
