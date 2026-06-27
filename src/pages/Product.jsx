import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/products/ProductCard";
import PageNotFound from "./PageNotFound";
import {StyledProduct} from "../styles/product/Product.styled";

function Product() {
  const { products } = useProducts();
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <PageNotFound />;
  }

  return (
    <StyledProduct>
      <ProductCard product={product} />
    </StyledProduct>
  );
}

export default Product;
