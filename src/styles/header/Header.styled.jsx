import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  padding: clamp(var(--space-md), 0.648rem + 1.502vw, var(--space-xl));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  text-shadow: var(--text-shadow);

  .overlay {
    position: fixed;
    inset: 0;
    background: var(--overlay);
    z-index: var(--z-overlay);
    cursor: pointer;
  }

  .cart-container {
    position: relative;
    transform: translateY(1rem);

    .cart-icon {
      font-size: var(--fs-md);
      color: var(--bg-dark);
    }

    .cart-quantity {
      position: absolute;
      top: 0;
      left: 10%;
      width: var(--space-lg);
      height: var(--space-lg);
      transform: translateY(-100%);
      display: grid;
      place-content: center;
      color: var( --cl-text-primary);
      font-weight: var(--fw-semibold);
      background: var( --gr-glow);
      border-radius: var(--round);
      border: 2px solid var(--cl-accent);
      transition: scale 0.3s ease, background 0.3s ease;
    }

    .cart-quantity:hover {
      scale: 1.1;
      background: var(--gr-glow-hover);
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  .logo {
    height: clamp(var(--space-lg), 0.972rem + 2.254vw, var(--space-hero));
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
    color: var(--cl-text-primary);
    font-size: clamp(var(--space-lg), 0.972rem + 2.254vw, var(--space-hero));
    line-height: 1;
  }
`;
