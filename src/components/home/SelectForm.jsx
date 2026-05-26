function SelectForm({ selectedValue, setSelectedValue }) {
  return (
    <select
      className="select-element"
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    >
      <option value="default">Implicite</option>
      <option value="price-asc">Pret crescator</option>
      <option value="price-desc">Pret descrescator</option>
      <option value="name-asc">Nume: A - Z</option>
    </select>
  );
}

export default SelectForm;
