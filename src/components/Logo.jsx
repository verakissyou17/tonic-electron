import reactLogo from "../assets/react.svg";
import { StyledLink } from "../styles/Header.styled";

function Logo() {
  return (
    <StyledLink to="/">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Tonic Electron</h1>
    </StyledLink>
  );
}

export default Logo;
