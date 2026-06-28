import styled from "styled-components";

export const StyledHomeHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.container};
  border-radius: ${({ theme }) => theme.radius.lg};

  @media screen and (min-width: 68rem) {
    flex-direction: row;
  }

  .images-container {
    padding: ${({ theme }) => theme.spacing.md};
  }

  .image-container {
    position: relative;
    transform-style: preserve-3d;
    transform: ${({ $isHovered }) =>
      $isHovered
        ? "perspective(5000px) rotateY(18deg) rotateX(6deg) translateY(-8px) scale(1.04)"
        : "perspective(5000px) rotateY(40deg)"};
    transition: transform 0.5s ease;
    border-radius: ${({ theme }) => theme.radius.lg};
    background: radial-gradient(
      circle,
      hsla(189, 100%, 50%, 1) 0%,
      hsla(218, 43%, 12%, 1) 85%
    );
  }

  .image-container::before,
  .image-container::after {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle,
      hsla(218, 43%, 12%, 1) 14%,
      hsla(189, 100%, 50%, 1) 100%
    );
    border-radius: inherit;
  }

  .image-container::before {
    content: url("/images/products/cases/transparent-iphone-case.webp");
    transform: translateZ(-150px);
  }

  .image-container::after {
    content: url("/images/products/cases/transparent-iphone-case.webp");
    transform: translateZ(150px);
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.md};
    text-align: center;
    -webkit-text-wrap: pretty;

    a {
      background: radial-gradient(
        circle,
        hsla(189, 100%, 50%, 1) 0%,
        hsla(218, 43%, 12%, 1) 85%
      );
      padding: ${({ theme }) => theme.spacing.md};
      border-radius: ${({ theme }) => theme.radius.lg};
      color: ${({ theme }) => theme.colors.text.light};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    a:hover {
      transform: scale(1.1);
    }
  }
`;
