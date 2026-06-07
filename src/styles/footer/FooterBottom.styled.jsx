import styled from "styled-components";

export const FooterBottomStyled = styled.div`
  background: ${(props) => props.theme.gradients.navy};
  color: ${(props) => props.theme.colors.neutral.gray.medium};
  border-top: 1px solid ${(props) => props.theme.colors.blackText};
  text-align: center;
  font-size: 0.85rem;
  padding: 1rem;
`;
