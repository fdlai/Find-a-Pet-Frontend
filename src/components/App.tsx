import "../blocks/App.css";
import CoverPage from "./CoverPage";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Results from "./Results";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route
        path="/pets/*"
        element={
          <div className="page">
            <div className="page__content">
              <Header />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/search/:query" element={<Results />} />
              </Routes>
            </div>
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
