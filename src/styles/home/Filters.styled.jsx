import styled from "styled-components";

export const FiltersStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;
  background: ${(props) => props.theme.gradients.navy};

  .input-container {
    input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 1rem;
      font-size: 1rem;
    }

    input::placeholder {
      font-size: 0.65rem;
      font-family: inherit;
      font-weight: bold;
      padding-left: 0.5rem;
    }
  }

  .select-element {
    padding: 0.5rem;
    border-radius: 1rem;
  }

  @media screen and (min-width: 48rem) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    .input-container {
      width: 60%;
    }

    .select-element {
      width: 20%;
    }
  }
`;
