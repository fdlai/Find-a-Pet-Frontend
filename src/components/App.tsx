import "../blocks/App.css";
import CoverPage from "./CoverPage";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Results from "./Results";
import { Routes, Route } from "react-router-dom";
import PetInfo from "./PetInfo";
import ScrollToTop from "./ScrollToTop";
import About from "./About";
import Contact from "./Contact";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Accessibility from "./Accessibility";

function App() {
  return (
    <>
      <ScrollToTop />
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
                  <Route path="/info/:id" element={<PetInfo />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/accessibility" element={<Accessibility />} />
                </Routes>
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="*" element={<div>Route does not exist!</div>} />
      </Routes>
    </>
  );
}

export default App;
