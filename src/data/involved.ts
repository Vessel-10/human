export interface DonateTier {
    amount: string;
    description: string;
}

export interface VolunteerRole {
    title: string;
    description: string;
}

export interface PartnerType {
    title: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface GetInvolved {
    hero: {
        eyebrow: string;
        title: string;
        description: string;
        primaryCTA: {
            text: string;
            href: string;
        };
        secondaryCTA: {
            text: string;
            href: string;
        };
    };

    waysToHelp: {
        title: string;
        items: {
            icon: string;
            title: string;
            description: string;
        }[];
    };

    donate: {
        title: string;
        description: string;
        tiers: DonateTier[];
        button: {
            text: string;
            href: string;
        };
    };

    volunteer: {
        title: string;
        description: string;
        roles: VolunteerRole[];
        button: {
            text: string;
            href: string;
        };
    };

    partner: {
        title: string;
        description: string;
        types: PartnerType[];
        button: {
            text: string;
            href: string;
        };
    };

    faq: {
        title: string;
        description: string;
        items: FAQ[];
    };

    CTA: {
        title: string;
        description: string;
        buttons: {
            primary: {
                text: string;
                href: string;
            };
            secondary: {
                text: string;
                href: string;
            };
        };
    };
}

export const getInvolved: GetInvolved = {
    hero: {
        eyebrow: "GET INVOLVED",
        title: "Your support helps communities across Malawi.",
        description:"Whether you choose to donate, volunteer, or partner with us, every action contributes to meaningful change.",
        primaryCTA: {
            text: "Donate Now",
            href: "/contact",
        },
        secondaryCTA: {
            text: "Become a Volunteer",
            href: "/get-involved",
        },
    },

    waysToHelp: {
        title: "Ways You Can Help",
        items: [
            {
                icon: "heart",
                title: "Donate",
                description: "Support projects that improve lives across communities.",
            },
            {
                icon: "users",
                title: "Volunteer",
                description: "Give your time and skills to meaningful initiatives.",
            },
            {
                icon: "handshake",
                title: "Partner",
                description: "Work with us to expand our impact.",
            },
            {
                icon: "share",
                title: "Spread Awareness",
                description: "Help us reach more people by sharing our mission.",
            },
        ],
    },

    donate: {
        title: "Support a project that changes lives",
        description:"Your donation helps fund healthcare, education, clean water, nutrition, and emergency relief programs.",
        tiers: [
            {
                amount: "K5,000",
                description: "Provides school supplies for children.",
            },
            {
                amount: "K20,000",
                description: "Supports clean water initiatives.",
            },
            {
                amount: "K50,000",
                description: "Helps fund community nutrition programs.",
            },
            {
                amount: "Any Amount",
                description: "Supports ongoing humanitarian work.",
            },
        ],
            button: {
            text: "Donate Now",
            href: "/get-involved",
        },
    },

    volunteer: {
        title: "Volunteer your skills and time",
    description:
      "Join our team and contribute to real projects that support communities across Malawi.",
    roles: [
      {
        title: "Community Outreach",
        description: "Support field activities and local engagement programs.",
      },
      {
        title: "Fundraising",
        description: "Help organize and run fundraising campaigns.",
      },
      {
        title: "Media & Photography",
        description: "Document stories and capture field impact.",
      },
      {
        title: "Administration",
        description: "Assist with coordination and operations.",
      },
      {
        title: "Professional Support",
        description: "Offer expertise in health, education, IT, or finance.",
      },
    ],
    button: {
      text: "Become a Volunteer",
      href: "/get-involved",
    },
  },

  partner: {
    title: "Let's create greater impact together",
    description:
      "We collaborate with organizations that share our mission to improve lives across Malawi.",
    types: [
      {
        title: "Corporate Partnerships",
        description: "Support initiatives through CSR and sponsorships.",
      },
      {
        title: "NGO Collaboration",
        description: "Work together on humanitarian projects.",
      },
      {
        title: "Government Partnerships",
        description: "Support national development programs.",
      },
      {
        title: "Education Institutions",
        description: "Collaborate on training and research programs.",
      },
    ],
    button: {
      text: "Become a Partner",
      href: "/contact",
    },
  },

  faq: {
    title: "Frequently Asked Questions",
    description:
      "Everything you need to know before getting involved with MAHAG.",
    items: [
      {
        question: "Can I volunteer if I have no experience?",
        answer:
          "Yes. Many of our volunteer roles do not require prior experience. We provide guidance and support.",
      },
      {
        question: "Do I need to be in Malawi to help?",
        answer:
          "No. Some roles can be done remotely, such as media support, fundraising, or awareness campaigns.",
      },
      {
        question: "How are donations used?",
        answer:
          "Donations go directly into programs like healthcare, education, clean water, nutrition, and emergency relief.",
      },
      {
        question: "Can companies partner with NAGLIND?",
        answer:
          "Yes. We work with companies on CSR programs, sponsorships, and community projects.",
      },
    ],
  },

  CTA: {
    title: "Ready to make a difference?",
    description:
      "Every action counts. Join us in improving lives across Malawi.",
    buttons: {
      primary: {
        text: "Donate Now",
        href: "/get-involved",
      },
      secondary: {
        text: "Get Involved",
        href: "/contact",
      },
    },
  },
};