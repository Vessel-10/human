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

    finalCTA: {
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