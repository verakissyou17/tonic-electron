import styled from "styled-components";

export const CheckoutStyled = styled.form`
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

  .payment-delivery {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin-bottom: var(--space-ms);

    h3 {
      margin-bottom: var(--space-md);
    }

    .radio-group {
      flex: 1;
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
    }

    @media (min-width: 36rem) {
      flex-direction: row;

      .radio-group {
        align-items: center;
      }
    }
  }

  fieldset {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);

    label {
      display: block;
      margin-bottom: var(--space-ms);

      .error {
        color: var(--cl-error);
        font-size: var(--fs-xs);
        margin-block: var(--space-sm);
      }

      input[type="radio"] {
        margin-right: var(--space-sm);
        accent-color: var(--cl-accent);
      }

      input[type="text"],
      input[type="tel"],
      input[type="email"] {
        margin-top: var(--space-sm);
        padding: var(--space-sm);
        width: 100%;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-xs), var(--sh-xs-rev);
      }
    }
  }

  .add-order-btn {
    padding: var(--space-md);
    max-width: 70%;
    margin: var(--space-sm) auto;
    border-radius: var(--radius-md);
    font-family: inherit;
    background: var(--gradient-primary);
    color: var(--cl-white);
    font-weight: var(--fw-semibold);
    font-size: var(--fs-sm);
  }

  .add-order-btn:hover {
    opacity: 0.8;
  }
`;
