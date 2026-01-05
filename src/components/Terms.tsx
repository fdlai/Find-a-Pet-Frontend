import "../blocks/Terms.css";

export default function Terms() {
  return (
    <main className="terms">
      <section className="terms__container">
        <header className="terms__header">
          <h1 className="terms__title">Terms of Use</h1>
          <p className="terms__subtitle">
            Find-a-Pet is a portfolio project built to demonstrate full-stack
            development skills. These terms explain how the site should be used
            and what it does not provide.
          </p>

          <p className="terms__badge">
            Summary: Demo project • No real adoptions • Use at your own
            discretion
          </p>
        </header>

        <section className="terms__section terms__section--panel">
          <h2 className="terms__heading">1) Portfolio project disclaimer</h2>
          <p className="terms__text">
            Find-a-Pet is a demonstration application intended for portfolio and
            educational purposes. It is not a live pet adoption service and is
            not affiliated with animal shelters, rescues, or third-party
            adoption platforms.
          </p>
        </section>

        <section className="terms__section">
          <h2 className="terms__heading">
            2) No real pet listings or transactions
          </h2>
          <ul className="terms__list">
            <li>Pet listings and pet “news” content are mock/demo data.</li>
            <li>
              The site does not process applications, payments, adoption
              requests, or reservations.
            </li>
            <li>
              Any actions taken based on the content of this site are at the
              user’s discretion.
            </li>
          </ul>
        </section>

        <section className="terms__section terms__section--panel">
          <h2 className="terms__heading">3) Acceptable use</h2>
          <p className="terms__text">
            You agree to use the site in a respectful and lawful way. In
            particular, you agree not to:
          </p>
          <ul className="terms__list">
            <li>
              Attempt to disrupt or overload the application (e.g., abuse search
              endpoints).
            </li>
            <li>
              Probe, scan, or test the site for vulnerabilities without
              permission.
            </li>
            <li>Upload or submit malicious content.</li>
            <li>Attempt to access data you are not authorized to access.</li>
          </ul>
        </section>

        <section className="terms__section">
          <h2 className="terms__heading">4) Availability and changes</h2>
          <p className="terms__text">
            The project may be updated, changed, or taken offline at any time.
            Features and data may change without notice as part of ongoing
            development and experimentation.
          </p>
        </section>

        <section className="terms__section terms__section--panel">
          <h2 className="terms__heading">5) Disclaimer of warranties</h2>
          <p className="terms__text">
            This site is provided “as is” without warranties of any kind. While
            efforts are made to keep the project stable and accurate for
            demonstration, no guarantees are made regarding correctness,
            availability, or fitness for any particular purpose.
          </p>
        </section>

        <section className="terms__section">
          <h2 className="terms__heading">6) Limitation of liability</h2>
          <p className="terms__text">
            To the extent permitted by law, the creator of Find-a-Pet will not
            be liable for any damages or losses arising from the use of this
            site, including indirect or incidental damages.
          </p>
        </section>

        <section className="terms__section terms__section--footer">
          <h2 className="terms__heading">7) Contact</h2>
          <p className="terms__text">
            If you have questions about these terms or the project, please use
            the Contact page.
          </p>

          <p className="terms__updated">Last updated: January 2026</p>
        </section>
      </section>
    </main>
  );
}
