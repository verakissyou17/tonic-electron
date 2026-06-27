import { Link } from "react-router-dom";
import { FooterStyled } from "../../styles/footer/Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer-container">
        <section className="footer-section">
          <h2>Tonic Electron</h2>
          <p>Produse de calitate la prețuri accesibile.</p>
        </section>

        <section className="footer-section">
          <h2>Link-uri utile</h2>
          <Link to="/">Acasă</Link>
           <Link to="/products">Produse</Link>
          <Link to="/orders">Comenzi</Link>
          <Link to="/cart">Coș</Link>
        </section>

        <section className="footer-section">
          <h2>Contact</h2>
          <p>Email: tonicelectron@gmail.com</p>
          <p>Tel: 0700 000 000</p>
        </section>
      </div>
    </FooterStyled>
  );
}

export default Footer;
