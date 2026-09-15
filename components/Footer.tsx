"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs uppercase tracking-wide text-foreground-muted">
          © {year} Masters. All rights reserved.
        </p>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="pixel-border bg-surface px-4 py-2 font-mono text-xs uppercase tracking-wide text-foreground transition-transform duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:text-accent"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
