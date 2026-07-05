import AboutHero from "@/components/section/about/Hero";
import WhoWeAre from "@/components/section/about/Who";
import OurStory from "@/components/section/about/Story";
import MissionVisionValues from "@/components/section/about/Vision";
import Approach from "@/components/section/about/Approach";
import Impact from "@/components/section/about/Impact";
import Team from "@/components/section/about/Team";
import Partners from "@/components/section/about/Partner";
import Faq from "@/components/section/about/Faq";
import Cta from "@/components/section/about/Cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <OurStory />
      <MissionVisionValues />
      <Approach />
      <Impact />
      <Team />
      <Partners />
      <Faq />
      <Cta />
    </>
  );
}