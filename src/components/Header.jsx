import Navbar from "./Navbar";
import Logo from "./Logo";
import CartMenu from "./CartMenu";
import { HeaderStyled } from "../styles/Header.styled";


function Header() {
  return (
    <HeaderStyled>
      <Navbar />
      <Logo />
      <CartMenu />
    </HeaderStyled>
  );
}

export default Header;
