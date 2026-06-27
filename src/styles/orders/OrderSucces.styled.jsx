import styled from "styled-components";

export const StyledOrderSuccess = styled.section`
  flex: 1;
  max-width: ${({theme}) => theme.container.width};
  margin: ${({theme}) => theme.spacing.xl} auto;
  padding: ${({theme}) => theme.spacing.xl};
  background: ${({theme}) => theme.colors.text.primary};
  border-radius: ${({theme}) => theme.radius.md};
  box-shadow: ${({theme}) => theme.shadows.xs}, ${({theme}) => theme.shadows.container};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.lg};

  h2 {
    text-align: center;
  }

  a {
    padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.lg};
    background: ${({theme}) => theme.gradients.primary};
    border-radius: ${({theme}) => theme.radius.md};
    opacity: 0.9;
    color: ${({theme}) => theme.colors.text.primary};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    transition: opacity 0.3s ease;
  }

  a:hover {
    opacity: 1;
  }
`;
