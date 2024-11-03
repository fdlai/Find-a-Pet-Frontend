import "../blocks/CoverPage.css";
import { useNavigate, Navigate } from "react-router-dom";

export default function CoverPage() {
  const navigate = useNavigate();
  const hasVisited = localStorage.getItem("hasVisited") === "true";

  function handleButtonClick() {
    localStorage.setItem("hasVisited", "true");
    navigate("/pets");
  }

  if (hasVisited) {
    return <Navigate to="/pets" replace />;
  }
  return (
    <div className="coverpage">
      <div className="coverpage__content">
        <h1 className="coverpage__title">
          Welcome to <span className="coverpage__accent-text">Find a Pet!</span>
        </h1>
        <h2 className="coverpage__text">Begin your search for a pet here</h2>
        <button
          className="coverpage__button"
          type="button"
          onClick={handleButtonClick}
        >
          Let's go!
        </button>
      </div>
    </div>
  );
}
