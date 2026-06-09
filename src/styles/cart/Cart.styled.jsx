import styled from "styled-components";

export const CartStyled = styled.main`
  flex: 1;
  padding: clamp(var(--space-md), 0.648rem + 1.502vw, var(--space-xl));
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: var(--space-md);
  }

  h2,
  .order-link {
    background: var(--gradient-primary);
    color: var(--cl-white);
    border-radius: var(--radius-md);
    padding: var(--space-sm) var(--space-md);
    font-size: var(--fs-ms);
  }
`;

export const CartFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md);
  background: var(--gradient-primary);
  color: var(--cl-white);
  border-radius: var(--radius-md);
  margin-top: var(--space-md);
  font-weight: var(--fw-bold);
`;
