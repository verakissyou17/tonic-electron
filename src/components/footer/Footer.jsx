import { FooterStyled } from "../../styles/footer/Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer-container">
        <section className="footer-section">
          <h3>Tonic Electron</h3>
          <p>Produse de calitate la prețuri accesibile.</p>
        </section>

        <section className="footer-section">
          <h4>Link-uri utile</h4>
          <a href="/">Acasă</a>
          <a href="/orders">Comenzi</a>
          <a href="/cart">Coș</a>
        </section>

        <section className="footer-section">
          <h4>Contact</h4>
          <p>Email: tonicelectron@gmail.com</p>
          <p>Tel: 0700 000 000</p>
        </section>
      </div>
    </FooterStyled>
  );
}

export default Footer;
