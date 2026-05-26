import { useNavigate } from "react-router-dom";

function SearchBar({inputValue, setInputValue }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputValue.trim()) {
      navigate(`/?search=${encodeURIComponent(inputValue.trim())}`);
      setInputValue("");                    
    }
  };

  return (
    <div className="input-container">
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
    </div>
  );
}

export default SearchBar;
