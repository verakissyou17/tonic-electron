import styled from "styled-components";

export const SearchBarStyled = styled.div`
padding: ${({theme}) => theme.spacing.md};
width: 100%;
max-width: 80%;
margin: 0 auto;

    input {
      width: 100%;
      padding: ${({theme}) => theme.spacing.sm};
      border-radius: ${({theme}) => theme.radius.lg};
      font-size: ${({theme}) => theme.tipography.sm};
      border: 1px solid ${({theme}) => theme.colors.border.soft};
    }

    input::placeholder {
      font-size: ${({theme}) => theme.tipography.xs};
      font-family: inherit;
      font-weight: ${({theme}) => theme.fontWeights.semibold};
      padding-left: ${({theme}) => theme.spacing.sm};
    }
`;