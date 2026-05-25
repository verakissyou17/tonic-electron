import { useEffect } from "react";

function Overlay({ onClick }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return <div className="overlay" onClick={onClick} />;
}

export default Overlay;
