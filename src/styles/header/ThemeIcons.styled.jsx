import styled from "styled-components";

export const ThemeIconsStyled = styled.div`
  flex: 0 0 ${({ theme }) => theme.spacing.xxxl};
  background: ${({ theme }) => theme.gradients.primaryInverse};
  padding: ${({ theme }) => theme.spacing.xs};
  margin-left: ${({ theme }) => theme.radius.md};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 2px solid ${({ theme }) => theme.colors.border.accent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .ball {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radius.round};
    background: ${({ theme }) => theme.gradients.primaryInverse};
    transition: transform 0.3s ease;

    transform: ${({ $isDark }) =>
      $isDark ? "translateX(100%)" : "translateX(0)"};
  }

  .faSun {
    color: ${({ theme }) => theme.backgrounds.colored};
  }

  .faMoon {
    color: ${({ theme }) => theme.colors.accent.default};
  }
`;
