import "../blocks/App.css";
import CoverPage from "./CoverPage";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route
        path="main"
        element={
          <div className="page">
            <div className="page__content">
              <Header />
              <Main />
            </div>
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
