import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
   background: ${({theme}) => theme.gradients.primary};
  color: ${({theme}) => theme.colors.white};
  text-align: center;
`;

export const Content = styled.div`
  padding: ${({theme}) => theme.spacing.xl};
`;

export const ErrorCode = styled.h1`
  font-size: ${({theme}) => theme.tipography.bgHero};
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h2`
  font-size: var(--fs-lg);
  margin: ${({theme}) => theme.spacing.md} 0;
`;

export const Text = styled.p`
  color: ${({theme}) => theme.colors.text.secondary};
  margin-bottom: ${({theme}) => theme.spacing.xl};
`;

export const StyledLink = styled(Link)`
  background: ${({theme}) => theme.colors.accent.default};
  color: ${({theme}) => theme.colors.text.primary};
  padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.lg};
  border-radius: ${({theme}) => theme.radius.md};
  text-decoration: none;
  font-weight: ${({theme}) => theme.fontWeights.semibold};
  transition: 0.3s;

  &:hover {
    background: ${({theme}) => theme.colors.accent.hover};
  }

  :focus-visible {
    outline: 2px solid cyan;
    offset: ${({theme}) => theme.radius.sm};
    border-radius: ${({theme}) => theme.radius.sm};
  }
`;
