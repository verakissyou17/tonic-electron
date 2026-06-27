import styled from "styled-components";

export const ProductsStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.lg};
  padding: ${({theme}) => theme.spacing.md};

  .sidebar-panel {
      flex-grow: 0;
  }

  @media screen and (min-width: 48rem) {
    flex-direction: row;
  }
`;
