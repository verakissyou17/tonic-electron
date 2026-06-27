import styled from "styled-components";

export const OrderItemStyled = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.spacing.md};
  padding: ${({theme}) => theme.spacing.md};
  border-bottom: 1px solid ${({theme}) => theme.colors.border.default};
  margin-bottom: ${({theme}) => theme.spacing.md};
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:nth-child(even) {
    background-color: ${({theme}) => theme.backgrounds.row.even};
  }

  &:nth-child(odd) {
    background-color: ${({theme}) => theme.backgrounds.row.odd};
  }

  &:hover {
    opacity: 0.85;
    transform: translateX(5px);
    cursor: pointer;
  }

  span {
    flex: 1;
    font-size: var(--fs-xs);
    color: ${({theme}) => theme.colors.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:first-child {
      flex: 0.5;
      font-weight: ${({theme}) => theme.fontWeights.semibold};
      color: ${({theme}) => theme.colors.text.primary};
    }

    &:nth-child(2) {
      color: ${({theme}) => theme.colors.text.primary};
    }

    &:nth-child(3) {
      font-weight: ${({theme}) => theme.fontWeights.medium};
    }

    &:nth-child(4) {
      text-align: center;
      font-weight: ${({theme}) => theme.fontWeights.semibold};
      color: ${({theme}) => theme.colors.text.primary};
    }
  }

  .details-link {
    color: ${({theme}) => theme.colors.text.secondary};
    text-decoration: underline;
    font-style: italic;
    font-size: var(--fs-xs);
  }
`;
