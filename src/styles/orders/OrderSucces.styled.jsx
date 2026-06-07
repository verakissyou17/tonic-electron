import styled from "styled-components";

export const StyledOrderSuccess = styled.section`
  flex: 1;
  max-width: 64rem;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow:
    2px 2px 2px rgba(0, 0, 0, 0.1),
    -2px -2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  h2 {
    text-align: center;
  }

  a {
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 0.5rem;
    opacity: 0.9;
    color: white;
    font-weight: bold;
  }

  a:hover {
    opacity: 1;
  }
`;
