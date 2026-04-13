import { Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HeaderStyled, StyledLink } from "../styles/Header.styled";

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  const showNav = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <HeaderStyled>
      <nav className={isVisible ? "hidden" : "nav-shown"}>
        <button onClick={showNav} className="close-nav">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul>
          <li>
            <Link
              to="/category/glass"
              className="header-link"
              onClick={showNav}
            >
              Glasses
            </Link>
          </li>
          <li>
            <Link
              to="/category/adapter"
              className="header-link"
              onClick={showNav}
            >
              Adapters
            </Link>
          </li>
          <li>
            <Link
              to="/category/cable"
              className="header-link"
              onClick={showNav}
            >
              Cables
            </Link>
          </li>
          <li>
            <Link to="/category/case" className="header-link" onClick={showNav}>
              Cases
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={showNav}
        className={isVisible ? "btn-visible" : "hidden"}
      >
        <FontAwesomeIcon icon={faBars} className="hamburger" />
      </button>
      <StyledLink to="/">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Tonic Electron</h1>
      </StyledLink>
      <div className="image-container">
        <img
          src="/images/shopping-cart.svg"
          alt="shopping-cart"
          className="cart-icon"
        />
      </div>
    </HeaderStyled>
  );
}

export default Header;
