import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e1e1e, #2c2c2c);
  color: white;
  text-align: center;
`;

export const Content = styled.div`
  padding: 2rem;
`;

export const ErrorCode = styled.h1`
  font-size: 8rem;
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
  font-size: 2rem;
  margin: 1rem 0;
`;

export const Text = styled.p`
  color: #bbb;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(Link)`
  background: rgb(7, 207, 238);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: rgb(1, 99, 114);
  }
`;
