import Footer from "@/components/Footer";
import HealthBarDivider from "@/components/HealthBarDivider";
import Hero from "@/components/Hero";
import ProjectIntro from "@/components/ProjectIntro";
import TeamGrid from "@/components/TeamGrid";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <HealthBarDivider />
        <ProjectIntro />
        <TeamGrid />
      </main>
      <Footer />
    </>
  );
}
