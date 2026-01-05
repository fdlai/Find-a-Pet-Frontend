import "../blocks/About.css";

export default function About() {
  return (
    <main className="about">
      <section className="about__container">
        <header className="about__header">
          <h1 className="about__title">About Find-a-Pet</h1>
          <p className="about__subtitle">
            A full-stack portfolio project focused on realistic product behavior
            and system design.
          </p>
        </header>

        <section className="about__section">
          <p className="about__text">
            <strong>Find-a-Pet</strong> is a full-stack web application built as
            a portfolio project to demonstrate modern software engineering
            practices, thoughtful product decisions, and end-to-end application
            design.
          </p>

          <p className="about__text">
            The app simulates the experience of browsing adoptable pets by
            location, while intentionally using <strong>mock data</strong> to
            allow full control over the backend architecture and data modeling.
          </p>

          <p className="about__disclaimer">
            This project is not a live adoption service and does not list real
            pets.
          </p>
        </section>

        <section className="about__section">
          <h2 className="about__heading">What the app does</h2>

          <ul className="about__list">
            <li>
              Real-time search using city names or ZIP codes with autocomplete
              suggestions
            </li>
            <li>Browsing of recently added pets</li>
            <li>Filtering by species, breed, sex, age, and size</li>
            <li>Individual pet detail pages with photos and descriptions</li>
            <li>Pet-related news presented using a carousel</li>
            <li>Responsive layout optimized for desktop and mobile</li>
          </ul>
        </section>

        <section className="about__section">
          <h2 className="about__heading">Why mock data?</h2>

          <p className="about__text">
            Instead of relying on a third-party pet adoption API, Find-a-Pet
            uses custom mock data backed by a real database. This approach was
            intentional and enables deeper control over system behavior.
          </p>

          <ul className="about__list">
            <li>Designing a custom REST API</li>
            <li>
              Implementing geospatial queries for location-based searching
            </li>
            <li>Fine-grained control over filtering and query logic</li>
            <li>A clearer demonstration of backend data modeling</li>
          </ul>
        </section>

        <section className="about__section about__section--panel">
          <h2 className="about__heading">Technical overview</h2>

          <div className="about__grid">
            <div className="about__card">
              <h3 className="about__cardTitle">Frontend</h3>
              <ul className="about__list about__list--compact">
                <li>React with TypeScript</li>
                <li>Vite for development and builds</li>
                <li>React Router for client-side routing</li>
                <li>BEM-style className naming</li>
                <li>Component-based UI architecture</li>
                <li>Responsive and accessible layout</li>
              </ul>
            </div>

            <div className="about__card">
              <h3 className="about__cardTitle">Backend</h3>
              <ul className="about__list about__list--compact">
                <li>Node.js and Express</li>
                <li>RESTful API design</li>
                <li>MongoDB with geospatial indexing</li>
                <li>Structured data models</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about__section">
          <h2 className="about__heading">Project goals</h2>

          <ul className="about__list">
            <li>Demonstrate full-stack development skills</li>
            <li>Showcase thoughtful UX and architectural decisions</li>
            <li>Highlight backend querying and data modeling techniques</li>
            <li>Present a polished, portfolio-ready application</li>
          </ul>
        </section>

        <section className="about__section about__section--footer">
          <h2 className="about__heading">About the developer</h2>

          <p className="about__text">
            Find-a-Pet was created by <strong>Fred Lai</strong>, a full-stack
            software engineer with a background in mathematics and experience
            building and deploying modern web applications.
          </p>

          <div className="about__links">
            <a
              className="about__link"
              href="https://github.com/fdlai"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            <a
              className="about__link"
              href="https://www.linkedin.com/in/fred-lai/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
