import styled from "styled-components";

export const FormDataStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.md};

  h3,
  h4 {
    margin-bottom: ${({theme}) => theme.spacing.sm};
  }

  label {
    display: block;
    margin-bottom: ${({theme}) => theme.spacing.ms};

    .error {
      color: ${({theme}) => theme.colors.text.error};
      font-size:  ${({theme}) => theme.spacing.xs};
      margin-block: ${({theme}) => theme.spacing.sm};
    }

    input[type="radio"] {
      margin-right: ${({theme}) => theme.spacing.sm};
      accent-color: ${({theme}) => theme.colors.accent.default};
    }

    input[type="text"],
    input[type="tel"],
    input[type="email"] {
      margin-top: ${({theme}) => theme.spacing.sm};
      padding: ${({theme}) => theme.spacing.sm};
      width: 100%;
      border-radius: ${({theme}) => theme.radius.md};
      box-shadow: ${({theme}) => theme.shadows.xs}, ${({theme}) => theme.shadows.container};
    }
  }

  .payment-delivery {
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.md};
    margin-bottom: ${({theme}) => theme.spacing.lg};

    h3 {
      margin-bottom: ${({theme}) => theme.spacing.md};
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
    background: ${({theme}) => theme.gradients.glow};
    color: ${({theme}) => theme.colors.text.dark};
    padding: ${({theme}) => theme.spacing.md};
    border-radius: ${({theme}) => theme.radius.md};
    margin-bottom: ${({theme}) => theme.spacing.md};

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
    padding: ${({theme}) => theme.spacing.md};
    width: 100%;
    max-width: 70%;
    margin: ${({theme}) => theme.spacing.md} auto;
    border-radius: ${({theme}) => theme.radius.md};
    font-family: inherit;
    background: ${({theme}) => theme.gradients.primary};
    color: ${({theme}) => theme.colors.text.primary};
    font-weight: ${({theme}) => theme.fontWeights.semibold};
    font-size: ${({theme}) => theme.tipography.sm};

    &:hover {
      opacity: 0.8;
    }
  }
`;
