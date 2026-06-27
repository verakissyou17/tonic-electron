import { ProductsMainStyled } from "../../styles/products/ProductsMain.styled";
import Filters from "../../components/products/Filters.jsx";
import ProductCard from "./ProductCard";
function ProductsMain({ products, selectedValue, setSelectedValue }) {
  return (
    <ProductsMainStyled>
      <Filters
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </ProductsMainStyled>
  );
}

export default ProductsMain;
