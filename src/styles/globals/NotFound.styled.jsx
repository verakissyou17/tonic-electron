import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
   background: var(--gradient-primary);
  color: var(--cl-white);
  text-align: center;
`;

export const Content = styled.div`
  padding: var(--space-xl);
`;

export const ErrorCode = styled.h1`
  font-size: var(--fs-bg-hero);
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
  margin: var(--space-md) 0;
`;

export const Text = styled.p`
  color: var(--cl-text-secondary);
  margin-bottom: var(--space-xl);
`;

export const StyledLink = styled(Link)`
  background: var(--cl-accent);
  color: var(--cl-text-primary);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: var(--fw-semibold);
  transition: 0.3s;

  &:hover {
    background: var(--cl-accent-hover);
  }

  :focus-visible {
    outline: 2px solid cyan;
    offset: 4px;
    border-radius: var(--radius-sm);
  }
`;
