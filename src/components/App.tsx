import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
