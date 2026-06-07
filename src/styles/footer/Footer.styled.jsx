import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #fff;
  padding: 1.5rem 1rem;
  margin-top: 2rem;

  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 180px;
  }

  .footer-section a {
    color: #bbb;
    transition: 0.2s;
  }

  .footer-section a:hover {
    color: #fff;
  }
`;
