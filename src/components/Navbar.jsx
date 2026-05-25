import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledNavbar } from "../styles/Navbar.styled";
import Overlay from "./Overlay";

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
              <Link
                to="/category/glass"
                className="header-link"
                onClick={toggleNav}
              >
                Glasses
              </Link>
            </li>
            <li>
              <Link
                to="/category/adapter"
                className="header-link"
                onClick={toggleNav}
              >
                Adapters
              </Link>
            </li>
            <li>
              <Link
                to="/category/cable"
                className="header-link"
                onClick={toggleNav}
              >
                Cables
              </Link>
            </li>
            <li>
              <Link
                to="/category/case"
                className="header-link"
                onClick={toggleNav}
              >
                Cases
              </Link>
            </li>
            <li>
              <Link to="/orders" className="header-link" onClick={toggleNav}>
                Comenzi
              </Link>
            </li>
          </ul>
        </nav>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
