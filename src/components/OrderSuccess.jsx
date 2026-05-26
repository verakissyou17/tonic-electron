import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { StyledOrderSuccess } from "../styles/OrderSucces.styled";

function OrderSuccess() {
  return (
    <StyledOrderSuccess>
      <h2 className="submitted">
        Multumim pentru comanda! Comanda a fost inregistrata cu succes!
      </h2>
      <FontAwesomeIcon
        icon={faCheck}
        style={{ color: "#28a745", fontSize: "3rem" }}
      />
      <Link to={"/orders"}>Vezi comenzile trimise</Link>
    </StyledOrderSuccess>
  );
}

export default OrderSuccess;
