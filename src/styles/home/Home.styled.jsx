import styled from "styled-components";

export const HomeStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};

  .carousel {
    width: min(100%, 95vw);
    margin-inline: auto;
    overflow: hidden;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .main_row {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: ${({ theme }) => theme.container.card};
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.xxl};
    width: max-content;
    padding-block: ${({ theme }) => theme.spacing.md};
    will-change: transform;
  }

  .main_row-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.lg};
    text-align: center;
    height: 100%;
    box-shadow: ${({ theme }) => theme.shadows.glow};
    border-radius: ${({ theme }) => theme.radius.lg};
    background: ${({ theme }) => theme.backgrounds.base};
    color: ${({ theme }) => theme.colors.text.primary};

    h3 {
      font-size: ${({ theme }) => theme.tipography.sm};
      line-height: 1;
      -webkit-text-wrap: pretty;
    }

    p {
      -webkit-text-wrap: pretty;
    }

    .image-container {
      width: ${({ theme }) => theme.spacing.heroBig};
      height: ${({ theme }) => theme.spacing.heroBig};

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .arrow {
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.gradients.glow};
    font-size: ${({ theme }) => theme.tipography.lg};
    border-radius: ${({ theme }) => theme.radius.round};
    height: 100%;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1);
      background: ${({ theme }) => theme.gradients.primary};
      border: 1px solid ${({ theme }) => theme.colors.border.accent};
    }
  }
`;
