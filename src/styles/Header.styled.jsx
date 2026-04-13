import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  background-color: #060606;
  padding: clamp(1.5rem, 1.148rem + 1.502vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-visible {
    border: none;
    outline: none;
    font-size: 24px;
    background-color: transparent;
  }

  .hamburger {
    color: rgb(7, 207, 238);
  }

  .hidden {
    display: none;
  }

  .nav-shown {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    height: 100vh;
    background-color: #292828;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 2rem;

    .close-nav {
      background-color: transparent;
      color: rgb(7, 207, 238);
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
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  .logo {
    height: clamp(1.5rem, 0.268rem + 5.258vw, 5rem);
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
    font-size: clamp(1.5rem, 0.268rem + 5.258vw, 5rem);
    line-height: 1;
  }
`;


