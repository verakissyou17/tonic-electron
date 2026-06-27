import styled from "styled-components";

export const OrdersStyled = styled.main`
  flex: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.container.width};
  margin: ${({ theme }) => theme.spacing.xl} auto;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow:
    ${({ theme }) => theme.shadows.xs},
    ${({ theme }) => theme.shadows.container};

  .title {
    font-size: ${({ theme }) => theme.tipography.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  .order-header {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.radius.md};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};

    span {
      flex: 1;
      font-size: ${({ theme }) => theme.tipography.xs};
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
      color: ${({ theme }) => theme.colors.text.primary};
      text-transform: uppercase;
      letter-spacing: 0.05em;

      &:first-child {
        flex: 0.5;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
`;
