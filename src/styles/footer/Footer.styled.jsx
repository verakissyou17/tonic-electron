import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: ${({theme}) => theme.gradients.primaryInverse};
  color: ${({theme}) => theme.colors.text.primary};
  padding: ${({theme}) => theme.spacing.lg} ${({theme}) => theme.spacing.md};
  margin-top: ${({theme}) => theme.spacing.xl};

  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.spacing.xl};
    max-width: clamp(25rem, 11.268rem + 58.592vw, 64rem);
    margin: 0 auto; 
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.sm};
    min-width: 11rem;
  }

  .footer-section a {
    color: ${({theme}) => theme.colors.text.primary};
    transition: 0.2s;
  }

  .footer-section a:hover {
    color: ${({theme}) => theme.colors.text.secondary};
  }
`;
