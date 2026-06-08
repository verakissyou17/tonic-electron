import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: var(--gr-primary-inverse);
  color: var(--cl-white);
  padding: var(--space-lg) var(--space-md);
  margin-top: var(--space-xl);

  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-xl);
    max-width: clamp(25rem, 11.268rem + 58.592vw, 64rem);
    margin: 0 auto; 
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    min-width: 11rem;
  }

  .footer-section a {
    color: var(--cl-white);
    transition: 0.2s;
  }

  .footer-section a:hover {
    color: var(--cl-text-secondary);
  }
`;
