import styled from "styled-components";

 export const ScrollButtonStyled = styled.button`
  position: fixed;
  bottom: var(--space-xxl);
  right: var(--space-xxl);
  width: var(--space-xxxl);
  height: var(--space-xxxl);
  border: none;
  border-radius: var(--round);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-md);
  color: var(--cl-text-primary); 
  z-index: var(--z-floating);
  background: var(--gr-glow);
  box-shadow:
    var(--shadow-md),
    var(--shadow-glow);
  opacity: ${props => (props.$isVisible ? "1" : "0")};
  visibility: ${props => (props.$isVisible ? "visible" : "hidden")};
  transform: ${props => (props.$isVisible ? "scale(1)" : "scale(0.8)")};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background: var(--gr-glow-hover);
  }
`;
