import styled from "styled-components";

export const FooterBottomStyled = styled.div`
   background: ${({theme}) => theme.gradients.primary};
  color: ${({theme}) => theme.colors.text.secondary};
  text-align: center;
  font-size: ${({theme}) => theme.tipography.xs};
  padding: ${({theme}) => theme.spacing.md};
`;
