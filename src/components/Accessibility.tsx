import "../blocks/Accessibility.css";

export default function Accessibility() {
  return (
    <main className="accessibility">
      <section className="accessibility__container">
        <header className="accessibility__header">
          <h1 className="accessibility__title">Accessibility</h1>
          <p className="accessibility__subtitle">
            Find-a-Pet aims to be usable for as many people as possible,
            including users who navigate with a keyboard, screen readers, or
            other assistive technologies. This page describes the accessibility
            considerations in the project and areas for improvement.
          </p>

          <p className="accessibility__badge">
            Summary: Semantic HTML • Keyboard-friendly UI • Responsive layout •
            Ongoing improvements
          </p>
        </header>

        <section className="accessibility__section accessibility__section--panel">
          <h2 className="accessibility__heading">Accessibility goals</h2>
          <ul className="accessibility__list">
            <li>
              Support keyboard navigation across primary flows (search, filters,
              pet pages).
            </li>
            <li>
              Use semantic HTML for clearer structure and screen reader
              interpretation.
            </li>
            <li>Maintain readable contrast and comfortable typography.</li>
            <li>
              Ensure layouts adapt well across screen sizes and zoom levels.
            </li>
          </ul>
        </section>

        <section className="accessibility__section">
          <h2 className="accessibility__heading">What’s implemented</h2>

          <div className="accessibility__grid">
            <div className="accessibility__card">
              <h3 className="accessibility__cardTitle">
                Structure & semantics
              </h3>
              <ul className="accessibility__list accessibility__list--compact">
                <li>Consistent heading hierarchy (H1 → H2 → H3)</li>
                <li>Landmarks such as main content and section headers</li>
                <li>Meaningful link text (not “click here”)</li>
              </ul>
            </div>

            <div className="accessibility__card">
              <h3 className="accessibility__cardTitle">Keyboard support</h3>
              <ul className="accessibility__list accessibility__list--compact">
                <li>Interactive controls are reachable via Tab</li>
                <li>Visible focus styles for navigation clarity</li>
                <li>No keyboard traps in overlays/menus</li>
              </ul>
            </div>

            <div className="accessibility__card">
              <h3 className="accessibility__cardTitle">Forms & inputs</h3>
              <ul className="accessibility__list accessibility__list--compact">
                <li>Inputs are labeled (or have accessible names)</li>
                <li>Clear placeholder usage (not as the only label)</li>
                <li>Error states are designed to be noticeable</li>
              </ul>
            </div>

            <div className="accessibility__card">
              <h3 className="accessibility__cardTitle">Visual design</h3>
              <ul className="accessibility__list accessibility__list--compact">
                <li>Readable font sizes and spacing</li>
                <li>Responsive layout for desktop and mobile</li>
                <li>Supports browser zoom without breaking layout</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="accessibility__section accessibility__section--panel">
          <h2 className="accessibility__heading">Known limitations</h2>
          <p className="accessibility__text">
            This project is actively being improved. The items below are areas
            I’m continuing to refine:
          </p>

          <ul className="accessibility__list">
            <li>
              <strong>Autocomplete behavior:</strong> improving ARIA patterns
              for suggestion lists and announcing results to screen readers.
            </li>
            <li>
              <strong>Carousel controls:</strong> ensuring consistent keyboard
              control and clear labels for previous/next actions.
            </li>
            <li>
              <strong>Color contrast verification:</strong> continuing to verify
              contrast across all UI states (hover, focus, disabled).
            </li>
          </ul>
        </section>

        <section className="accessibility__section">
          <h2 className="accessibility__heading">Feedback</h2>
          <p className="accessibility__text">
            If you notice an accessibility issue or have suggestions, I’d
            appreciate hearing about it. Please reach out via the Contact page.
          </p>

          <p className="accessibility__updated">Last updated: January 2026</p>
        </section>
      </section>
    </main>
  );
}
