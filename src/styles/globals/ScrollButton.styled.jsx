import styled from "styled-components";

 export const ScrollButtonStyled = styled.button`
  position: fixed;
  bottom: ${({theme}) => theme.spacing.xxl};
  right: ${({theme}) => theme.spacing.xxl};
  width: ${({theme}) => theme.spacing.xxxl};
  height: ${({theme}) => theme.spacing.xxxl};
  border: none;
  border-radius: ${({theme}) => theme.radius.round};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme}) => theme.tipography.md};
  color: ${({theme}) => theme.colors.text.primary}; 
  z-index: ${({theme}) => theme.zIndex.floating};
  background: ${({theme}) => theme.gradients.glow};
  box-shadow:
    ${({theme}) => theme.shadows.md},
    ${({theme}) => theme.shadows.glow};
  opacity: ${props => (props.$isVisible ? "1" : "0")};
  visibility: ${props => (props.$isVisible ? "visible" : "hidden")};
  transform: ${props => (props.$isVisible ? "scale(1)" : "scale(0.8)")};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background: ${({theme}) => theme.gradients.glowHover};
  }
`;
