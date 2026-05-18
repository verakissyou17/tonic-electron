import styled from "styled-components";

export const CartRowStyled = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding-block: 1rem;
  /* max-width: 75rem;
  margin: 0 auto; */
  border-bottom: ${(props) => (props.$isLast ? "none" : "1px solid #cccccc86")};

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex: 1;
  }

  .product-details {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .product-image  {
      width: 5rem;

    }

    h3 {
      font-size: 1rem;
    }
  }

  .price-container {
    p {
      margin-bottom: 0.5rem;
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 0.5rem;
    color: white;

    .icon {
      flex: 1;
    }

    input {
      text-align: center;
      background: inherit;
      color: inherit;
      width: 2rem;
    }
  }

  .subtotal-container {
    flex-basis: 30%;
    p {
      margin-bottom: 0.5rem;
    }
  }

  .trash-container {
    flex-basis: 10%;
    justify-self: flex-end;
  }
`;
