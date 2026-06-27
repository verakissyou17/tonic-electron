import { useNavigate } from "react-router-dom";
import { SearchBarStyled } from "../../styles/globals/SearchBar.styled";

function SearchBar({inputValue, setInputValue }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputValue.trim()) {
      navigate(`/products/?search=${encodeURIComponent(inputValue.trim())}`);
      setInputValue("");                    
    }
  };

  return (
    <SearchBarStyled>
      <label htmlFor="search" className="sr-only"></label>
      <input
        placeholder="Search..."
        type="text"
        name="search"
        id="search"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </SearchBarStyled>
  );
}

export default SearchBar;
