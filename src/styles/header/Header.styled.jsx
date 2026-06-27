import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  padding: clamp(1rem, 0.148rem + 1.502vw, 1.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.gradients.primary};
  text-shadow: ${({ theme }) => theme.shadows.text};

  .overlay {
    position: fixed;
    inset: 0;
    background: ${({ theme }) => theme.backgrounds.overlay};
    z-index: ${({ theme }) => theme.zIndex.overlay};
    cursor: pointer;
  }

  .cart-container {
    position: relative;
    align-self: flex-end;

    .cart-icon {
      font-size: clamp(1.5rem, 1.148rem + 1.502vw, 2.5rem);
      color: ${({ theme }) => theme.colors.text.primary};
    }

    .cart-quantity {
      position: absolute;
      top: 50%;
      left: 50%;
      width: ${({ theme }) => theme.spacing.lg};
      height: ${({ theme }) => theme.spacing.lg};
      transform: translateY(-100%);
      display: grid;
      place-content: center;
      color:  ${({ theme }) => theme.colors.text.primary};
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
      background: ${({ theme }) => theme.gradients.primary};
      border-radius: ${({ theme }) => theme.radius.round};
      border: 2px solid ${({ theme }) => theme.colors.border.accent};
      transition:
        scale 0.3s ease,
        background 0.3s ease;
    }

    .cart-quantity:hover {
      background: ${({ theme }) => theme.gradients.primary};
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  .logo {
    height: clamp(
      ${({ theme }) => theme.spacing.lg},
      0.972rem + 2.254vw,
      ${({ theme }) => theme.spacing.heroBig}
    );
    animation: logo-spin infinite 10s linear;
  }

  .logo.react:hover {
    animation-duration: 1s;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  h1 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text.primary};
   font-size: clamp(1.2rem, 0.39rem + 3.455vw, 3.5rem);
    line-height: 1;
  }
`;
