import styled from "styled-components";

export const StyledOrderSuccess = styled.section`
  flex: 1;
  max-width: var(--container-width);
  margin: var(--space-xl) auto;
  padding: var(--space-xl);
  background: var(--cl-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs), var(--sh-xs-rev);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);

  h2 {
    text-align: center;
  }

  a {
    padding: var(--space-sm) var(--space-lg);
    background: var(--gradient-primary);
    border-radius: var(--radius-md);
    opacity: 0.9;
    color: var(--cl-white);
    font-weight: var(--fw-bold);
    transition: opacity 0.3s ease;
  }

  a:hover {
    opacity: 1;
  }
`;
