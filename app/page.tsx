"use client"
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import CertificationSlider from "../components/CertificationSlider";
import AvatarChat from "../components/AvatarChat";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <CertificationSlider />
        <ContactSection />
      </main>
      <AvatarChat />
    </div>
  );
}