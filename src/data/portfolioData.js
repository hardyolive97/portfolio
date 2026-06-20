// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const portfolioData = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Atul Sinha",
  role: "Full Stack Developer Intern",
  tagline: "Full Stack Developer focused on building modern web applications with the MERN stack, solving real-world problems, and continuously improving through hands-on projects and software engineering practices.",
  location: "Ranchi, Jharkhand, India",
  availableForWork: true,

  // ── Contact ────────────────────────────────────────────────
  contact: {
    email: "atulsinha.2799@gmail.com",
    linkedin: "https://www.linkedin.com/in/atul-sinha-b548b62aa/",
    github: "https://github.com/hardyolive97",
    // twitter: "https://twitter.com/your-handle",   // Uncomment & fill in
    // portfolio: "https://your-portfolio.com",       // Uncomment & fill in
  },

  // ── Resume ─────────────────────────────────────────────────
  resumeUrl: "#", // Replace with actual resume URL (e.g. Google Drive link)

  // ── About ──────────────────────────────────────────────────
  about: [
    "Hi! I'm Atul Sinha, a passionate Full Stack Developer currently pursuing my B.Tech at the Indian Institute of Information Technology Ranchi (IIIT Ranchi), expected to graduate in 2028.",
    "I specialize in building modern, scalable web applications using the MERN stack — MongoDB, Express.js, React, and Node.js. My interest lies in crafting solutions that are both technically robust and user-friendly.",
    "Beyond web development, I'm deeply invested in Data Structures & Algorithms and Software Engineering principles. I believe strong fundamentals are the backbone of great software, and I continuously sharpen my problem-solving skills through practice and real-world projects.",
    "I'm always open to exciting opportunities, collaborations, and challenges that push me to grow as a developer.",
  ],

  // ── Skills ─────────────────────────────────────────────────
  skills: {
    Frontend: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "React Router", icon: "🔀" },
      { name: "Tailwind CSS", icon: "💨" },
    ],
    Backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
    ],
    Database: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
    ],
    Tools: [
      { name: "Git", icon: "📝" },
      { name: "GitHub", icon: "🐙" },
      { name: "Postman", icon: "📮" },
      { name: "Vercel", icon: "▲" },
      { name: "Docker", icon: "🐳" },
    ],
  },

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      id: 1,
      title: "ATS Resume Gap Analyzer",
      description:
        "A web application that compares resumes with job descriptions, identifies matching keywords, highlights missing skills, and calculates ATS compatibility scores to help job seekers optimize their resumes for Applicant Tracking Systems.",
      longDescription:
        "Built with React and Vite, this tool provides real-time ATS compatibility analysis. Upload your resume and paste the job description — the app highlights keyword matches, surfaces skill gaps, and gives you an actionable compatibility score to maximize your chances of passing automated screening.",
      techStack: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://ats-resume-analyzer-vert.vercel.app/", // TODO: Replace with actual live demo URL
      githubUrl: "https://github.com/hardyolive97/ats-resume-analyzer", // TODO: Replace with actual GitHub repo URL
      featured: true,
      status: "completed",
      highlight: "Primary Featured Project",
    },
    {
  id: 2,
  title: "OTP Authentication System",
  description:
    "A secure OTP-based authentication system that enables users to register and log in using one-time passwords. Implemented user verification workflows, authentication logic, and secure backend APIs for managing login sessions and user access.",
  techStack: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Tailwind CSS"
  ],
  liveUrl: null, // Add deployment URL if available
  githubUrl: "https://github.com/hardyolive97/Authentication-System", // Add GitHub URL if available
  featured: false,
  status: "completed",
  highlight: "Secure Authentication System",
},
{
  id: 3,
  title: "URL Shortener",
  description:
    "A full-stack URL shortening application that converts long URLs into short, shareable links. Features custom short codes, redirection handling, link management, and efficient database storage for tracking generated URLs.",
  techStack: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "Tailwind CSS"
  ],
  liveUrl: null, // Add deployment URL if available
  githubUrl: null, // Add GitHub URL if available
  featured: false,
  status: "completed",
  highlight: "Full-Stack Web Application",
},
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      id: 1,
      institution: "Indian Institute of Information Technology Ranchi",
      shortName: "IIIT Ranchi",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Electronics and Communication Engineering",
      startYear: "2024",
      endYear: "2028",
      status: "Pursuing",
      description:
        "Focusing on core computer science fundamentals, data structures & algorithms, software engineering, and full-stack web development. Active participant in coding communities and hackathons.",
    },
  ],
};

export default portfolioData;
