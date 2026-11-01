import Image from "next/image";
import Link from "next/link";


const focusAreas = [
  {
    title: "Useful software",
    description: "Building digital products that solve real problems.",
  },
  {
    title: "Thoughtful details",
    description: "Making interfaces feel clear, calm, and considered.",
  },
  {
    title: "Learning in public",
    description: "Sharing ideas about product, design, and engineering.",
  },
];

export default function Home() {
  return (
    <article className="home" id="top">
      <div className="home-content">
        <header className="site-header">
          <Link aria-label="Tuan Nguyen, home" className="wordmark" href="/">
            <span className="wordmark-at">@</span>tuan
          </Link>
          <nav aria-label="Social links" className="social-links">
            <a
              href="https://github.com/nguyentuan1696"
              rel="noreferrer"
              target="_blank"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nguyentuan1696"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </header>

        <section aria-labelledby="bio-heading" className="bio-section">
          <div className="section-topline">
            <h1 id="bio-heading">Bio</h1>
            <span className="availability">Product · Engineering</span>
          </div>

          <div className="bio-copy">
            <p>
              I’m Tuan, a product builder and developer. I enjoy turning
              thoughtful ideas into useful things for the web.
            </p>
            <p>
              This is my little corner of the internet — a place for the things
              I make, the ideas I explore, and what I learn along the way.
            </p>
          </div>
        </section>

        <section aria-labelledby="notes-heading" className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few things I care about</p>
              <h2 id="notes-heading">Notes</h2>
            </div>
            <span aria-hidden="true" className="section-index">
              01
            </span>
          </div>

          <ul className="focus-list">
            {focusAreas.map((area) => (
              <li className="focus-item" key={area.title}>
                <span className="focus-marker" aria-hidden="true">
                  ↳
                </span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="writing-heading"
          className="content-section writing-section"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Things I’m exploring</p>
              <h2 id="writing-heading">Writing</h2>
            </div>
            <span aria-hidden="true" className="section-index">
              02
            </span>
          </div>
          <p className="writing-copy">
            Occasional notes on building products, making the web, and finding
            clarity in the details.
          </p>
        </section>

        <footer className="site-footer">
          <span>Made with care.</span>
          <a href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </div>
      <figure className="portrait">
        <div className="portrait-art">
          <Image
            alt="Illustration of the Ninh Binh countryside in Vietnam"
            className="portrait-image"
            height={1024}
            priority
            sizes="(min-width: 960px) 34vw, 100vw"
            src="/ninh-binh.svg"
            width={562}
          />
        </div>
        <figcaption className="portrait-caption">
          A little piece of home · Tam Cốc Bích Động, Ninh Bình, Việt Nam
        </figcaption>
      </figure>
    </article>
  );
}