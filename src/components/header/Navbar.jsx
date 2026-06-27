import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledNavbar } from "../../styles/header/Navbar.styled";
import Overlay from "../global/Overlay";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNav = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      {isVisible && <Overlay onClick={toggleNav} />}
      <StyledNavbar $isVisible={isVisible}>
        <button
          aria-label="Deschide meniul de navigare"
          className="hamburger"
          onClick={toggleNav}
        >
          <FontAwesomeIcon
            aria-hidden="true"
            icon={faBars}
            className="fa-bars"
          />
        </button>
        <nav className="nav-bar">
          <button
            aria-label="Închide meniul"
            onClick={toggleNav}
            className="close-nav"
          >
            <FontAwesomeIcon aria-hidden="true" icon={faXmark} />
          </button>
          <ul>
            <li>
              <Link to="/products" className="header-link" onClick={toggleNav}>
                Produse
              </Link>
            </li>
            <li>
              <Link to="/orders" className="header-link" onClick={toggleNav}>
                Comenzi
              </Link>
            </li>
            <li>
              <Link
                to="/products/category/glass"
                className="header-link"
                onClick={toggleNav}
              >
                Folii protectie
              </Link>
            </li>
            <li>
              <Link
                to="/products/category/adapter"
                className="header-link"
                onClick={toggleNav}
              >
                Adaptoare
              </Link>
            </li>
            <li>
              <Link
                to="/products/category/cable"
                className="header-link"
                onClick={toggleNav}
              >
                Cabluri
              </Link>
            </li>
            <li>
              <Link
                to="/products/category/case"
                className="header-link"
                onClick={toggleNav}
              >
                Huse
              </Link>
            </li>
          </ul>
        </nav>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
