import logo from "../assets/react.svg";
import { StyledLink } from "../styles/Header.styled";

function Logo() {
  return (
    <StyledLink to="/">
      <img src={logo} className="logo react" alt="logo" />
      <h1>Tonic Electron</h1>
    </StyledLink>
  );
}

export default Logo;
