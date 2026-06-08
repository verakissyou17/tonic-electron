import styled from "styled-components";

export const OrderDetailsStyled = styled.section`
  flex: 1;
  width: 100%;
  max-width: var(--container-width);
  margin: var(--space-md) auto;
  padding: var(--space-md);
  box-shadow: var(--shadow-container);
  border-radius: var(--radius-md);

  h2 {
    margin-bottom: var(--space-md);
    span {
      color: var(--cl-accent);
    }
  }

  .details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md) 0;
    margin-bottom: var(--space-sm);

    p {
      text-align: center;
    }

    .dots {
      flex: 1;
      border-bottom: 1px dotted var(--cl-text-secondary);
      height: 1px;
      margin-inline: var(--space-sm);
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
