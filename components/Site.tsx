import Link from "next/link";
import { social } from "@/data/content";
export function Header() {
  return (
    <header className="border-b border-[#2c393d]">
      <div className="container-page flex items-center justify-between gap-5 py-6">
        <Link className="font-mono text-sm tracking-tight" href="/">
          W / B<span className="text-accent">.</span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
        >
          <Link className="navlink" href="/">
            Home
          </Link>
          <Link className="navlink" href="/work">
            Work
          </Link>
          <Link className="navlink" href="/research">
            Research
          </Link>
          <Link className="navlink" href="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="border-t border-[#2c393d] py-10">
      <div className="container-page flex flex-wrap justify-between gap-5 text-sm muted">
        <p>© {new Date().getFullYear()} Wahab O. Badmus</p>
        <div className="flex flex-wrap gap-5">
          {social
            .filter((s) => s.url)
            .map((s) => (
              <a
                key={s.name}
                href={s.url}
                target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="navlink"
              >
                {s.name} ↗
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
export function SectionTitle({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <p className="eyebrow mb-5">
        {index} / {title}
      </p>
      <h2 className="heading">{title}</h2>
      {description && (
        <p className="muted mt-4 max-w-2xl leading-7">{description}</p>
      )}
    </div>
  );
}
