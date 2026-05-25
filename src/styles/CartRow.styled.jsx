import styled from "styled-components";

export const CartRowStyled = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding-block: 1rem;
  /* max-width: 75rem;
  margin: 0 auto; */
  border-bottom: ${(props) => (props.$isLast ? "none" : "1px solid #cccccc86")};

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
    gap: 0.5rem;

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
