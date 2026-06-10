import styled from "styled-components";

export const SidebarStyled = styled.aside`
  margin-bottom: var(--space-md);
  padding: var(--space-lg);
  height: fit-content;
  background: var(--cl-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs), var(--sh-xs-rev);

  h3 {
    margin-block: var(--space-sm);
    font-size: var(--fs-sm);
    color: var(--cl-text-primary);
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-ms);

    @media screen and (min-width: 48rem) {
      flex-direction: column;
    }
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: var(--fs-sm);
    color: var(--cl-checkbox);
    transition: color 0.3s ease;

    input {
      width: var(--space-md);
      height: var(--space-md);
    }

    &:hover {
      color: var(--cl-text-primary);
      font-weight: var(--fw-medium);
    }
  }
`;
