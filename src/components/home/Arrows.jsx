import { useRef } from "react";
import { slideCards } from "../../utils/slideCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Arrows({ elementRef }) {
  const positionRef = useRef(0);

  return (
    <div className="row">
      <FontAwesomeIcon
        className="arrow"
        icon={faCircleChevronLeft}
        onClick={() => slideCards(elementRef.current, -1, positionRef)}
      />
      <FontAwesomeIcon
        className="arrow"
        icon={faCircleChevronRight}
        onClick={() => slideCards(elementRef.current, 1, positionRef)}
      />
    </div>
  );
}

export default Arrows;
