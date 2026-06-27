import styled from "styled-components";

export const FiltersStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.md};
  width: 10rem;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;

  .select-element {
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.radius.lg};
    width: 100%;
  }
`;
