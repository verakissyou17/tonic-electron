import styled from "styled-components";

export const OrderItemStyled = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #e1e1e3e0;
  margin-bottom: 1rem;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:nth-child(even) {
    background-color: ${(props) => props.theme.colors.special.pink};
  }

  &:nth-child(odd) {
    background-color: ${(props) => props.theme.colors.special.cyanLight};
  }

  &:hover {
    opacity: 0.85;
    transform: translateX(5px);
    cursor: pointer;
  }

  span {
    flex: 1;
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.neutral.gray.slate600};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:first-child {
      flex: 0.5;
      font-weight: 600;
      color: ${(props) => props.theme.colors.navy.dark};
    }

    &:nth-child(2) {
      color: ${(props) => props.theme.colors.neutral.gray.slate500};
    }

    &:nth-child(3) {
      font-weight: 500;
    }

    &:nth-child(4) {
      text-align: center;
      font-weight: 600;
      color: ${(props) => props.theme.colors.cyan.accent};
    }
  }

  .details-link {
    color: ${(props) => props.theme.colors.navy.dark};
    text-decoration: underline;
    font-style: italic;
    font-size: 0.9rem;
  }
`;
