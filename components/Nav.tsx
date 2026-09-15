"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#project", label: "Project" },
  { href: "#team", label: "Team" },
  { href: "#code-of-conduct", label: "Code of Conduct" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-3 border-border-strong bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm tracking-widest text-accent sm:text-base"
        >
          MASTERS
        </a>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-8 font-mono text-sm uppercase tracking-wide text-foreground-muted">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-150 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="pixel-border flex h-10 w-10 items-center justify-center bg-surface sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden className="font-mono text-lg leading-none text-foreground">
            {open ? "X" : "="}
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Primary" className="border-t-3 border-border-strong bg-surface sm:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 font-mono text-sm uppercase tracking-wide text-foreground-muted">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 transition-colors duration-150 hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
