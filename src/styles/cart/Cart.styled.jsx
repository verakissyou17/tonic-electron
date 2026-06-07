import styled from "styled-components";

export const CartStyled = styled.main`
  flex: 1;
  padding: clamp(1rem, 0.648rem + 1.502vw, 2rem);
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 1rem;
  }

  h2,
  .order-link {
    background: ${(props) => props.theme.gradients.navy};
    color: white;
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    font-size: 1.2rem;
  }
`;

export const CartFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: ${(props) => props.theme.gradients.navy};
  color: white;
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-weight: bold;
`;
