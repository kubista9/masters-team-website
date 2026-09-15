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
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <h2 className="font-display text-xl text-foreground sm:text-2xl">
            The Team
          </h2>
          <p className="mx-auto max-w-2xl text-foreground-muted">
            Ten software-engineering master&apos;s students building Masters
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
