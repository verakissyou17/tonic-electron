import React from "react";

function Overlay({ isDropDownShown, setIsDropdownShown }) {
  return (
    <>
      {isDropDownShown && (
        <div className="overlay" onClick={() => setIsDropdownShown(false)} />
      )}
    </>
  );
}

export default Overlay;
