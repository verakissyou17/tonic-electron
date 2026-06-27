import styled from "styled-components";

export const CartStyled = styled.main`
  flex: 1;
  padding: clamp(
    ${({ theme }) => theme.spacing.md},
    0.648rem + 1.502vw,
    ${({ theme }) => theme.spacing.xl}
  );
  width: 100%;
  max-width: ${({ theme }) => theme.container.width};
  margin: 0 auto;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: ${({ theme }) => theme.spacing.md};
  }

  h2,
  .order-link {
    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: ${({ theme }) => theme.radius.md};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.tipography.md};
  }

  .order-link {
    color: ${({ theme }) => theme.colors.accent.default};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const CartFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.radius.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
