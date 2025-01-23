import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
