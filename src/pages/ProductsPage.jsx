import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Products from "../components/Products";


function ProductsPage({
  products,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

 if (!filteredProducts.length) {
  return <Navigate to="*" />
 };
  
  return (
    <>
      <Header />
      <Products
        filteredProducts={filteredProducts}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </>
  );
}

export default ProductsPage;
