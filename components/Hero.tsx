import Image from "next/image";

function PixelGamepad() {
  return (
    <svg
      viewBox="0 0 32 20"
      width="112"
      height="70"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className="text-accent"
    >
      <rect x="4" y="6" width="24" height="10" fill="currentColor" />
      <rect x="2" y="8" width="2" height="6" fill="currentColor" />
      <rect x="28" y="8" width="2" height="6" fill="currentColor" />
      <rect x="0" y="10" width="2" height="2" fill="currentColor" />
      <rect x="30" y="10" width="2" height="2" fill="currentColor" />
      <rect x="7" y="9" width="2" height="2" fill="#0b0d12" />
      <rect x="9" y="11" width="2" height="2" fill="#0b0d12" />
      <rect x="7" y="13" width="2" height="2" fill="#0b0d12" />
      <rect x="5" y="11" width="2" height="2" fill="#0b0d12" />
      <rect x="21" y="9" width="2" height="2" fill="#ff5fa2" />
      <rect x="24" y="9" width="2" height="2" fill="#ffd166" />
      <rect x="21" y="13" width="2" height="2" fill="#ffd166" />
      <rect x="24" y="13" width="2" height="2" fill="#ff5fa2" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[80vh] items-center border-b-3 border-border-strong px-6 py-16 sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-1 flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <PixelGamepad />

          <div className="flex flex-col items-center gap-6 lg:items-start">
            <h1 className="font-display text-3xl leading-relaxed text-foreground sm:text-5xl sm:leading-relaxed">
              MASTERS
            </h1>
            <p className="max-w-2xl text-lg text-foreground-muted sm:text-xl">
              We&apos;re a team of software-engineering master&apos;s students
              designing and building an online gaming platform - from
              backend architecture to the pixels on screen.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#team"
              className="pixel-border pixel-shadow-accent bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wide text-background transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
            >
              Meet the team
            </a>
            <a
              href="#project"
              className="pixel-border pixel-shadow bg-surface px-6 py-3 font-mono text-sm uppercase tracking-wide text-foreground transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
            >
              View the project
            </a>
          </div>
        </div>

        <div className="pixel-border pixel-shadow-accent relative h-[280px] w-full flex-shrink-0 overflow-hidden sm:h-[360px] lg:h-[480px] lg:flex-1 lg:self-stretch">
          <Image
            src="/hero-saxion.jpg"
            alt="Pixel-art illustration of the Saxion University building"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
