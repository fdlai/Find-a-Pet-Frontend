import "../blocks/CoverPage.css";
import { Link } from "react-router-dom";

export default function CoverPage() {
  return (
    <div className="coverpage">
      <div className="coverpage__content">
        <h1 className="coverpage__title">
          Welcome to <span className="coverpage__accent-text">Find a Pet!</span>
        </h1>
        <h2 className="coverpage__text">Begin your search for a pet here</h2>
        <Link to="/pets">
          <button className="coverpage__button" type="button">
            Let's go!
          </button>
        </Link>
      </div>
    </div>
  );
}
