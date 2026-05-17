import styled from "styled-components";

 export const ScrollButtonStyled = styled.button`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #1a242f; 
  z-index: 1000;
  background: linear-gradient(135deg, #ffffff 0%, #ccf3f8 100%);
  box-shadow:
    2px 2px 2px rgba(0, 0, 0, 0.3),
    -2px -2px 2px rgba(112, 232, 250, 0.5);
  opacity: ${props => (props.$isVisible ? "1" : "0")};
  visibility: ${props => (props.$isVisible ? "visible" : "hidden")};
  transform: ${props => (props.$isVisible ? "scale(1)" : "scale(0.8)")};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(135deg, #e6faff 0%, #70e8fa 100%);
  }
`;
