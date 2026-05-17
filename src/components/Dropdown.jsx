import { DropdownStyled } from "../styles/Dropdown.styled";
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
