import styled from "styled-components";

export const ClientOrderStyled = styled.section`
  width: 100%;
  padding: 1rem;
  font-size: 0.85rem;

  .title {
    margin-bottom: 1.5rem;
  }

  .order-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 1rem;

    span {
      flex: 1;
      font-weight: bold;
    }
  }
`;
