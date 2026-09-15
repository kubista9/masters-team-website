import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProjectIntro from "@/components/ProjectIntro";
import TeamGrid from "@/components/TeamGrid";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProjectIntro />
        <TeamGrid />
      </main>
    </>
  );
}
