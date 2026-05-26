import { useState} from "react";
import CartIcon from "./CartIcon";
import Overlay from "../global/Overlay";
import Dropdown from "./Dropdown";

function CartMenu() {
  const [isDropDownShown, setIsDropdownShown] = useState(false);

  function showDropdown() {
    setIsDropdownShown((prev) => !prev);
  }
  return (
    <>
      <CartIcon showDropdown={showDropdown} />
      {isDropDownShown && <Overlay onClick={() => setIsDropdownShown(false)} />}
      <Dropdown isDropDownShown={isDropDownShown} showDropdown={showDropdown} />
    </>
  );
}

export default CartMenu;
