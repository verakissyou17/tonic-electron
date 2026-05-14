import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  const showNav = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <button
        onClick={showNav}
        className={isVisible ? "btn-visible" : "hidden"}
      >
        <FontAwesomeIcon icon={faBars} className="hamburger" />
      </button>
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
    </>
  );
}

export default Navbar;
