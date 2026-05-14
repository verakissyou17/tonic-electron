import { HomeMainStyled } from "../styles/HomeMain.styled";
import ProductCard from "./ProductCard";

function HomeMain({displayedProducts}) {

  return (
    <HomeMainStyled>
      {displayedProducts.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
          />
        );
      })}
    </HomeMainStyled>
  );
}

export default HomeMain;
