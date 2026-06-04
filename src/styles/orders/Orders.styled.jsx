import styled from "styled-components";

export const OrdersStyled = styled.section`
  width: 100%;
  max-width: 60rem;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03);

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 1.5rem;
  }

  .order-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 0.5rem;
    margin-bottom: 1rem;

    span {
      flex: 1;
      font-size: 0.85rem;
      font-weight: 600;
      color: white;
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
