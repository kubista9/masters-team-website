import Image from "next/image";
import type { TeamMember } from "@/components/team-data";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="pixel-border pixel-shadow flex flex-col gap-4 bg-surface p-5">
      <div className="pixel-border relative flex aspect-square w-full items-center justify-center overflow-hidden bg-background">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Portrait of ${member.name}`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover grayscale-[15%] contrast-[1.05]"
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

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
        {member.role && (
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            {member.role}
          </p>
        )}
        {member.bio && (
          <p className="text-sm leading-relaxed text-foreground-muted">
            {member.bio}
          </p>
        )}
      </div>

      {member.skills.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <li
              key={skill}
              className="pixel-border bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
