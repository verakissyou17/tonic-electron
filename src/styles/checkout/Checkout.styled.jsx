import styled from "styled-components";

export const CheckoutStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-xl);
  background: var(--cl-white);
  width: 100%;
  max-width: 50rem;
  margin: var(--space-md) auto;
  box-shadow: var(--shadow-xs), var(--sh-xs-rev);
  border-radius: var(--radius-md);

  .checkout-details {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    padding: var(--space-ms);
    margin-top: var(--space-ms);
    border: 1px solid var(--cl-border);
    border-radius: var(--radius-md);
    background: var(--gr-glow);

    p {
      font-weight: var(--fw-medium);

      span {
        font-weight: var(--fw-bold);
      }
    }
  }
`;
