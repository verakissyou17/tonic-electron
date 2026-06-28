import { useRef, useMemo } from "react";
import { useProducts } from "../hooks/useProducts";
import { filterByBrand } from "../utils/filterByBrand";
import { HomeStyled } from "../styles/home/Home.styled";
import PromoCarusel from "../components/home/PromoCarusel";
import BrandsCarousel from "../components/home/BrandsCarousel";
import Footer from "../components/footer/Footer";

function Home() {
  const { products } = useProducts();
  const appleRef = useRef(null);
  const samsungRef = useRef(null);

  const appleCarusel = useMemo(() => {
    const appleProducts = filterByBrand(products, "apple");
    return [...appleProducts, ...appleProducts];
  }, [products]);

  const samsungCarusel = useMemo(() => {
    const samsungProducts = filterByBrand(products, "samsung");
    return [...samsungProducts, ...samsungProducts];
  }, [products]);

  return (
    <>
      <HomeStyled>
        <PromoCarusel />

        <BrandsCarousel
          title={"Produse Apple"}
          products={appleCarusel}
          brandRef={appleRef}
        />

        <BrandsCarousel
          title={"Produse Samsung"}
          products={samsungCarusel}
          brandRef={samsungRef}
        />
      </HomeStyled>
      <Footer />
    </>
  );
}

export default Home;
