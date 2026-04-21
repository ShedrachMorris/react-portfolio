import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import port4 from "../assets/port4.png";

export const portfolioProjects = [
  {
    id: 1,
    title: "VirtualR",
    description:
      "VirtualR is a web-based VR app builder / development tool that helps developers design and create virtual reality applications through a friendly interface.",
    image: port1,
    technologies: ["React.js", "Tailwind"],
    githubUrl: "https://github.com/ShedrachMorris/virtualr",
    liveUrl: "https://virtualr-phi.vercel.app/#",
  },
  {
    id: 2,
    title: "Pick-up Logistics",
    description: "A fast, reliable logistics solution for global freight, last-mile delivery, and smart warehousing. It features real-time GPS tracking, 24/7 support, insured shipping, and an easy online booking system for seamless supply chain management.",
    image: port2,
    technologies: ["Express.js", "MongoDB", "Next.js", "shadcn"],
    githubUrl: "https://github.com/ShedrachMorris/pick-up-clients",
    liveUrl: "https://pickup.archsaintnexus.com/",
  },
  {
    id: 3,
    title: "HealthMate",
    description: "A unified healthcare platform that connects users with nearby doctors, pharmacies, and labs. It offers 24/7 online consultations, AI health assistance, and secure access to board-certified physicians for both virtual and in-person appointments.",
    image: port3,
    technologies: ["Python ", "PostgreSQL", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/ShedrachMorris/Health-mate-client-",
    liveUrl: "https://healthmate.archsaintnexus.com/",
  },
  {
    id: 4,
    title: "Concierge",
    description: "A digital concierge service that handles lifestyle tasks like errands, travel arrangements, restaurant reservations, and personal shopping. It matches users with verified professionals and provides real-time updates, transparent pricing, and SLA tracking.",
    image: port4,
    technologies: ["NestJS", "Prisma", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/ShedrachMorris/concierge-client",
    liveUrl: "https://concierge.archsaintnexus.com/",
  },
];
