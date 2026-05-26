import styled from "styled-components";

export const OrderStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background: white;
  max-width: 40rem;
  margin: 1rem auto;
  box-shadow:
    2px 2px 2px rgba(0, 0, 0, 0.1),
    -2px -2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    label {
      display: block;
      margin-bottom: 0.75rem;

      input[type="radio"] {
        margin-right: 0.5rem;
        accent-color: rgba(7, 207, 238);
      }

      input[type="text"],
      input[type="tel"],
      input[type="email"] {
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        padding: 0.5rem;
        width: 100%;
        border-radius: 0.5rem;
        box-shadow:
          2px 2px 2px rgba(0, 0, 0, 0.1),
          -2px -2px 2px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .add-order-btn {
    padding: 1rem;
    max-width: 70%;
    margin: 0.5rem auto;
    border-radius: 0.5rem;
    font-family: inherit;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: white;
    font-weight: 600;
    font-size: 1rem;
  }

  .add-order-btn:hover {
    background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.8),
      rgba(30, 41, 59, 0.8)
    );
  }

  .error {
    color: red;
    font-size: 0.75rem;
    margin-block: 0.5rem;
  }
`;
