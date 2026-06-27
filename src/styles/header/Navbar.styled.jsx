import styled from "styled-components";

export const StyledNavbar = styled.div`
  .hamburger {
    display: block;
    border: none;
    outline: none;
    font-size: clamp(1.5rem, 1.148rem + 1.502vw, 2.5rem);
    background: transparent;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
    opacity: ${(props) => (props.$isVisible ? 0 : 1)};
    visibility: ${(props) => (props.$isVisible ? "hidden" : "visible")};
    pointer-events: ${(props) => (props.$isVisible ? "none" : "auto")};
    transition:
      opacity 0.3s,
      visibility 0.3s;

    .fa-bars {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: clamp(12.5rem, 10.299rem + 9.39vw, 18.75rem);
    padding: ${({ theme }) => theme.spacing.xl};
    z-index: ${({ theme }) => theme.zIndex.navbar};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.gradients.primary};
    transform: ${(props) =>
      props.$isVisible ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.5s ease-in-out;
    pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};

    .close-nav {
      background: transparent;
      color: ${({ theme }) => theme.colors.text.primary};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      margin-bottom: ${({ theme }) => theme.spacing.md};
      align-self: flex-end;
      font-size: ${({ theme }) => theme.tipography.sm};

      &:hover {
        color: ${({ theme }) => theme.colors.accent.default};
      }
    }

    ul li {
      margin-bottom: ${({ theme }) => theme.spacing.lg};

      a {
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: clamp(1rem, 0.824rem + 0.751vw, 1.5rem);
        font-weight: ${({ theme }) => theme.fontWeights.bold};

        &:focus-visible {
          outline: 2px solid ${({ theme }) => theme.colors.accent.default};
          outline-offset: 4px;
          border-radius: ${({ theme }) => theme.radius.sm};
        }

        &:hover {
          color: ${({ theme }) => theme.colors.accent.default};
        }
      }
    }
  }
`;
