import { SidebarStyled } from "../../styles/home/Sydebar.styled";

function Sidebar({
  brands,
  selectedBrands,
  setSelectedBrands
}) {
  function handleCheckboxChange(brand) {
    setSelectedBrands((prevSelected) => {
      if (prevSelected.includes(brand)) {
        return prevSelected.filter((b) => b !== brand);
      } else {
        return [...prevSelected, brand];
      }
    });
  }

  return (
      <SidebarStyled>
        <h2>Brand</h2>
        <div className="checkbox-group">
          {brands.map((brand) => (
            <label key={brand} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleCheckboxChange(brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </SidebarStyled>
  );
}

export default Sidebar;
