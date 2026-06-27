import Navbar from "./Navbar";
import Logo from "./Logo";
import CartMenu from "./CartMenu";
import ThemeIcons from "./ThemeIcons";
import { HeaderStyled } from "../../styles/header/Header.styled";

function Header() {
  return (
    <HeaderStyled>
      <Navbar />
      <Logo />
      <div className="row">
        <CartMenu />
        <ThemeIcons />
      </div>
    </HeaderStyled>
  );
}

export default Header;
