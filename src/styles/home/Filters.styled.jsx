import styled from "styled-components";

export const FiltersStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: var(--space-md);
  padding: var(--space-md);
  background: var(--gradient-primary);

  .input-container {
    input {
      width: 100%;
      padding: var(--space-sm);
      border-radius: var(--radius-lg);
      font-size: var(--fs-sm);
    }

    input::placeholder {
      font-size: var(--fs-xs);
      font-family: inherit;
      font-weight: var(--fw-semibold);
      padding-left: var(--space-sm);
    }
  }

  .select-element {
    padding: var(--space-sm);
    border-radius: var(--radius-lg);
  }

  @media screen and (min-width: 48rem) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    .input-container {
      width: 60%;
    }

    .select-element {
      width: 20%;
    }
  }
`;
