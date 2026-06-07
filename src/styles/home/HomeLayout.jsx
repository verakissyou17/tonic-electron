import styled from "styled-components";

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;

  .sidebar-panel {
      flex-grow: 0;
  }

  @media screen and (min-width: 48rem) {
    flex-direction: row;
  }
`;
