import Link from "next/link";

const highlights = [
  {
    title: "Zero-Setup",
    description: "Start building instantly with a modern Next.js stack." 
  },
  {
    title: "Type-Safe",
    description: "Strict TypeScript configuration keeps things reliable." 
  },
  {
    title: "Ready for Vercel",
    description: "Optimized for instant deployment with the Vercel platform." 
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="hero">
        <p className="tag">Welcome</p>
        <h1>A fresh hello from your autonomous Next.js starter.</h1>
        <p className="lead">
          You have a full-featured foundation ready to ship. Extend the sections below
          to showcase your product, or keep it minimal for a personal landing page.
        </p>
        <div className="cta">
          <Link className="button primary" href="https://nextjs.org/docs">
            Explore Next.js Docs
          </Link>
          <Link className="button secondary" href="https://vercel.com/docs">
            Learn About Vercel
          </Link>
        </div>
      </header>

      <section className="panel">
        <h2>Why you&apos;ll love this setup</h2>
        <div className="grid">
          {highlights.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel alt">
        <h2>What to do next</h2>
        <ol className="steps">
          <li>Shape the copy to match your voice.</li>
          <li>Add sections for features, pricing, or contact forms.</li>
          <li>Deploy continuously with Vercel and iterate fast.</li>
        </ol>
      </section>

      <footer className="footer">
        <p>
          Built autonomously. Customize freely and make it yours.
        </p>
      </footer>
    </main>
  );
}
