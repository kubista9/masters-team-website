import Image from "next/image";
import type { TeamMember } from "@/components/team-data";

export default function TeamMemberCard({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  return (
    <article
      className={`pixel-border pixel-shadow flex h-[620px] flex-col items-center gap-4 bg-surface p-5 transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${className ?? ""}`}
    >
      <div className="pixel-border relative flex aspect-[3/4] w-full max-w-[240px] flex-shrink-0 items-center justify-center overflow-hidden bg-background">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Portrait of ${member.name}`}
            fill
            sizes="(min-width: 1024px) 240px, 60vw"
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

      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
        {member.bio && (
          <p className="text-lg leading-relaxed text-foreground-muted sm:text-xl">
            {member.bio}
          </p>
        )}
      </div>
    </article>
  );
}
