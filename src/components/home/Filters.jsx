import SearchBar from ".//SearchBar";
import SelectForm from "./SelectForm";
import { FiltersStyled } from "../../styles/home/Filters.styled";

function Filters ({
  inputValue,
  setInputValue,
  selectedValue,
  setSelectedValue,
}) {
  return (
    <FiltersStyled>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <SelectForm
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </FiltersStyled>
  );
}

export default Filters;
