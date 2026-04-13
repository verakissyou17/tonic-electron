import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Products from "../components/Products";

function ProductsPage({products}) {
  const { category } = useParams();

    const filteredProducts = products.filter(
    product => product.category === category
  );

  if(!filteredProducts) return;

  return (
    <>
      <Header />
      <Products filteredProducts={filteredProducts} />
    </>
  );
}

export default ProductsPage;
