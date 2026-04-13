import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #060606;
  padding: clamp(1rem, 0.824rem + 0.751vw, 1.5rem);
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  h1 {
    text-transform: uppercase;
    color: rgb(7, 207, 238);
    font-size: clamp(1.5rem, 0.268rem + 5.258vw, 5rem);
    line-height: 1;
  }

  .logo {
    height: clamp(1.5rem, 0.268rem + 5.258vw, 5rem);
    animation: logo-spin infinite 10s linear;
  }

  .logo.react:hover {
    animation-duration: 1s;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
