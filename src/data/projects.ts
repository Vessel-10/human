import type { LucideIcon } from "lucide-react";
import {
    HeartPulse,
    BookOpen,
    Droplet,
    UtensilsCrossed,
    Home,
    Users,
    Package,
} from "lucide-react";

export type ProjectCategory =
    | "Community Health"
    | "Education"
    | "Water & Sanitation"
    | "Nutrition"
    | "Shelter"
    | "Community Development"
    | "Humanitarian Assistance";

export type ProjectStatus = "ongoing" | "completed";
export type Accent = "clay" | "leaf" | "lake";

export interface Project {
     slug: string;
    title: string;
    category: ProjectCategory;
    status: ProjectStatus;
    location: string;
    date: string;
    summary: string;
    description: string;
    raised?: number; // ongoing only
    goal?: number; // ongoing only, optional
    impact?: string; // completed only, e.g. "40 households reached"
    gallery: string[]; // placeholder ids for now, real image paths later
}

// Literal Tailwind class lookups — never string-interpolate these directly
// in components, Tailwind's compiler needs to see the full class name.
export const accentBg: Record<Accent, string> = {
    clay: "bg-clay",
    leaf: "bg-leaf",
    lake: "bg-lake",
};

export const accentText: Record<Accent, string> = {
    clay: "text-clay",
    leaf: "text-leaf",
    lake: "text-lake",
};

export const categoryStyles: Record<
    ProjectCategory,
    { icon: LucideIcon; accent: Accent }> = {
        "Community Health": { icon: HeartPulse, accent: "lake" },
        Education: { icon: BookOpen, accent: "clay" },
        "Water & Sanitation": { icon: Droplet, accent: "lake" },
        Nutrition: { icon: UtensilsCrossed, accent: "leaf" },
        Shelter: { icon: Home, accent: "clay" },
        "Community Development": { icon: Users, accent: "leaf" },
        "Humanitarian Assistance": { icon: Package, accent: "leaf" },
};

