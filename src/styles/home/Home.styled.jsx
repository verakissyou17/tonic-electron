import styled from "styled-components";

export const HomeStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};

  .main-promo {
    width: min(100%, 95vw);
    margin-inline: auto;
    overflow: hidden;
  }

  .main-row {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: ${({ theme }) => theme.container.card};
    align-items: stretch;
    will-change: transform;
    gap: ${({ theme }) => theme.spacing.xl};
    width: max-content;
    padding: ${({ theme }) => theme.spacing.md};

    .main-row-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: ${({ theme }) => theme.spacing.md};
      padding: ${({ theme }) => theme.spacing.lg};
      text-align: center;
      flex: 0 0 ${({ theme }) => theme.container.card};
      height: 100%;
      box-shadow: ${({ theme }) => theme.shadows.glow};
      border-radius: ${({ theme }) => theme.radius.lg};
      background: ${({ theme }) => theme.gradients.primary};

      h3 {
        font-size: ${({ theme }) => theme.tipography.sm};
        line-height: 1;
        -webkit-text-wrap: pretty;
      }

      p {
        -webkit-text-wrap: pretty;
        color: ${({ theme }) => theme.colors.text.primary};
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
  }

  .arrows {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .arrow {
      color: ${({ theme }) => theme.colors.text.light};
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
  }
`;
