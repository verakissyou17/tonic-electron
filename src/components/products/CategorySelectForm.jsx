import { SidebarStyled } from "../../styles/products/Sydebar.styled";

function CategoryCheckboxes({
  categories,
  selectedCategories,
  setSelectedCategories,
}) {
  const handleCheckboxChange = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== categoryName),
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  return (
    <SidebarStyled>
      <h2>Categorii:</h2>
      <div className="checkbox-group">
        {categories.map((cat) => (
          <label key={cat} className="checkbox-label">
            <input
              type="checkbox"
              value={cat}
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCheckboxChange(cat)}
            />
            <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
          </label>
        ))}
      </div>
    </SidebarStyled>
  );
}

export default CategoryCheckboxes;
