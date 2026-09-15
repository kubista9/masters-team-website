"use client";

import { useEffect, useState } from "react";
import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/components/team-data";
import { shuffle } from "@/lib/shuffle";

export default function TeamGrid() {
  const [members, setMembers] = useState(teamMembers);

  // Reshuffle once the page has mounted, so every visit/refresh gets a
  // different order without causing a server/client hydration mismatch.
  useEffect(() => {
    // Randomizing after mount (not derivable from props/state) is the point here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMembers(shuffle(teamMembers));
  }, []);

  return (
    <section
      id="team"
      className="border-b-3 border-border-strong px-6 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16  flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-xl text-foreground sm:text-2xl">
            The Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground-muted sm:text-xl">
            Ten software-engineering master&apos;s students building Masters
            together.
          </p>
          <a
            href="/docs/code-of-conduct.pdf"
            download
            className="pixel-border pixel-shadow-accent bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wide text-background transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
          >
            Download Code of Conduct
          </a>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-6">
          {members.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
