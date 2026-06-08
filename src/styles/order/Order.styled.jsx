import styled from "styled-components";

export const OrderStyled = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-md);
  padding: var(--space-md);
  background: var(--cl-white);
  width: var(--container-width);
  margin: var(--space-md) auto;
  box-shadow:
    var(--shadow-xs),
    var(--sh-xs-rev);
  border-radius: var(--radius-md);

  .payment-delivery {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: var(--space-ms);

    div {
      flex: 1;
    }
  }

  fieldset {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    border-bottom: 1px solid var(--cl-border);

    label {
      display: block;
      margin-bottom: var(--space-ms);

      input[type="radio"] {
        margin-right: var(--space-sm);
        accent-color: var(--cl-accent);
      }

      input[type="text"],
      input[type="tel"],
      input[type="email"] {
        margin-left: var(--space-sm);
        margin-top: var(--space-sm);
        padding: var(--space-sm);
        width: 100%;
        border-radius: var(--radius-md);
        box-shadow:
          var(--shadow-xs),
          var(--sh-xs-rev);
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

  .error {
    color: var(--cl-error);
    font-size: var(--fs-xs);
    margin-block: var(--space-sm);
  }
`;
