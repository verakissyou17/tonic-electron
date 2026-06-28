import Arrows from "../home/Arrows";
import CardLink from "../home/CardLink";

function BrandsCarousel({ title, products, brandRef }) {
  return (
    <section className="carousel">
      <h2>{title}</h2>
      <Arrows elementRef={brandRef} />
      <div ref={brandRef} className="main_row">
        {products.map((product, index) => {
          return <CardLink product={product} key={`${product.id}-${index}`} />;
        })}
      </div>
    </section>
  );
}

export default BrandsCarousel;
