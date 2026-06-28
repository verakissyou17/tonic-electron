import { useRef, useEffect } from "react";
import { promotions } from "../../data/promotions";
import { playCarousel } from "../../utils/playCarusel";

function PromoCarusel() {
  const promoRef = useRef(null);
  const isPaused = useRef(false);

  const promotionsCarusel = [
    ...promotions,
    ...promotions,
    ...promotions,
  ].reverse();

  useEffect(() => {
    const stopPromotions = playCarousel(isPaused, promoRef.current, -1);

    return () => {
      stopPromotions?.();
    };
  }, []);

  return (
    <section className="carousel">
      <h2>Despre noi</h2>
      <div
        className="main_row"
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
            <div className="main_row-card" key={index}>
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
    </section>
  );
}

export default PromoCarusel;
