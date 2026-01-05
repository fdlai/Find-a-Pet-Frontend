import "../blocks/Privacy.css";

export default function Privacy() {
  return (
    <main className="privacy">
      <section className="privacy__container">
        <header className="privacy__header">
          <h1 className="privacy__title">Privacy Policy</h1>
          <p className="privacy__subtitle">
            Find-a-Pet is a portfolio project built to demonstrate full-stack
            development skills. This page explains what data the app does (and
            does not) collect.
          </p>

          <p className="privacy__badge">
            Summary: No real adoption data • Mock pet listings • Minimal data
            collection
          </p>
        </header>

        <section className="privacy__section privacy__section--panel">
          <h2 className="privacy__heading">What we collect</h2>

          <p className="privacy__text">
            Find-a-Pet does not require accounts and does not intentionally
            collect personal information such as your name, address, or payment
            details.
          </p>

          <ul className="privacy__list">
            <li>
              <strong>Search inputs:</strong> If you type a city or ZIP code,
              that value is used to fetch results and display autocomplete
              suggestions.
            </li>
            {/* <li>
              <strong>Approximate location:</strong> If you choose to use your
              browser’s location feature, coordinates are used to show nearby
              results.
            </li> */}
          </ul>
        </section>

        <section className="privacy__section">
          <h2 className="privacy__heading">What we don’t collect</h2>

          <ul className="privacy__list">
            <li>No user accounts</li>
            <li>No passwords</li>
            <li>No payments</li>
            <li>No real adoption submissions</li>
            <li>No sale of personal information</li>
          </ul>

          <p className="privacy__note">
            This project is not a live adoption service and does not list real
            pets.
          </p>
        </section>

        <section className="privacy__section privacy__section--panel">
          <h2 className="privacy__heading">Mock data</h2>

          <p className="privacy__text">
            All pet listings and pet “news” content in Find-a-Pet are mock/demo
            data. The app is designed to demonstrate realistic product behavior
            (search, filters, detail pages, and routing) using a custom backend
            and database.
          </p>
        </section>

        <section className="privacy__section">
          <h2 className="privacy__heading">Cookies & local storage</h2>

          <p className="privacy__text">
            Find-a-Pet does not use cookies for advertising.
          </p>

          <ul className="privacy__list">
            <li>
              <strong>Local storage:</strong> May be used for basic UI
              preferences (for example, remembering search filters).
            </li>
            <li>
              <strong>Cookies:</strong> May be set automatically by the hosting
              provider or browser, but this app does not use cookies for
              tracking ads.
            </li>
          </ul>
        </section>

        <section className="privacy__section privacy__section--footer">
          <h2 className="privacy__heading">Questions</h2>
          <p className="privacy__text">
            If you have questions about this portfolio project or how it works,
            you can reach out via the links on the Contact page.
          </p>

          <p className="privacy__updated">Last updated: January 2026</p>
        </section>
      </section>
    </main>
  );
}