export const projects: Project[] = [
  // ---------- ONGOING ----------
  {
    slug: "donate-a-tap-campaign",
    title: "MAHAG DONATE A TAP CAMPAIGN",
    category: "Water & Sanitation",
    status: "ongoing",
    location: "Lilongwe",
    date: "2026",
    summary:
      "Join our initiative to support those in need! Your contributions through the Donate a Tap campaign can make a significant difference in providing essential resources and services to underserved communities. Give hope today!",
    description:
      "Many households in this area rely on a single shared borehole, often a long walk away. This campaign funds individual household taps, cutting hours from daily routines and reducing the health risks tied to carrying and storing untreated water.",
    raised: 56000,
    goal: 9000000,
    gallery: ["tap-1", "tap-2", "tap-3"],
  },
  {
    slug: "soup-kitchen-for-the-poor",
    title: "SOUP KITCHEN FOR THE POOR",
    category: "Nutrition",
    status: "ongoing",
    location: "Lilongwe",
    date: "2026",
    summary:
      "The MAHAG soup kitchen project serves nutritious meals to those in need, fostering community support and compassion. Join us in making a difference by volunteering or donating to help nourish the less fortunate.",
    description:
      "The soup kitchen runs on donated ingredients and volunteer labour, serving hot meals to families who would otherwise go without during the hardest months of the year.",
    raised: 7500,
    goal: 2500000,
    gallery: ["soup-1", "soup-2"],
  },
  {
    slug: "water-and-housing-mzenga",
    title: "WATER AND HOUSING PROJECT AT MZENGA, NKHATABAY",
    category: "Shelter",
    status: "ongoing",
    location: "Mzenga, Nkhatabay",
    date: "2026",
    summary:
      "The MAHAG water and housing initiative aims to enhance living conditions by providing sustainable water supply solutions alongside affordable housing, fostering community development and improving overall quality of life in the targeted areas.",
    description:
      "This joint water-and-shelter project repairs unsafe housing structures while extending clean water access to households in Mzenga, a rural community in Nkhatabay district.",
    raised: 570,
    goal: 4000000,
    gallery: ["mzenga-1", "mzenga-2"],
  },
  {
    slug: "womens-health-awareness-campaign",
    title: "Women's Health Awareness Campaign",
    category: "Community Health",
    status: "ongoing",
    location: "Thyolo",
    date: "2026",
    summary:
      "Health education and screening sessions run by and for women in the community.",
    description:
      "Trained volunteers lead sessions on maternal health, reproductive health and general wellbeing, paired with basic screening for common, treatable conditions.",
    raised: 570,
    goal: 1500000,
    gallery: ["health-1", "health-2"],
  },

  // ---------- COMPLETED ----------
  {
    slug: "womens-mental-health-awareness-month",
    title: "Women's Mental Health Awareness Month",
    category: "Community Health",
    status: "completed",
    location: "Litende",
    date: "2025",
    summary:
      "A month of open conversation on mental health, giving women in Litende space to be heard.",
    description:
      "Over four weeks, community health volunteers ran facilitated discussion groups, one-on-one check-ins, and basic mental health literacy sessions for women across Litende.",
    impact: "120+ women reached",
    gallery: ["mental-health-1", "mental-health-2"],
  },
  {
    slug: "clean-water-kudakubukgollewa",
    title: "Clean Water for Kudakubukgollewa Village",
    category: "Water & Sanitation",
    status: "completed",
    location: "Kudakubukgollewa Village",
    date: "2025",
    summary:
      "A new well cuts the walk for water and the risk that comes with drinking from open sources.",
    description:
      "Before this project, households walked over an hour round-trip to the nearest reliable water source. The new well serves the entire village and is maintained by a locally trained committee.",
    impact: "60 households served",
    gallery: ["water-1", "water-2"],
  },
  {
    slug: "warm-winter-for-our-community",
    title: "A Warm Winter for Our Community",
    category: "Humanitarian Assistance",
    status: "completed",
    location: "Nkhatabay",
    date: "2025",
    summary:
      "Blankets and warm supplies reach households before the cold months set in.",
    description:
      "Distributed ahead of the coldest months, this relief effort focused on households with young children and elderly residents most at risk from cold exposure.",
    impact: "80 blankets distributed",
    gallery: ["winter-1", "winter-2"],
  },
  {
    slug: "mattresses-litende-secondary-school",
    title: "Mattresses for Litende Secondary School",
    category: "Education",
    status: "completed",
    location: "Litende, Nkhatabay",
    date: "2025",
    summary:
      "Boarding students get a proper bed — a small change with a real effect on rest and study.",
    description:
      "Many boarding students were sleeping directly on the floor or on worn-out bedding. This donation replaced mattresses across two dormitories.",
    impact: "45 mattresses delivered",
    gallery: ["mattress-1", "mattress-2"],
  },
  {
    slug: "borehole-servicing-kamwendo",
    title: "Borehole Servicing Around Kamwendo",
    category: "Water & Sanitation",
    status: "completed",
    location: "Kamwendo, Mchinji",
    date: "2025",
    summary:
      "Restoring boreholes that had fallen out of use back into safe, working condition.",
    description:
      "Several community boreholes around Kamwendo had broken down over time. This project repaired and serviced them, restoring reliable access to clean water.",
    impact: "5 boreholes restored",
    gallery: ["borehole-1", "borehole-2"],
  },
  {
    slug: "child-immunization-outreach",
    title: "Child Immunization Outreach Programme",
    category: "Community Health",
    status: "completed",
    location: "Nkhatabay",
    date: "2025",
    summary:
      "Bringing immunization services directly to families with limited access to clinics.",
    description:
      "Working alongside local health workers, this outreach programme brought routine childhood immunizations to villages far from the nearest clinic.",
    impact: "200+ children immunized",
    gallery: ["immunization-1", "immunization-2"],
  },
];

export function getOngoingProjects(): Project[] {
  return projects.filter((p) => p.status === "ongoing");
}

export function getCompletedProjects(): Project[] {
  return projects.filter((p) => p.status === "completed");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export interface GalleryImage {
  id: string;
  caption: string;
  category: ProjectCategory;
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", caption: "Well repair, Kamwendo", category: "Water & Sanitation" },
  { id: "g2", caption: "Discussion group, Litende", category: "Community Health" },
  { id: "g3", caption: "Mattress delivery", category: "Education" },
  { id: "g4", caption: "Blanket distribution", category: "Humanitarian Assistance" },
  { id: "g5", caption: "Soup kitchen service", category: "Nutrition" },
  { id: "g6", caption: "Housing repair, Mzenga", category: "Shelter" },
  { id: "g7", caption: "Immunization outreach", category: "Community Health" },
  { id: "g8", caption: "Community meeting, Mwansambo", category: "Community Development" },
];