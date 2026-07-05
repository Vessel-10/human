import InvolvedHero from "@/components/section/involved/Hero";
import WaysToHelp from "@/components/section/involved/Help";
import Donate from "@/components/section/involved/Donate";
import Volunteer from "@/components/section/involved/Volunteer";
import Partner from "@/components/section/involved/Partner";
import Faq from "@/components/section/involved/Faq";
import InvolvedCTA from "@/components/section/involved/Cta";

export default function GetInvolvedPage() {
  return (
    <>
      <InvolvedHero />
      <WaysToHelp />
      <Donate />
      <Volunteer />
      <Partner />
      <Faq />
      <InvolvedCTA />
    </>
  );
}