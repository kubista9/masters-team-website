"use client";

import { useState } from "react";

const SUMMARY_POINTS = [
  "We're building a platform that handles personal data and real money, so fairness, security, privacy, and trust come first in everything we build.",
  "Treat teammates with respect, keep disagreements about the work rather than the person, and follow through on Scrum commitments honestly.",
  "Communicate problems, blockers, and mistakes openly instead of hiding them to make a sprint look better than it is.",
  "Take extra care with anything touching authentication, payments, player data, or game results - report vulnerabilities, never hide or exploit them.",
  "Only collect the data the platform actually needs, and apply the same rules to every player - no hidden advantages for anyone.",
  "Raise concerns with the Scrum Master or Product Owner, escalate serious issues immediately, and never retaliate against someone reporting in good faith.",
];

export default function CodeOfConduct() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-4">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="code-of-conduct-summary"
        className="pixel-border pixel-shadow-accent cursor-pointer bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wide text-background transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
      >
        {open ? "Hide" : "Show"} Code of Conduct summary
      </button>

      {open && (
        <div
          id="code-of-conduct-summary"
          className="pixel-border w-full bg-surface p-6 text-left"
        >
          <h3 className="mb-4 font-display text-base text-foreground">
            Code of Conduct - summary
          </h3>
          <ul className="flex flex-col gap-3">
            {SUMMARY_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-base text-foreground-muted sm:text-lg"
              >
                <span aria-hidden className="mt-1 text-accent">
                  ▪
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
