import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function IntroDropdown({ showDropdown }) {
  return (
    <div className="intro row">
      <h3>Cos</h3>
      <FontAwesomeIcon icon={faClose} onClick={showDropdown} />
    </div>
  );
}

export default IntroDropdown;
