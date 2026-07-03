import ProjectGallery from "@/components/section/project/Gallery";
import CompletedProjects from "@/components/section/project/Completed";
import CTA from "@/components/section/project/Cta";
import OngoingProjects from "@/components/section/project/Ongoing";
import ProjectsHero from "@/components/section/project/Hero";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <OngoingProjects />
      <CompletedProjects />
      <ProjectGallery />
      <CTA />
    </>
  );
}