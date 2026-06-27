import { useEffect, useRef, useMemo } from "react";
import { useProducts } from "../hooks/useProducts";
import { formatMoney } from "../utils/formatMoney";
import { promotions } from "../data/promotions";
import { playCarousel } from "../utils/playCarusel";
import { slideCards } from "../utils/slideCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { HomeStyled } from "../styles/home/Home.styled";
import Footer from "../components/footer/Footer";

function Home() {
  const { products } = useProducts();
  const promoRef = useRef(null);
  const appleRef = useRef(null);
  const samsungRef = useRef(null);
  const positionRef = useRef(0);
  const isPaused = useRef(false);

  const promotionsCarusel = [
    ...promotions,
    ...promotions,
    ...promotions,
  ].reverse();

  const appleProducts = products.filter((product) =>
    product.brand.toLowerCase().split(/\s+/).includes("apple".toLowerCase()),
  );

  const samsungProducts = products.filter((product) =>
    product.brand.toLowerCase().split(/\s+/).includes("samsung".toLowerCase()),
  );

  const appleCarusel = useMemo(() => {
    return [...appleProducts, ...appleProducts];
  }, [appleProducts]);

  const samsungCarusel = useMemo(() => {
    return [...samsungProducts, ...samsungProducts];
  }, [samsungProducts]);

  useEffect(() => {
    const stopPromotions = playCarousel(isPaused, promoRef.current, -1);

    return () => {
      stopPromotions?.();
    };
  }, []);

  return (
    <>
      <HomeStyled>
        <h2>Despre noi</h2>
        <div className="main-promo">
          <div
            className="main-row row"
            ref={promoRef}
            onMouseEnter={() => {
              isPaused.current = true;
            }}
            onMouseLeave={() => {
              isPaused.current = false;
            }}
            onTouchStart={() => {
              isPaused.current = true;
            }}
            onTouchEnd={() => {
              isPaused.current = false;
            }}
          >
            {promotionsCarusel.map((promotion, index) => {
              return (
                <div className="main-row-container" key={index}>
                  <h3>{promotion.title}</h3>
                  <div className="image-container">
                    <img src={promotion.image} alt={promotion.title} />
                  </div>
                  <div>
                    <p className="main-row-subtitle">{promotion.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <h2>Produse Apple</h2>
        <div className="arrows">
          <FontAwesomeIcon
            className="arrow"
            icon={faCircleChevronLeft}
            onClick={() => slideCards(appleRef.current, -1, positionRef)}
          />
          <FontAwesomeIcon
            className="arrow"
            icon={faCircleChevronRight}
            onClick={() => slideCards(appleRef.current, 1, positionRef)}
          />
        </div>

        <div ref={appleRef} className="main-row row">
          {appleCarusel.map((product, index) => {
            return (
              <div
                className="main-row-container card"
                key={`${product.id}-${index}`}
              >
                <h3>{product.name}</h3>
                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <div>
                  <span className="brand">{product.brand}</span>
                  <p className="price">{formatMoney(product.price)} lei</p>
                </div>
              </div>
            );
          })}
        </div>

        <h2>Produse Samsung</h2>
        <div className="arrows">
          <FontAwesomeIcon
            className="arrow"
            icon={faCircleChevronLeft}
            onClick={() => slideCards(samsungRef.current, -1, positionRef)}
          />
          <FontAwesomeIcon
            className="arrow"
            icon={faCircleChevronRight}
            onClick={() => slideCards(samsungRef.current, 1, positionRef)}
          />
        </div>

        <div ref={samsungRef} className="main-row row">
          {samsungCarusel.map((product, index) => {
            return (
              <div
                className="main-row-container card"
                key={`${product.id}-${index}`}
              >
                <h3>{product.name}</h3>
                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <div>
                  <span className="brand">{product.brand}</span>
                  <p className="price">{formatMoney(product.price)} lei</p>
                </div>
              </div>
            );
          })}
        </div>
      </HomeStyled>
      <Footer />
    </>
  );
}

export default Home;
