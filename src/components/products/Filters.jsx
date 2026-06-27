import SelectForm from "./SelectForm";
import { FiltersStyled } from "../../styles/products/Filters.styled";

function Filters ({
  selectedValue,
  setSelectedValue,
}) {
  return (
    <FiltersStyled>
      <label htmlFor="sorting" className="sr-only">Sortare produse</label>
      <SelectForm
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </FiltersStyled>
  );
}

export default Filters;
