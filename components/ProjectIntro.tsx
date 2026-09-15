const FEATURES = [
  "Discoverable tables, categorized by game",
  "Real-time play, live and online mixed together",
  "Game masters and dealers can join a table too",
  "Post-game replays via video stream",
  "Tournaments with real payouts",
  "Player reputation tracking",
  "Fraud-safe by design",
];

export default function ProjectIntro() {
  return (
    <section
      id="project"
      className="border-b-3 border-border-strong px-6 py-20 sm:px-8"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-display text-xl text-foreground sm:text-2xl">
            The Project
          </h2>
          <p className="text-foreground-muted">
            We&apos;re building a hybrid online gaming platform for board
            games and card games. Players anywhere in the country can pick a
            game and join a table - playing alongside people sitting at
            the physical table, as if they&apos;d pulled up a chair at a board
            game café. A few players sit at each table, but the platform is
            designed to host thousands of simultaneous games.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-3">
          {FEATURES.map((feature) => (
            <li
              key={feature}
              className="pixel-border flex w-full items-center gap-3 bg-surface px-4 py-3 text-sm text-foreground sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)] xl:w-[calc(25%-0.5625rem)]"
            >
              <span aria-hidden className="text-accent">
                ▪
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-3 pt-4">
          <a
            href="#"
            aria-disabled="true"
            title="The platform isn't live yet - this will link to it once it exists."
            className="pixel-border pixel-shadow-accent bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wide text-background transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
          >
            See the platform
          </a>
          <span className="font-mono text-xs uppercase tracking-wide text-foreground-muted">
            Coming soon
          </span>
        </div>
      </div>
    </section>
  );
}
