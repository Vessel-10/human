export interface HomePage {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    backgroundImage: string;

    primaryCTA: {
      text: string;
      href: string;
    };

    secondaryCTA: {
      text: string;
      href: string;
    };

    highlights: string[];
  };

  about: {
    title: string;
    description: string;
    image: string;
    button: {
      text: string;
      href: string;
    };
  };

  programs: {
    title: string;
    description: string;
  };

  projects: {
    title: string;
    description: string;
    button: {
      text: string;
      href: string;
    };
  };

  impact: {
    title: string;
    description: string;
    stats: {
      value: string;
      label: string;
    }[];
  };

  partners: {
    title: string;
    description: string;
  };

  news: {
    title: string;
    description: string;
    button: {
      text: string;
      href: string;
    };
  };

  finalCTA: {
    title: string;
    description: string;

    primaryButton: {
      text: string;
      href: string;
    };

    secondaryButton: {
      text: string;
      href: string;
    };
  };
}

export const home: HomePage = {
  hero: {
    eyebrow: "EMPOWERING COMMUNITIES ACROSS MALAWI",

    title: "Creating lasting change through humanitarian action and community development.",

    description:
      "MAHAG works alongside communities to improve access to healthcare, education, clean water, nutrition, shelter, and emergency support. Together with our partners, volunteers, and donors, we are building stronger and healthier communities across Malawi.",

    backgroundImage: "/images/home/hero.jpg",

    primaryCTA: {
      text: "Donate Now",
      href: "/get-involved",
    },

    secondaryCTA: {
      text: "Our Programs",
      href: "/programs",
    },

    highlights: [
      "Community Development",
      "Healthcare",
      "Education",
      "Emergency Response",
    ],
  },

  about: {
    title: "Working together to create stronger communities.",

    description:
      "For years, MAHAG has partnered with communities, organizations, and volunteers to deliver sustainable programs that improve lives. Our work focuses on addressing immediate humanitarian needs while building long-term opportunities for growth and resilience.",

    image: "/images/home/about.jpg",

    button: {
      text: "Learn About Us",
      href: "/about",
    },
  },

  programs: {
    title: "Programs that make a lasting impact.",

    description:
      "From healthcare and education to clean water, nutrition, shelter, and humanitarian assistance, our programs are designed to address the needs of vulnerable communities while promoting sustainable development.",
  },

  projects: {
    title: "Creating measurable impact through every project.",

    description:
      "Explore our ongoing and completed projects to see how partnerships, donations, and community involvement are transforming lives across Malawi.",

    button: {
      text: "View All Projects",
      href: "/projects",
    },
  },

  impact: {
    title: "The impact we've made together.",

    description:
      "Every project represents people reached, communities strengthened, and lives improved through collective action.",

    stats: [
      {
        value: "50+",
        label: "Projects Completed",
      },
      {
        value: "20,000+",
        label: "People Reached",
      },
      {
        value: "30+",
        label: "Partner Organizations",
      },
      {
        value: "100+",
        label: "Active Volunteers",
      },
    ],
  },

  partners: {
    title: "Working together for greater impact.",

    description:
      "We collaborate with local communities, government institutions, NGOs, businesses, and international partners to create sustainable solutions that improve lives.",
  },

  news: {
    title: "Latest News & Stories",

    description:
      "Stay informed about our recent projects, community activities, success stories, and upcoming events across Malawi.",

    button: {
      text: "Read Our News",
      href: "/news",
    },
  },

  finalCTA: {
    title: "Together, we can create lasting change.",

    description:
      "Whether you choose to donate, volunteer, or partner with us, your support helps bring hope and opportunity to communities across Malawi.",

    primaryButton: {
      text: "Get Involved",
      href: "/get-involved",
    },

    secondaryButton: {
      text: "Contact Us",
      href: "/contact",
    },
  },
};