import styled from "styled-components";

export const StyledNavbar = styled.div`
  .hamburger {
    display: block;
    border: none;
    outline: none;
    font-size: 24px;
    background-color: transparent;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
    opacity: ${(props) => (props.$isVisible ? 0 : 1)};
    visibility: ${(props) => (props.$isVisible ? "hidden" : "visible")};
    pointer-events: ${(props) => (props.$isVisible ? "none" : "auto")};
    transition:
      opacity 0.3s,
      visibility 0.3s;

    .fa-bars {
      color: black;
    }
  }

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 30%;
    padding: 1rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: linear-gradient(135deg, #0b1320, #1c2a3a);
    transform: ${(props) =>
      props.$isVisible ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.5s ease-in-out;
    pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};

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

        &:focus-visible {
          outline: 2px solid rgb(7, 207, 238);
          outline-offset: 4px;
          border-radius: 4px;
        }
      }
    }
  }
`;
