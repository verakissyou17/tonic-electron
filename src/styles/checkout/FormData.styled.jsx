import styled from "styled-components";

export const FormDataStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  h3,
  h4 {
    margin-bottom: var(--space-sm);
  }

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

  .payment-delivery {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);

    h3 {
      margin-bottom: var(--space-md);
    }

    .radio-group {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 36rem) {
      flex-direction: row;

      .radio-group {
        align-items: center;
      }
    }
  }

  .client-details {
    background: var(--gr-glow);
    padding: var(--space-md);
    border-radius: var(--radius-md);
    margin-bottom: var(--space-md);

    .client-data .row label:first-child {
      flex-basis: 30%;
    }

    .client-data .row label:last-child {
      flex-basis: 70%;
    }

    .address .row label:first-child {
      flex-basis: 70%;
    }

    .address .row label:last-child {
      flex-basis: 30%;
    }

    @media screen and (min-width: 48rem) {
      width: 100%;
      max-width: 75%;
      margin-inline: auto;
    }
  }

  .add-order-btn {
    padding: var(--space-md);
    width: 100%;
    max-width: 70%;
    margin: var(--space-md) auto;
    border-radius: var(--radius-md);
    font-family: inherit;
    background: var(--gradient-primary);
    color: var(--cl-white);
    font-weight: var(--fw-semibold);
    font-size: var(--fs-sm);

    &:hover {
      opacity: 0.8;
    }
  }
`;
