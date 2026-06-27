import styled from "styled-components";

export const CheckoutStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.md};
  padding: ${({theme}) => theme.spacing.xl};
  background: ${({theme}) => theme.gradients.primary};
  width: 100%;
  max-width: 50rem;
  margin: ${({theme}) => theme.spacing.md} auto;
  box-shadow: ${({theme}) => theme.shadows.xs}, ${({theme}) => theme.shadows.container};
  border-radius: ${({theme}) => theme.radius.md};
  color: ${({theme}) => theme.colors.text.primary};

  .checkout-details {
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.lg};
    padding: ${({theme}) => theme.spacing.ms};
    margin-top: ${({theme}) => theme.spacing.ms};
    border: 1px solid ${({theme}) => theme.colors.border.default};
    border-radius: ${({theme}) => theme.radius.md};
    background: ${({theme}) => theme.gradients.glow};
    color: ${({theme}) => theme.colors.text.dark};

    p {
      font-weight: ${({theme}) => theme.fontWeights.medium};

      span {
        font-weight: ${({theme}) => theme.fontWeights.bold};
      }
    }
  }
`;
