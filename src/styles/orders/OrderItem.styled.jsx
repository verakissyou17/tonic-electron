import styled from "styled-components";

export const OrderItemStyled = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md);
  border-bottom: 1px solid var(--cl-border);
  margin-bottom: var(--space-md);
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:nth-child(even) {
    background-color: var(--cl-row-even);
  }

  &:nth-child(odd) {
    background-color: var(--cl-row-odd);
  }

  &:hover {
    opacity: 0.85;
    transform: translateX(5px);
    cursor: pointer;
  }

  span {
    flex: 1;
    font-size: var(--fs-xs);
    color: var(--cl-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:first-child {
      flex: 0.5;
      font-weight: var(--fw-semibold);
      color: var(--cl-text-primary);
    }

    &:nth-child(2) {
      color: var(--cl-text-primary);
    }

    &:nth-child(3) {
      font-weight: var(--fw-medium);
    }

    &:nth-child(4) {
      text-align: center;
      font-weight: var(--fw-semibold);
      color: var(--cl-text-primary);
    }
  }

  .details-link {
    color: var(--cl-text-secondary);
    text-decoration: underline;
    font-style: italic;
    font-size: var(--fs-xs);
  }
`;
