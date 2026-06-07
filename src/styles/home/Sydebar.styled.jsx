import styled from "styled-components";

export const SidebarStyled = styled.aside`
  margin-bottom: 1rem;
  padding: 1.5rem;
  height: fit-content;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow:
    2px 2px 5px rgba(59, 59, 59, 0.25),
    -2px -2px 5px rgba(59, 59, 59, 0.25);

  h3 {
    margin-block: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.navy.medium};
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;

    @media screen and (min-width: 48rem) {
      flex-direction: column;
    }
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 1rem;
    color: #2f425c;
    transition: color 0.3s ease;

    input {
      width: 1rem;
      height: 1rem;
    }

    &:hover {
      color: #000;
    }
  }
`;
