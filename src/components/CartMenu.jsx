import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";
import Overlay from "./Overlay";
import Dropdown from "./Dropdown";

function CartMenu() {
  const [isDropDownShown, setIsDropdownShown] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isDropDownShown ? "hidden" : "auto";
  }, [isDropDownShown]);

  function showDropdown() {
    setIsDropdownShown((prev) => !prev);
  }
  return (
    <>
      <CartIcon showDropdown={showDropdown} />
      <Overlay
        isDropDownShown={isDropDownShown}
        setIsDropdownShown={setIsDropdownShown}
      />
      <Dropdown isDropDownShown={isDropDownShown} showDropdown={showDropdown} />
    </>
  );
}

export default CartMenu;
