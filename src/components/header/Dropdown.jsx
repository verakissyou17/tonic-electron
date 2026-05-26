import { DropdownStyled } from "../../styles/header/Dropdown.styled.jsx";
import IntroDropdown from "./IntroDropdown.jsx";
import DropdownContent from "./DropdownContent.jsx";

function Dropdown({ isDropDownShown, showDropdown }) {

  return (
    <DropdownStyled $isDropDownShown={isDropDownShown}>
      <IntroDropdown showDropdown={showDropdown} />
      <DropdownContent showDropdown={showDropdown} />
    </DropdownStyled>
  );
}

export default Dropdown;
