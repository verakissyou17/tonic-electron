import styled from "styled-components";

export const SidebarStyled = styled.aside`
  margin-bottom: ${({theme}) => theme.spacing.md};
  padding: ${({theme}) => theme.spacing.lg};
  height: fit-content;
  background: ${({theme}) => theme.gradients.primary};
  border-radius: ${({theme}) => theme.radius.md};
  box-shadow: ${({theme}) => theme.shadows.xs}, ${({theme}) => theme.shadows.container};

  h2 {
    margin-block: ${({theme}) => theme.spacing.sm};
    font-size: ${({theme}) => theme.tipography.sm};
    color: ${({theme}) => theme.colors.text.primary};
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.spacing.ms};

    @media screen and (min-width: 48rem) {
      flex-direction: column;
    }
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.xs};
    font-size: ${({theme}) => theme.tipography.sm};
    color: ${({theme}) => theme.colors.text.primary};
    transition: color 0.3s ease;

    input {
      width: ${({theme}) => theme.spacing.md};
      height: ${({theme}) => theme.spacing.md};
      accent-color: ${({ theme }) => theme.colors.checkbox};
    }

    &:hover {
      color: ${({theme}) => theme.colors.accent.default};
      font-weight: ${({theme}) => theme.fontWeights.medium};
    }
  }
`;
