import Image from "next/image";
import type { TeamMember } from "@/components/team-data";

export default function TeamMemberCard({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  const hasFooter = member.skills.length > 0 || Boolean(member.linkedin);

  return (
    <article
      className={`group pixel-border pixel-shadow flex h-[460px] flex-col gap-4 bg-surface p-5 ${className ?? ""}`}
    >
      <div className="pixel-border relative flex h-44 w-full flex-shrink-0 items-center justify-center overflow-hidden bg-background">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Portrait of ${member.name}`}
            fill
            sizes="(min-width: 640px) 300px, 90vw"
            className="object-cover grayscale-[15%] contrast-[1.05] transition-[filter] duration-300 group-hover:grayscale-0 group-hover:contrast-100"
          />
        ) : (
          <>
            <span aria-hidden className="font-display text-3xl text-foreground-muted">
              ?
            </span>
            <span className="sr-only">No photo yet for {member.name}</span>
          </>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2">
        <h3 className="flex-shrink-0 text-lg font-bold text-foreground">
          {member.name}
        </h3>
        {member.bio && (
          <p className="line-clamp-5 min-h-0 text-sm leading-relaxed text-foreground-muted">
            {member.bio}
          </p>
        )}
      </div>

      {hasFooter && (
        <div
          className="mt-auto flex flex-shrink-0 translate-y-2 flex-col gap-3 opacity-0 [clip-path:inset(100%_0_0_0)] transition-[opacity,transform,clip-path] duration-300 [transition-timing-function:steps(5,end)] group-hover:translate-y-0 group-hover:opacity-100 group-hover:[clip-path:inset(0_0_0_0)] group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:[clip-path:inset(0_0_0_0)]"
        >
          {member.skills.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {member.skills.slice(0, 4).map((skill) => (
                <li
                  key={skill}
                  className="pixel-border bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          )}

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border flex items-center justify-center gap-2 bg-background px-3 py-2 font-mono text-xs uppercase tracking-wide text-foreground transition-colors duration-150 hover:text-accent"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
