import Hero from "@/components/section/home/Hero";
import About from "@/components/section/home/About";
import Programs from "@/components/section/home/Program";
import Projects from "@/components/section/home/Project";
import Impact from "@/components/section/home/Impact";
import Partners from "@/components/section/home/Partner";
import News from "@/components/section/home/News";
import FinalCTA from "@/components/section/home/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Projects />
      <Impact />
      <Partners />
      <News />
      <FinalCTA />
    </>
  );
}