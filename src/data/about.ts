export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface AboutPage {
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

  whoWeAre: {
    title: string;
    description: string;
    image: string;
  };

  ourStory: {
    title: string;
    description: string;
  };

  mission: string;

  vision: string;

  values: Value[];

  approach: {
    title: string;
    description: string;
    points: string[];
  };

  impact: {
    title: string;
    description: string;
    stats: Stat[];
  };

  team: {
    title: string;
    description: string;
    members: TeamMember[];
  };

  partners: {
    title: string;
    description: string;
  };

  faqs: FAQ[];

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

export const about = {
  hero: {
    eyebrow: "ABOUT Naglind",

    title: "Working alongside communities to create lasting change.",

    description:
      "NAglind is committed to improving lives through humanitarian assistance, community development, healthcare, education, clean water, nutrition, and sustainable partnerships. Together with communities, volunteers, donors, and partners, we are building a healthier and more resilient Malawi.",

    image: "/images/about/hero.jpg",

    primaryCTA: {
      text: "Our Programs",
      href: "/programs",
    },

    secondaryCTA: {
      text: "Get Involved",
      href: "/get-involved",
    },
  },

  whoWeAre: {
    title: "Who We Are",

    description:
      "Naglind is a humanitarian and community development organization dedicated to improving the wellbeing of vulnerable communities across Malawi. Through collaborative partnerships and sustainable programs, we address immediate humanitarian needs while creating long-term opportunities for growth, resilience, and self-reliance.",

    image: "/images/about/who-we-are.jpg",
  },

  ourStory: {
    title: "Our Journey",

    description:
      "Naglind was founded with the belief that every individual deserves access to healthcare, education, clean water, and opportunities to thrive. Over the years, we have worked hand in hand with communities, local leaders, government institutions, and development partners to implement programs that create meaningful and sustainable impact. Our journey continues to be guided by compassion, accountability, collaboration, and a commitment to improving lives across Malawi.",
  },

  mission: {
    title: "Our Mission",

    description:
      "To improve the quality of life for vulnerable communities through humanitarian assistance, sustainable development programs, and partnerships that empower individuals and strengthen communities.",
  },

  vision: {
    title: "Our Vision",

    description:
      "A Malawi where every community has access to the resources, opportunities, and support needed to live healthy, safe, and dignified lives.",
  },

  values: [
    {
      title: "Compassion",
      icon: "heart",
      description:
        "We put people at the center of everything we do and respond with empathy to the needs of communities.",
    },
    {
      title: "Integrity",
      icon: "shield-check",
      description:
        "We operate with honesty, transparency, and accountability in all our actions and partnerships.",
    },
    {
      title: "Collaboration",
      icon: "users",
      description:
        "We believe meaningful change happens when communities, partners, and stakeholders work together.",
    },
    {
      title: "Sustainability",
      icon: "leaf",
      description:
        "We focus on long-term solutions that continue creating value long after projects are completed.",
    },
    {
      title: "Inclusion",
      icon: "globe",
      description:
        "We promote equal opportunities and ensure all voices are respected and represented.",
    },
    {
      title: "Excellence",
      icon: "award",
      description:
        "We continuously improve our programs and services to maximize positive impact.",
    },
  ],

  approach: {
    title: "How We Create Impact",

    description:
      "Our work is driven by partnerships, community participation, and evidence-based solutions that address both immediate needs and long-term development.",

    points: [
      "Community-led development",
      "Sustainable solutions",
      "Strategic partnerships",
      "Capacity building",
      "Accountability and transparency",
    ],
  },

  impact: {
    title: "Making a Difference Together",

    description:
      "Every project represents lives improved, communities strengthened, and opportunities created through the support of donors, volunteers, and partners.",

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

  team: {
    title: "Meet the People Behind Our Mission",

    description:
      "Our team brings together dedicated professionals and volunteers committed to improving lives and strengthening communities across Malawi.",

    members: [
      {
        name: "Team Member",
        role: "Executive Director",
        image: "/images/team/member-1.jpg",
      },
      {
        name: "Team Member",
        role: "Programs Manager",
        image: "/images/team/member-2.jpg",
      },
      {
        name: "Team Member",
        role: "Finance Officer",
        image: "/images/team/member-3.jpg",
      },
    ],
  },

  partners: {
    title: "Working Together for Greater Impact",

    description:
      "We collaborate with government institutions, NGOs, businesses, development partners, and local communities to deliver sustainable programs that create meaningful change.",
  },

  faqs: [
    {
      question: "What does Naglind do?",
      answer:
        "Naglind implements humanitarian and community development programs focused on health, education, clean water, nutrition, shelter, and emergency response.",
    },
    {
      question: "Where does Naglind operate?",
      answer:
        "We work with communities across Malawi through local partnerships and targeted development initiatives.",
    },
    {
      question: "How can I support Naglind?",
      answer:
        "You can support our work by donating, volunteering, partnering with us, or helping spread awareness about our mission.",
    },
    {
      question: "How are donations used?",
      answer:
        "Donations directly support our programs and help us deliver sustainable solutions that improve lives in the communities we serve.",
    },
  ],

  finalCTA: {
    title: "Together, we can create lasting change.",

    description:
      "Every contribution helps us reach more communities, expand our programs, and improve lives. Join us in building a healthier and more resilient Malawi.",

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