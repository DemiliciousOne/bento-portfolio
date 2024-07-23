export interface PortfolioItem {
  id: number;
  title: string;
  url: string;
  description: string;
  featureImage: string;
  achievementIcon: string;
  achievement: string;
  techStack: string[];
}

export const portfolioData = [
  {
    id: 1,
    title: "Career Vault",
    url: "https://careervault.io",
    description:
      "A modern remote job board that shows hundreds of new opportunities each day.",
    featureImage: "/screenshots/career-vault-screenshot.png",
    achievementIcon: "/src/assets/icons/people.svg",
    achievement: "73k monthly visitors",
    techStack: ["SolidJS", "Astro", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    title: "RPM BPO",
    url: "https://rpmbpo.com",
    description:
      "Marketing website for a nearshore outsourcing agency in Latin America.",
    featureImage: "/screenshots/rpm-screenshot.png",
    techStack: ["Webflow", "Figma", "JavaScript"],
  },
  // {
  //   id: 3,
  //   title: "Caya",
  //   url: "https://magazin.getcaya.com/",
  //   description:
  //     "(Improved and maintained) blog and marketing website for a document management SaaS.",
  //   featureImage: "/screenshots/caya-screenshot.png",
  //   techStack: ["React", "TypeScript", "GraphQL", "Ghost"],
  // },
  // {
  //   id: 4,
  //   title: "Cosmo",
  //   url: "https://hirecosmo.com",
  //   description:
  //     "Marketplace connecting companies with top developers worldwide.",
  //   featureImage: "/screenshots/cosmo-screenshot.png",
  //   achievementIcon: "/src/assets/icons/under-construction.svg",
  //   achievement: "In progress",
  //   techStack: ["Webflow", "Figma", "JavaScript"],
  // },
  // Add more project objects for each portfolio project
];
