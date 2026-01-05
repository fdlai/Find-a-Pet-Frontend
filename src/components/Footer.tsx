import { Link } from "react-router-dom";
import "../blocks/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="footer__logo" href="/">
            Find-a-Pet
          </a>
          <p className="footer__tagline">
            Helping people discover adoptable pets near them. One match at a
            time. 🐾
          </p>
        </div>

        <nav className="footer__nav">
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__list">
            <li>
              <Link className="footer__link" to="/pets/about">
                About
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/pets/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/pets/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/pets/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/pets/accessibility">
                Accessibility
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer__cta">
          <h4 className="footer__heading">Get alerts</h4>
          <p className="footer__copy">
            Email me when new pets appear near my ZIP.
          </p>
          <form className="footer__form" action="/subscribe" method="post">
            <input
              className="footer__input"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
            <button className="footer__button" type="submit">
              Subscribe
            </button>
          </form>
          <div className="footer__social">
            <a
              className="footer__icon"
              href="https://github.com/fdlai"
              aria-label="GitHub"
            >
              GH
            </a>
          </div>
        </div>
      </div>

      <div className="footer__legal">
        <div className="container footer__legal-inner">
          <small>
            © <span id="y"></span> Find-a-Pet
          </small>
          <small>Made with ❤️ to help people find pets.</small>
          <button
            className="footer__top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
