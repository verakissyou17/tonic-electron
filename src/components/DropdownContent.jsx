import { useProducts } from "../context/useProducts.js";
import { useCart } from "../context/useCart.js";
import DropdownRow from "./DropdownRow.jsx";
import DropdownFooter from "./DropdownFooter.jsx";

function DropdownContent({showDropdown}) {
  const { products } = useProducts();
  const { cart, deleteFromCart } = useCart();

  const matchingItems = cart
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.productId);
      return { ...cartItem, product };
    })
    .filter((item) => item.product);

  const totalCart = matchingItems.reduce(
    (sum, item) => sum + (item.product.price / 100) * item.quantity,
    0,
  );

  const totalQuantity = matchingItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <p style={{ textAlign: "center", padding: "1rem" }}>Cosul este gol</p>
    );
  }

  return (
    <div>
      <div className="head row">
        <p>Denumire produs</p>
        <p>Total</p>
      </div>
      {matchingItems.map((item, index) => (
        <DropdownRow
          key={item.productId}
          item={item}
          isLast={index === matchingItems.length - 1}
          deleteFromCart={deleteFromCart}
        />
      ))}
      <DropdownFooter showDropdown={showDropdown} totalCart={totalCart} totalQuantity={totalQuantity} />
    </div>
  );
}

export default DropdownContent;
