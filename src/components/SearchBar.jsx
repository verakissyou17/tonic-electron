import { StyledSearchBar } from "../styles/HomeMain.styled";

function SearchBar({inputValue, setInputValue, setSearchTerm }) {
  return (
    <StyledSearchBar>
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
            setSearchTerm(inputValue);
            setInputValue("");
          }
        }}
      />
    </StyledSearchBar>
  );
}

export default SearchBar;
