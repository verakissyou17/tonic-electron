import styled from "styled-components";

export const OrderDetailsStyled = styled.section`
  flex: 1;
  width: 100%;
  max-width: var(--container-width);
  margin: var(--space-md) auto;
  padding: var(--space-md);
  box-shadow: var(--shadow-container);
  border-radius: var(--radius-md);

  .order-details--header {
    margin-bottom: var(--space-lg);

    h2 {
      margin-bottom: var(--space-md);
      span {
        color: var(--cl-accent);
      }
    }

    .client {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);

      span {
        font-weight: var(--fw-semibold);
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    padding: var(--space-lg) 0 var(--space-ms);
    gap: var(--space-xs);

    p:first-child {
      font-weight: var(--fw-bold);
    }

    p:last-child {
      color: var(--cl-accent);
      font-weight: var(--fw-semibold);
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
        border-bottom: 1px dotted var(--cl-text-secondary);
        height: 1px;
        margin-inline: var(--space-sm);
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md);
    margin-top: var(--space-lg);
    font-size: var(--fs-ms);
    background: var(--gradient-primary);
    color: var(--cl-white);
    border-radius: var(--radius-md);
    font-weight: var(--fw-bold);
  }
`;
