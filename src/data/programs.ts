export interface ProgramBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface ProgramStat {
  value: string;
  label: string;
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface Program {
  slug: string;
  icon: string;

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    primaryCTA: {
      text: string;
      href: string;
    };
    secondaryCTA: {
      text: string;
      href: string;
    };
  };

  overview: {
    title: string;
    description: string;
  };

  challenge: {
    title: string;
    description: string;
    points: string[];
  };

  approach: {
    title: string;
    description: string;
    benefits: ProgramBenefit[];
  };

  impact: {
    title: string;
    description: string;
    stats: ProgramStat[];
  };

  gallery: {
    title: string;
    description: string;
    images: string[];
  };

  faqs: ProgramFAQ[];

  finalCTA: {
    title: string;
    description: string;
    button: {
      text: string;
      href: string;
    };
  };
}

export const programs: Program[] = [
  {
    slug: "community-health",

    icon: "heart-pulse",

    hero: {
      eyebrow: "OUR PROGRAMS",

      title: "Community Health",

      description:
        "Improving access to quality healthcare through outreach programs, education, prevention initiatives, and partnerships with local communities.",

      image: "/images/programs/community-health.jpg",

      primaryCTA: {
        text: "Support This Program",
        href: "/get-involved",
      },

      secondaryCTA: {
        text: "View Projects",
        href: "/projects",
      },
    },

    overview: {
      title: "Building Healthier Communities",

      description:
        "Our Community Health Program focuses on improving access to healthcare services while promoting disease prevention, maternal health, nutrition, and public health education throughout Malawi.",
    },

    challenge: {
      title: "The Challenge",

      description:
        "Many communities continue to face barriers in accessing healthcare services and health information.",

      points: [
        "Limited access to healthcare facilities.",
        "Low awareness of preventive healthcare.",
        "Maternal and child health challenges.",
        "Shortage of medical resources.",
      ],
    },

    approach: {
      title: "How We Help",

      description:
        "We work alongside communities, healthcare workers, and partners to deliver sustainable healthcare initiatives.",

      benefits: [
        {
          icon: "stethoscope",
          title: "Health Education",
          description:
            "Community awareness campaigns promoting healthy lifestyles and disease prevention.",
        },
        {
          icon: "users",
          title: "Community Outreach",
          description:
            "Taking healthcare services directly into underserved communities.",
        },
        {
          icon: "shield-heart",
          title: "Disease Prevention",
          description:
            "Supporting vaccination, sanitation, and preventive healthcare programs.",
        },
        {
          icon: "baby",
          title: "Maternal Health",
          description:
            "Improving healthcare services for mothers and children.",
        },
      ],
    },

    impact: {
      title: "Our Impact",

      description:
        "Our programs continue to improve health outcomes across communities.",

      stats: [
        {
          value: "5,000+",
          label: "People Reached",
        },
        {
          value: "20+",
          label: "Communities Served",
        },
        {
          value: "15",
          label: "Health Campaigns",
        },
        {
          value: "100+",
          label: "Volunteers",
        },
      ],
    },

    gallery: {
      title: "Program in Action",

      description:
        "Moments from our healthcare outreach activities and community engagement.",

      images: [
        "/images/programs/community1.jpg",
        "/images/programs/community2.jpg",
        "/images/programs/community3.jpg",
      ],
    },

    faqs: [
      {
        question: "Who benefits from this program?",
        answer:
          "The program supports children, women, families, and vulnerable communities across Malawi.",
      },
      {
        question: "Can I volunteer in this program?",
        answer:
          "Yes. Volunteers can support outreach campaigns, awareness events, and community activities.",
      },
      {
        question: "How can I support this initiative?",
        answer:
          "You can donate, volunteer, or partner with MAHAG to help expand the program's reach.",
      },
    ],

    finalCTA: {
      title: "Help us build healthier communities.",

      description:
        "Together we can improve access to healthcare and create lasting change across Malawi.",

      button: {
        text: "Support This Program",
        href: "/get-involved",
      },
    },
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getAllProgramSlugs(): string[] {
  return programs.map((p) => p.slug);
}