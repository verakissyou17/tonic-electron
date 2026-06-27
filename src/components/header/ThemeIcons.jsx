import { useTheme } from "../../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeIconsStyled } from "../../styles/header/ThemeIcons.styled";

function ThemeIcons() {
  const { toggleTheme, themeName } = useTheme();

  return (
    <ThemeIconsStyled $isDark={themeName === "dark"}
      onClick={toggleTheme}>
      <div className="ball"></div>
      <FontAwesomeIcon className="faSun" icon={faSun} />
      <FontAwesomeIcon className="faMoon" icon={faMoon} />
    </ThemeIconsStyled>
  );
}

export default ThemeIcons;
