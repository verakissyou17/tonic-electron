import { FooterBottomStyled } from "../../styles/footer/FooterBottom.styled";

function FooterBottom() {
  return (
    <FooterBottomStyled>
      <p>
        © {new Date().getFullYear()} Tonic Electron. Toate drepturile rezervate.
      </p>
    </FooterBottomStyled>
  );
}

export default FooterBottom;
