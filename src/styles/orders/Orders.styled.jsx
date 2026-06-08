import styled from "styled-components";

export const OrdersStyled = styled.section`
  flex: 1;
  width: 100%;
  max-width: var(--container-width);
  margin: var(--space-xl) auto;
  padding: var(--space-lg);
  background-color: var(--cl-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs), var(--sh-xs-rev);

  .title {
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
    color: var(--cl-text-primary);
    margin-bottom: var(--space-lg);
  }

  .order-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-sm) var(--space-md);
    background: var(--gradient-primary);
    border-radius: var(--radius-md);
    margin-bottom: var(--space-md);

    span {
      flex: 1;
      font-size: var(--fs-xs);
      font-weight: var(--fw-semibold);
      color: var(--cl-white);
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
