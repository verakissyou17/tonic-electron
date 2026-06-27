import styled from "styled-components";

export const ProductsMainStyled = styled.div`
  flex-grow: 1;

  .products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
    gap: ${({theme}) => theme.spacing.xl};
  }
`;
