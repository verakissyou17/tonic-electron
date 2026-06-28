import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledHomeHero } from "../../styles/home/HomeHero.styled";

function HomeHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledHomeHero $isHovered={isHovered}>
      <div
        className="images-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="image-container">
          <img
            src="/images/products/cases/transparent-iphone-case.webp"
            alt="image"
          />
        </div>
      </div>
      <section className="hero">
        <h2>Protejează ceea ce contează.</h2>
        <p>
          Folii premium, huse rezistente și accesorii atent selecționate pentru
          dispozitivele tale preferate.
        </p>
        <Link to={"/products"}>Descoperă colecția →</Link>
      </section>
    </StyledHomeHero>
  );
}

export default HomeHero;
