import { notFound } from "next/navigation";
import { getProgramBySlug, getAllProgramSlugs } from "@/data/programs";
import ProgramHero from "@/components/section/program/Hero";
import Overview from "@/components/section/program/Overview";
import Challenge from "@/components/section/program/Challenge";
import Approach from "@/components/section/program/Approach";
import Impact from "@/components/section/program/Impact";
import ProgramGallery from "@/components/section/program/Gallery";
import Faq from "@/components/section/program/Faq";
import Cta from "@/components/section/program/Cta";

export function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <ProgramHero program={program} />
      <Overview program={program} />
      <Challenge program={program} />
      <Approach program={program} />
      <Impact program={program} />
      <ProgramGallery program={program} />
      <Faq program={program} />
      <Cta program={program} />
    </>
  );
}