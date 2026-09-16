export type TeamMember = {
  id: string;
  name: string;
  bio: string;
  skills: string[];
  photo?: string;
  linkedin?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "jakub-kuka",
    name: "Jakub Kuka",
    bio: "Technical consultant and software engineer focused on AI/ML, bridging clients and development teams to deliver practical, client-ready solutions.",
    skills: ["React", "Next.js", ".NET", "Node.js", "Python", "LangChain/RAG", "Azure"],
    photo: "/team/jakub-kuka.png",
    linkedin: "https://www.linkedin.com/in/jakub-kuka/",
  },
  {
    id: "ege-oztas",
    name: "Ege Öztaş",
    bio: "From Türkiye. 4+ years of experience in software work and cloud engineering. Runs a small software studio shipping AI-native SaaS products and iOS apps end-to-end. Enjoys game development, and Formula 1.",
    skills: ["TypeScript", "Next.js", "Python", "Supabase/PostgreSQL", "GCP"],
    photo: "/team/ege-oztas.jpeg",
    linkedin: "https://www.linkedin.com/in/egeoztas/",
  },
  {
    id: "aqdus-farooq",
    name: "Aqdus Farooq",
    bio: "From Pakistan. Around 8 years of experience in Unity and software development across mobile, PC, and WebGL projects. Enjoys gaming, exploring new places, and learning about technology.",
    skills: ["Unity", "C#"],
    photo: "/team/aqdus-farooq.jpeg",
    linkedin: "https://www.linkedin.com/in/aqdusfarooq/",
  },
  {
    id: "merve-doker",
    name: "Merve Döker",
    bio: "From Turkey, based in the Netherlands. 10+ years specializing in Java, Spring Boot, backend development, and distributed systems. Enjoys travelling and spending time with her dog, Lucky.",
    skills: ["Java", "Spring Boot", "Distributed Systems"],
    photo: "/team/merve-doker.png",
    linkedin: "https://www.linkedin.com/in/mervedkr/",
  },
  {
    id: "minh-le",
    name: "Minh Le",
    bio: "Enjoys low-level programming and parallel computing to make the most of the hardware, and is learning FPGA design. Has experience in embedded Linux, virtualization, and computer networking.",
    skills: ["C/C++", "Python", "C#", "MATLAB"],
    photo: "/team/minh-le.jpeg",
    linkedin: "https://www.linkedin.com/in/minh-le-7144681b3/",
  },
  {
    id: "maryam-mirbagheri",
    name: "Maryam Mirbagheri",
    bio: "Background in Computer Engineering, now shifting focus toward Python, data analysis, and artificial intelligence. Passionate about building intelligent, scalable systems with Machine Learning and MLOps.",
    skills: ["Python", "Data Analysis", "Machine Learning", "MLOps"],
    photo: "/team/maryam-mirbagheri.png",
    linkedin: "https://www.linkedin.com/in/mmirbagheri",
  },
  {
    id: "thai-thien-an-pham",
    name: "Thai Thien An Pham",
    bio: "3+ years of experience building high-throughput, enterprise-grade backends in the insurance domain. Combines Java development with software architecture and Generative AI applications like RAG.",
    skills: ["Java", "Spring Boot", "Spring Batch", "Microservices", "Docker"],
    photo: "/team/thai-thien-an-pham.jpeg",
    linkedin: "https://www.linkedin.com/in/anthaithien-pham28799/",
  },
  {
    id: "saeid-omar",
    name: "Saeid Omar",
    bio: "28 years old, married, and keeps it simple: enjoys solving problems, gaming, and spending time with his wife.",
    skills: [],
    photo: "/team/saeid-omar.jpg",
  },
  {
    id: "saad-bangash",
    name: "Saad Bangash",
    bio: "Founder of Loomuz, helping businesses launch smarter through automation, app development, and web solutions. Based in the Netherlands. Always building, always learning.",
    skills: ["Automation", "App Development", "Web Development"],
    photo: "/team/saad-bangash.png",
    linkedin: "https://www.linkedin.com/in/saad-bangash",
  },
];
