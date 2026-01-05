import "../blocks/Contact.css";

export default function Contact() {
  return (
    <main className="contact">
      <section className="contact__container">
        <header className="contact__header">
          <h1 className="contact__title">Contact</h1>
          <p className="contact__subtitle">
            Find-a-Pet is a portfolio project. If you’d like to discuss the
            implementation, collaborate, or ask questions about the code, feel
            free to reach out.
          </p>

          <p className="contact__disclaimer">
            This project is not a live adoption service. Please do not use this
            page for pet adoption inquiries.
          </p>
        </header>

        <section className="contact__section contact__section--panel">
          <h2 className="contact__heading">Reach me here</h2>

          <div className="contact__cards">
            <a
              className="contact__card"
              href="mailto:YOUR_EMAIL_HERE"
              aria-label="Email Fred Lai"
            >
              <div className="contact__cardLabel">Email</div>
              <div className="contact__cardValue">iamfdlai@gmail.com</div>
              <div className="contact__cardHint">Best for quick questions</div>
            </a>

            <a
              className="contact__card"
              href="https://github.com/fdlai"
              target="_blank"
              rel="noopener"
              aria-label="Open GitHub profile"
            >
              <div className="contact__cardLabel">GitHub</div>
              <div className="contact__cardValue">github.com/fdlai</div>
              <div className="contact__cardHint">Projects & source code</div>
            </a>

            <a
              className="contact__card"
              href="https://www.linkedin.com/in/fred-lai/"
              target="_blank"
              rel="noopener"
              aria-label="Open LinkedIn profile"
            >
              <div className="contact__cardLabel">LinkedIn</div>
              <div className="contact__cardValue">linkedin.com/in/fred-lai</div>
              <div className="contact__cardHint">Professional background</div>
            </a>
          </div>
        </section>

        <section className="contact__section">
          <h2 className="contact__heading">What to include</h2>

          <ul className="contact__list">
            <li>A short description of what you’re reaching out about</li>
            <li>
              A link to the page or feature you’re referring to (if applicable)
            </li>
            <li>
              Any relevant context (screenshots, error messages, or repo links)
            </li>
          </ul>
        </section>

        <section className="contact__section contact__section--note">
          <h2 className="contact__heading">Common topics</h2>

          <div className="contact__chips" role="list">
            <span className="contact__chip" role="listitem">
              Geospatial search
            </span>
            <span className="contact__chip" role="listitem">
              Autocomplete strategy
            </span>
            <span className="contact__chip" role="listitem">
              Filtering & query design
            </span>
            <span className="contact__chip" role="listitem">
              React Router routes
            </span>
            <span className="contact__chip" role="listitem">
              UI polish / accessibility
            </span>
          </div>
        </section>
      </section>
    </main>
  );
}
