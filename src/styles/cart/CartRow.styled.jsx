import styled from "styled-components";

export const CartRowStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-direction: column;
  padding-block: ${({ theme }) => theme.spacing.md};
  border-bottom: ${({ theme, $isLast }) =>
    $isLast ? "none" : `1px solid ${theme.colors.border.default}`};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (min-width: 48rem) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xl};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  .box {
    flex: 1;
    width: 100%;
  }

  .product-details {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};

    .product-image {
      width: ${({ theme }) => theme.spacing.heroSmall};
      height: ${({ theme }) => theme.spacing.heroSmall};

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    h3 {
      font-size: ${({ theme }) => theme.tipography.sm};
    }
  }

  .price-container {
    text-align: right;
    p {
      margin-bottom: ${({ theme }) => theme.spacing.xs};
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.accent.default};
    border-radius: ${({ theme }) => theme.radius.md};
    min-width: ${({ theme }) => theme.spacing.heroSmall};
    height: ${({ theme }) => theme.spacing.xxl};

    .icon {
      cursor: pointer;
      padding: ${({ theme }) => theme.spacing.xs};
    }

    input {
      text-align: center;
      background: inherit;
      color: inherit;
      width: ${({ theme }) => theme.spacing.xxl};
      font-size: ${({ theme }) => theme.spacing.md};
    }
  }

  .subtotal-container {
    text-align: center;
    p {
      margin-bottom: ${({ theme }) => theme.spacing.xs};
    }
  }

  .trash-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: ${({ theme }) => theme.tipography.md};
  }
`;
