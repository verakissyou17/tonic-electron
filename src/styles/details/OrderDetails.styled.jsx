import styled from "styled-components";

export const OrderDetailsStyled = styled.main`
  flex: 1;
  width: 100%;
  max-width: ${({theme}) => theme.container.width};
  margin: ${({theme}) => theme.spacing.md} auto;
  padding: ${({theme}) => theme.spacing.md};
  box-shadow: ${({theme}) => theme.shadows.container};
  border-radius: ${({theme}) => theme.radius.md};
   color: ${({theme}) => theme.colors.text.primary};

  .order-details--header {
    margin-bottom: ${({theme}) => theme.spacing.lg};

    h2 {
      margin-bottom: ${({theme}) => theme.spacing.md};
      span {
        color: ${({theme}) => theme.colors.accent.default};
      }
    }

    .client {
      display: flex;
      flex-direction: column;
      gap: ${({theme}) => theme.spacing.sm};

      span {
        font-weight: ${({theme}) => theme.fontWeights.semibold};
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    padding: ${({theme}) => theme.spacing.lg} 0 ${({theme}) => theme.spacing.ms};
    gap: ${({theme}) => theme.spacing.xs};

    p:first-child {
      font-weight: ${({theme}) => theme.fontWeights.bold};
    }

    p:last-child {
      color: ${({theme}) => theme.colors.accent.default};
      font-weight: ${({theme}) => theme.fontWeights.semibold};
    }

    @media screen and (min-width: 48rem) {
      flex-direction: row;
      align-items: center;
      gap: 0;

      p {
        flex: 1;
      }

      p:nth-child(3),
      p:last-child {
        text-align: center;
      }

      .dots {
        flex: 1;
        border-bottom: 1px dotted ${({theme}) => theme.colors.border.default};
        height: 1px;
        margin-inline: ${({theme}) => theme.spacing.sm};
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({theme}) => theme.spacing.md};
    margin-top: ${({theme}) => theme.spacing.lg};
    font-size: ${({theme}) => theme.tipography.ms};
    background: ${({theme}) => theme.gradients.primary};
    color: ${({theme}) => theme.colors.text.primary};
    border-radius: ${({theme}) => theme.radius.md};
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }
`;
