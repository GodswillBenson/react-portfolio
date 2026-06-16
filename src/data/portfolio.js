// src/data/portfolio.js
export const portfolioData = {
    navigation: {
        logo: "rivera",
        links: [
            { name: "Home", path: "/portfolio" },
            { name: "About", path: "/portfolio/about" },
            { name: "Works", path: "/portfolio/works" },
            { name: "Blog", path: "/portfolio/blog" },
            { name: "Contact", path: "/portfolio/contact" }
        ]
    },
    home: {
        title: "Rivera jonas",
        tagline: "Creating designs that ignite responses.",
        description: "Direct your energy towards growing your business, and entrust me with the task of efficiently presenting your business in the digital world, setting it apart from competitors.",
        marquee: [
            "Research & planning",
            "Branding",
            "UI/UX Design",
            "Illustration"
        ],
        services: [
            { num: "01", title: "Research & planning", desc: "USER RESEARCH, AUDITS AND PLANS" },
            { num: "02", title: "Branding", desc: "USER RESEARCH, AUDITS AND PLANS" },
            { num: "03", title: "UI/UX Design", desc: "USER RESEARCH, AUDITS AND PLANS" },
            { num: "04", title: "Illustration", desc: "USER RESEARCH, AUDITS AND PLANS" }
        ],
        works: [
            { id: "01", title: "LOGO DESIGN", category: "We invite you to explore our world of design, where each project is a harmonious blend of form and art.", year: "2024" },
            { id: "02", title: "WEBSITE UI DESIGN", category: "We invite you to explore our world of design, where each project is a harmonious blend of form and art.", year: "2024" },
            { id: "03", title: "BRAND IDENTITY DESIGN", category: "We invite you to explore our world of design, where each project is a harmonious blend of form and art.", year: "2024" },
            { id: "04", title: "UX RESEARCH", category: "We invite you to explore our world of design, where each project is a harmonious blend of form and art.", year: "2024" }
        ],
        clients: ["brand-image-estate", "brand-image-sora", "brand-image-venus", "brand-image-ether", "brand-image-spine", "brand-image-seal"],
        awards: [
            { name: "Honorable Mention", detail: "2024 - AWWARDS" },
            { name: "Best Ui Design Award", detail: "2024 - Behance" },
            { name: "Site Of The Day", detail: "2023 - AWWARDS" },
            { name: "CSS Awards", detail: "2022 - CSS Design Awards" }
        ],
        testimonials: [
            { quote: "They took my vision and turned it into reality. I am grateful for their expertise and dedication to my project.", author: "Mark Roberts", company: "Vision Vista Inc. - COO" },
            { quote: "They exceeded my expectations at every turn. Their commitment to excellence is evident in every project they undertake.", author: "Masha Arora", company: "Freelancer" },
            { quote: "Outstanding service! The team delivered above and beyond my expectations. Highly recommended!", author: "Ronald Richards", company: "Synchron. - CEO" }
        ]
    },
    about: {
        heading: "Experienced creative designer and custom artist based in London, blending innovation with artistic flair.",
        bio: "Crafting captivating visuals that leave a lasting impression. I provide artistic solutions to meet your business requirements.",
        philosophy: [
            { title: "Our Mission", desc: "My services blend creativity and strategy to bring your vision to life, leaving a lasting impact." },
            { title: "Our Vision", desc: "Direct your energy towards growing your business, and entrust me with the task of efficiently presenting your business." }
        ]
    },
    blog: [
        { date: "MARCH 24, 2026", title: "The Power of Visual Hierarchy in Modern Landing Interfaces", readTime: "5 Mins Read" },
        { date: "FEBRUARY 11, 2026", title: "Why Micro-interactions Define Premium Digital Products", readTime: "7 Mins Read" }
    ],
    footer: {
        email: "hello@riverajonas.io",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        copyright: "© The Rivera Jonas. All rights reserved. Powered by webflow"
    }
};