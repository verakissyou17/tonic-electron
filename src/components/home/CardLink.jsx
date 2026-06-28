import { Link } from "react-router-dom";
import { formatMoney } from "../../utils/formatMoney";

function CardLink({ product}) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="main_row-card card"  
    >
      <h3>{product.name}</h3>
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <span className="brand">{product.brand}</span>
        <p className="price">{formatMoney(product.price)} lei</p>
      </div>
    </Link>
  );
}

export default CardLink;
