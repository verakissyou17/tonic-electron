import styled from "styled-components";

export const StyledNavbar = styled.div`
  .hamburger {
    display: block;
    border: none;
    outline: none;
    font-size: var(--fs-md);
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
      color: var(--bd-dark);
    }
  }

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: clamp(12.5rem, 10.299rem + 9.39vw, 18.75rem);
    padding: var(--space-xl);
    z-index: var(--z-navbar);
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    background: var(--gradient-primary);
    transform: ${(props) =>
      props.$isVisible ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.5s ease-in-out;
    pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};

    .close-nav {
      background: transparent;
      color: var(--cl-white);
      font-weight: var(--fw-bold);
      margin-bottom: var(--space-md);
      align-self: flex-end;
      font-size: var(--fs-sm);

      &:hover {
        color: var(--cl-accent);
      }
    }

    ul li {
      margin-bottom: var(--space-lg);

      a {
        color: var(--cl-white);
        font-size: clamp(var(--fs-sm), 0.648rem + 1.502vw, var(--fs-md));
        font-weight: var(--fw-bold);

        &:focus-visible {
          outline: 2px solid var(--cl-accent);
          outline-offset: 4px;
          border-radius: var(--radius-sm);
        }

        &:hover {
          color: var(--cl-accent);
        }
      }
    }
  }
`;
