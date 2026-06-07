import { StyledLink } from "../../styles/header/Header.styled";

function Logo() {
  return (
    <StyledLink to="/">
      <img src="images/react.svg" className="logo react" alt="logo" />
      <h1>Tonic Electron</h1>
    </StyledLink>
  );
}

export default Logo;
