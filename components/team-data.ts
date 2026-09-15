export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  photo?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "jakub-kuka",
    name: "Jakub Kuka",
    role: "Professional Services Consultant @ Quadient",
    bio: "Software engineer and technical consultant based in Prague, Czech Republic. Currently bridging clients and development teams on AI/ML-driven solutions at Quadient. Previously interned at UCB in Brussels and worked as a web developer/tester in Slovakia. Brings a stand-up comedy background to communication and teamwork.",
    skills: ["React", "Next.js", ".NET", "Node.js", "Python", "LangChain/RAG", "Azure"],
    photo: "/team/jakub-kuka.png",
  },
  {
    id: "ege-oztas",
    name: "Ege Öztaş",
    role: "MSc Software Engineering, Saxion",
    bio: "From Türkiye. 4+ years of professional experience in software development and cloud engineering. Runs a small software studio, building and shipping AI-native SaaS products and several iOS apps end-to-end. Enjoys computer games, game development, Formula 1, and side projects.",
    skills: ["TypeScript", "Next.js", "Python", "Supabase/PostgreSQL", "GCP"],
    photo: "/team/ege-oztas.jpeg",
  },
  {
    id: "aqdus-farooq",
    name: "Aqdus Farooq",
    role: "MSc ICT: Software Engineering, Saxion",
    bio: "From Pakistan. Around 8 years of experience in Unity and software development across mobile, PC, and WebGL projects. Enjoys gaming, exploring new places, and learning about technology. Excited to collaborate and learn with the team!",
    skills: ["Unity", "C#"],
    photo: "/team/aqdus-farooq.jpeg",
  },
  {
    id: "merve-doker",
    name: "Merve Döker",
    role: "MSc Software Engineering, Saxion",
    bio: "From Turkey, based in the Netherlands. 10+ years of experience specializing in Java, Spring Boot, backend development, and distributed systems. Interested in AI, writing, and building her own digital projects. Enjoys travelling and spending time with her dog, Lucky.",
    skills: ["Java", "Spring Boot", "Distributed Systems"],
    photo: "/team/merve-doker.png",
  },
  {
    id: "minh-le",
    name: "Minh Le",
    role: "Needs confirmation",
    bio: "Enjoys low-level programming and parallel computing to make the most of the hardware, and is learning FPGA design. Has experience in security, embedded Linux, virtualization, and computer networking, and has deployed a webserver and database on a Raspberry Pi.",
    skills: ["C/C++", "Python", "C#", "MATLAB"],
    photo: "/team/minh-le.jpeg",
  },
  {
    id: "maryam-mirbagheri",
    name: "Maryam Mirbagheri",
    role: "Needs confirmation",
    bio: "Background in Computer Engineering, now shifting focus toward Python programming, data analysis, and artificial intelligence. Passionate about understanding data, building intelligent systems, and combining Machine Learning with MLOps for smarter, scalable solutions.",
    skills: ["Python", "Data Analysis", "Machine Learning", "MLOps"],
    photo: "/team/maryam-mirbagheri.png",
  },
  {
    id: "thai-thien-an-pham",
    name: "Thai Thien An Pham",
    role: "MSc ICT: Software Engineering, Saxion",
    bio: "3+ years of experience building high-throughput, enterprise-grade backends in the insurance domain. Combines Java development with software architecture and Generative AI applications, including RAG systems with vector databases and LLMs.",
    skills: ["Java", "Spring Boot", "Spring Batch", "Microservices", "Docker"],
    photo: "/team/thai-thien-an-pham.jpeg",
  },
  {
    id: "saeid-omar",
    name: "Saeid Omar",
    role: "Software Engineer",
    bio: "28 years old, married, and keeps it simple: enjoys solving problems, gaming, and spending time with his wife.",
    skills: [],
    photo: "/team/saeid-omar.jpg",
  },
  {
    id: "saad-bangash",
    name: "Saad Bangash",
    role: "MSc ICT: Software Engineering, Saxion",
    bio: "Founder of Loomuz, helping businesses launch smarter through automation, app development, and web solutions. Based in the Netherlands. Always building, always learning.",
    skills: ["Automation", "App Development", "Web Development"],
    photo: "/team/saad-bangash.png",
  },
  {
    id: "alexander",
    name: "Alexander",
    role: "",
    bio: "",
    skills: [],
  },
];
