import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectIntro from "@/components/ProjectIntro";
import TeamGrid from "@/components/TeamGrid";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <ProjectIntro />
        <TeamGrid />
      </main>
      <Footer />
    </>
  );
}
