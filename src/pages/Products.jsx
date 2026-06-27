import { useState } from "react";
import { useParams, Navigate, useSearchParams } from "react-router-dom";
import ProductsMain from "../components/products/ProductsMain";
import Sidebar from "../components/products/Sidebar";
import CategoryCheckboxes from "../components/products/CategorySelectForm";
import Footer from "../components/footer/Footer";
import { ProductsStyled } from "../styles/products/Products.styled";
import { useProducts } from "../hooks/useProducts";

function Products() {
  const { products, categories } = useProducts();
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const [selectedValue, setSelectedValue] = useState("default");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  if (category && !categories.includes(category)) {
    return <Navigate to="*" />;
  }

  const availableBrands = [
    ...new Set(products.map((p) => p.brand).filter(Boolean)),
  ];

  const filteredProducts = products.filter((p) => {
    if (searchTerm.trim()) {
      return p.name.toLowerCase().includes(searchTerm.toLowerCase());
    }

    if (category && p.category !== category) {
      return false;
    }

    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(p.category)
    ) {
      return false;
    }

    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
      return false;
    }
    return true;
  });

  const getSortedProducts = (productsToSort) => {
    const productsCopy = [...productsToSort];

    if (selectedValue === "price-asc") {
      return productsCopy.sort((a, b) => a.price - b.price);
    }
    if (selectedValue === "price-desc") {
      return productsCopy.sort((a, b) => b.price - a.price);
    }
    if (selectedValue === "name-asc") {
      return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
    }
    return productsCopy;
  };

  const displayedProducts = getSortedProducts(filteredProducts);
  const hasResults = displayedProducts.length > 0;

  return (
    <>
      <ProductsStyled>
        <div className="sidebar-panel">
          <Sidebar
            brands={availableBrands}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          <CategoryCheckboxes
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        {hasResults ? (
            <ProductsMain products={displayedProducts} selectedValue={selectedValue} setSelectedValue=
            {setSelectedValue} />
        ) : (
          <h1 style={{ textAlign: "center" }}>Not found</h1>
        )}
      </ProductsStyled>
      <Footer />
    </>
  );
}

export default Products;
