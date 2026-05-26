import { useCart } from "../../context/useCart.js";
import DropdownRow from "./DropdownRow.jsx";
import DropdownFooter from "./DropdownFooter.jsx";

function DropdownContent({ showDropdown }) {
  const { cart, deleteFromCart, matchingItems, totalCart, totalQuantity } =
    useCart();

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
      <DropdownFooter
        showDropdown={showDropdown}
        totalCart={totalCart}
        totalQuantity={totalQuantity}
      />
    </div>
  );
}

export default DropdownContent;
