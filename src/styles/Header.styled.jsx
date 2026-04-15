import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  background: linear-gradient(135deg, #0f172a, #1e293b);
  padding: clamp(1rem, 0.648rem + 1.502vw, 2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-shadow: 0 0 10px rgba(7, 207, 238, 0.4);

  .btn-visible {
    border: none;
    outline: none;
    font-size: 24px;
    background-color: transparent;
  }

  .hamburger {
    color: white;
  }

  .hidden {
    display: none;
  }

  .nav-shown {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 55%;
    padding: 1rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: linear-gradient(135deg, #0b1320, #1c2a3a);

    .close-nav {
      background-color: transparent;
      color: white;
      margin-bottom: 1rem;
      align-self: flex-end;
    }

    ul li {
      margin-bottom: 1.5rem;

      a {
        color: rgb(7, 207, 238);
        font-size: clamp(1rem, 0.648rem + 1.502vw, 2rem);
      }
    }
  }

  .cart-container {
    position: relative;

    .cart-icon {
      font-size: 1.5rem;
      color: white;
    }

    .cart-quantity {
      position: absolute;
      top: 0;
      left: 25%;
      width: 1.2rem;
      height: 1.2rem;
      transform: translateY(-95%);
      display: grid;
      place-content: center;
      color: white;
      background-color: green;
      border-radius: 50%;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  .logo {
    height: clamp(1rem, 0.296rem + 3.005vw, 3rem);
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
    color: rgb(7, 207, 238);
    font-size: clamp(1rem, 0.296rem + 3.005vw, 3rem);
    line-height: 1;
  }
`;
