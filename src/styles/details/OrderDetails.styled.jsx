import styled from "styled-components";

export const OrderDetailsStyled = styled.section`
  flex: 1;
  width: 100%;
  max-width: 64rem;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow:
    2px 2px 2px rgba(0, 0, 0, 0.1),
    -2px -2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  h2 {
    margin-bottom: 1rem;
    span {
      color: rgb(5, 180, 207);
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    border-bottom: 1px dotted #999;

    @media (min-width: 38rem) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border-bottom: none;

      p {
        text-align: center;
      }

      .dots {
        flex: 1;
        border-bottom: 1px dotted #999;
        height: 1px;
        margin-inline: 0.5rem;
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    margin-top: 1rem;
    font-size: 1.2rem;

    p {
      font-weight: bold;
    }

    span {
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: white;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
    }
  }
`;
