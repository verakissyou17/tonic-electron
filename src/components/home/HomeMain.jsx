import { HomeMainStyled } from "../../styles/home/HomeMain.styled";
import ProductCard from "./ProductCard";

function HomeMain({products}) {

  return (
    <HomeMainStyled>
      {products.map((product) => {
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
