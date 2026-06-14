import styled from "styled-components";

export const HomeLayout = styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-md);
  border: 2px solid red;

  .sidebar-panel {
      flex-grow: 0;
  }

  @media screen and (min-width: 48rem) {
    flex-direction: row;
  }
`;
