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
    background-color: #fcefef;
  }

  &:nth-child(odd) {
    background-color: #ecfbfc;
  }

  &:hover {
    opacity: 0.85;
    transform: translateX(5px);
    cursor: pointer;
  }

  span {
    flex: 1;
    font-size: 0.9rem;
    color: #334155;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:first-child {
      flex: 0.5;
      font-weight: 600;
      color: #0f172a;
    }

    &:nth-child(2) {
      color: #64748b;
    }

    &:nth-child(3) {
      font-weight: 500;
    }

    &:nth-child(4) {
      text-align: center;
      font-weight: 600;
      color: rgb(15, 212, 243);
    }
  }

  .details-link {
    color: #0f172a;
    text-decoration: underline;
    font-style: italic;
    font-size: 0.9rem;
  }
`;
