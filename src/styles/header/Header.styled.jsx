import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  padding: clamp(1rem, 0.648rem + 1.502vw, 2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-shadow: 0 0 10px rgba(7, 207, 238, 0.4);

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    cursor: pointer;
  }

  .cart-container {
    position: relative;
    transform: translateY(1rem);

    .cart-icon {
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.blackText};
    }

    .cart-quantity {
      position: absolute;
      top: 0;
      left: 10%;
      width: 1.5rem;
      height: 1.5rem;
      transform: translateY(-95%);
      display: grid;
      place-content: center;
      color: #fff;
      background: ${(props) => props.theme.gradients.navy};
      border-radius: 50%;
      border: 2px solid ${(props) => props.theme.colors.cyan.primary};
      transition: scale 0.3s ease, background 0.3s ease, color 0.3s ease, border 0.3s ease;
    }

    .cart-quantity:hover {
      scale: 1.2;
      background: ${(props) => props.theme.colors.cyan.primary};
      color: ${(props) => props.theme.colors.navy.dark};
      font-weight: 500;
      border: 1px solid;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .logo {
    height: clamp(1.5rem, 0.972rem + 2.254vw, 3rem);
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
    color: ${(props) => props.theme.colors.navy.dark};
    font-size: clamp(1.5rem, 0.972rem + 2.254vw, 3rem);
    line-height: 1;
  }
`;
