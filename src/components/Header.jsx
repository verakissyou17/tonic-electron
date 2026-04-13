import reactLogo from "../assets/react.svg";
import { HeaderStyled } from "../styles/Header.styled";

function Header() {
  return (
    <HeaderStyled>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Tonic Electron</h1>
    </HeaderStyled>
  );
}

export default Header;
