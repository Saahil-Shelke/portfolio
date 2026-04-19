export const personalInfo = {
  name: "Sahil Shelke",
  title: "Software Developer",
  tagline: "Leveraging AI & Machine Learning to solve real-world problems",
  email: "saahil.shelke@gmail.com",
  phone: "+91 8669993553",
  location: "Dresden, Germany",
  social: {
    github: "https://github.com/saahil-shelke",
    linkedin: "https://linkedin.com/in/shelkesahil",
  },
};

export const experience = [
  {
    id: 1,
    role: "Software Developer",
    company: "Watershed Organisation Trust (WOTR)",
    location: "Pune, India",
    period: "June 2025 — February 2026",
    type: "full-time",
    bullets: [
      "Developed a RAG-based generative AI chatbot serving 500+ farmers with real-time pest, disease, and fertilizer advisories — reducing advisory response time by 80% and achieving 92% accuracy in crop disease identification",
      "Architected a farmer data management system processing 10,000+ farmer records, enabling personalized advisory delivery based on crop type, soil conditions, and local weather patterns",
      "Built an FPO/FPC tracking platform managing 50+ producer organizations with member onboarding, procurement workflows, and organizational analytics — improving operational visibility by 60%",
      "Designed a water governance system collecting village-level data across 200+ villages, generating actionable adaptation plans that contributed to a 25% improvement in water resource management",
      "Integrated weather data from IMD, OpenWeather, and Davis weather stations into a unified pipeline, delivering accurate 7-day forecast advisories to farmers via SMS and mobile app",
      "Deployed and calibrated 30+ soil moisture sensors with LoRa gateway integration, enabling real-time field monitoring that helped farmers reduce irrigation water consumption by 35%",
      "Tech stack: Python, FastAPI, Firebase, MongoDB, PostgreSQL, AWS (Lambda, S3, EC2), Azure",
    ],
  },
  {
    id: 2,
    role: "Software Development Intern",
    company: "Watershed Organisation Trust (WOTR)",
    location: "Pune, India",
    period: "August 2024 — May 2025",
    type: "internship",
    bullets: [
      "Collaborated on wheat yield prediction using Sentinel-2 satellite imagery and Deep Learning, achieving 89% prediction accuracy across 15 districts by integrating NDVI, EVI, and meteorological features",
      "Cleaned, processed, and analyzed 50,000+ district-level agricultural records for NaturePro with geospatial validation — reducing data inconsistencies by 40%",
      "Designed and shipped backend APIs for FPO management (member CRUD, procurement tracking) and GDD-Analysis modules, handling 1,000+ daily API requests",
      "Built a pest prediction pipeline using autoencoders on meteorological data, achieving 85% early detection accuracy — deployed as a FastAPI microservice",
    ],
  },
  {
    id: 3,
    role: "Software Development Intern",
    company: "Sequelstring Solutions & Consultancy",
    location: "Mumbai, India",
    period: "January 2023 — July 2023",
    type: "internship",
    bullets: [
      "Contributed to watt-meter fault detection using YOLOv5, achieving 94% mAP by training on 5,000+ annotated images — reducing manual inspection time by 70%",
      "Optimized model accuracy by creating custom datasets with Roboflow and implementing data augmentation strategies, improving detection precision by 12%",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Farm Precise Chatbot",
    description:
      "RAG-based generative AI system providing crop, pest, disease, and fertilizer advisories to 500+ farmers. Integrates weather data from IMD, OpenWeather, and Davis stations for accurate real-time recommendations.",
    tech: ["Python", "FastAPI", "RAG", "Generative AI", "MongoDB", "AWS"],
    links: {
      live: "https://chat.wotr.org.in",
      app: "https://play.google.com/store/apps/details?id=wotr.farmprecise",
    },
  },
  {
    id: 2,
    title: "Water Governance System",
    description:
      "Platform collecting village-level data across 200+ villages, generating actionable adaptation plans. Includes IoT integration with soil moisture sensors and LoRa gateway systems.",
    tech: ["Python", "FastAPI", "PostgreSQL", "IoT", "Firebase", "Azure"],
    links: {},
  },
  {
    id: 3,
    title: "FPC Tracking Platform",
    description:
      "Enterprise platform managing 50+ Farmer Producer Organizations with member onboarding, procurement workflows, and organizational analytics dashboards.",
    tech: ["Python", "FastAPI", "MongoDB", "AWS Lambda", "S3"],
    links: {},
  },
  {
    id: 4,
    title: "Yield Prediction — Remote Sensing",
    description:
      "Wheat yield prediction using Sentinel-2 satellite imagery, IMD meteorological data, and Deep Learning. Achieved 89% accuracy across 15 districts using NDVI and EVI vegetation indices.",
    tech: ["Python", "TensorFlow", "Google Earth Engine", "QGIS"],
    links: {},
  },
  {
    id: 5,
    title: "Employee Tracking System",
    description:
      "Android application enabling employers to track employee whereabouts for onsite and remote work. Integrated GPS and geofencing using Google Maps API.",
    tech: ["Flutter", "Java", "Google Maps API", "Firebase"],
    links: {},
  },
  {
    id: 6,
    title: "Smart BAT — Budget Analyzer",
    description:
      "Application that scans expense receipts using OCR, automatically categorizing and storing data. Published at IEEE ICACTA 2023.",
    tech: ["Android Studio", "Java", "Python", "OCR", "Firebase"],
    links: {
      paper: "https://ieeexplore.ieee.org/document/10392452",
    },
  },
];

export const skills = {
  "Languages": ["Python", "SQL", "Java", "C++"],
  "Frameworks": ["FastAPI", "TensorFlow", "PyTorch", "Flutter"],
  "Cloud & DevOps": ["AWS (Lambda, S3, EC2)", "Azure", "Docker", "Git"],
  "Databases": ["PostgreSQL", "MongoDB", "Firebase", "MySQL"],
  "Tools": ["Postman", "QGIS", "Google Earth Engine", "Roboflow", "Linux"],
  "AI / ML": ["Deep Learning", "Computer Vision", "YOLOv5", "RAG", "Gen AI", "OCR"],
};

export const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Technische Universität Dresden",
    location: "Dresden, Germany",
    period: "April 2026 — Present",
    details: "Focus: Research in Artificial Intelligence, Machine Learning, Software Development",
    current: true,
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Don Bosco Institute of Technology (University of Mumbai)",
    location: "Mumbai, India",
    period: "October 2020 — July 2024",
    details: "CGPA: 8.38 / 10",
    current: false,
  },
];

export const publications = [
  {
    title: "Smart BAT — Smart Budget Analyzer and Tracker",
    conference: "International Conference on Advancements in Computing Technology and Applications 2023 (IEEE)",
    description:
      "Published research on an application that scans expense receipts using OCR, automatically storing and categorizing expense data.",
    link: "https://ieeexplore.ieee.org/document/10392452",
  },
];

export const awards = [
  {
    title: "Best Concept Game — Teknack'22",
    description: "Won Best Concept Game award at Teknack Gaming Studio hackathon for innovative game design using Unity.",
  },
  {
    title: "First Runner Up — Hackover 3.0",
    description: "Secured First Runner Up in Game Development Domain at Fr. Conceicao Rodrigues College of Engineering.",
  },
];

export const volunteering = [
  {
    title: "Mentor — Girls4Impact",
    period: "Oct 2021 — Jan 2022",
    description: "Mentored school-going girls in Python programming fundamentals over four months.",
  },
  {
    title: "Technical Head — Colosseum",
    period: "Jan 2023 — Mar 2023",
    description: "Led a team of 7 for DBIT's Annual Technical Event. Coordinated workshops and competitions.",
  },
  {
    title: "Mentor — Teknack Gaming Studio",
    period: "Sep 2022 — Feb 2024",
    description: "Conducted Unity workshops and delivered lectures on game development.",
  },
];

export const navLinks = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "education", label: "education" },
  { id: "publications", label: "achievements" },
  { id: "contact", label: "contact" },
];

// Easter egg: terminal commands
export const terminalCommands = {
  help: "Available commands: help, whoami, skills, contact, projects, clear, sudo hire-sahil",
  whoami: "Sahil Shelke — Software Developer & MS CS @ TU Dresden",
  skills: "['Python', 'FastAPI', 'TensorFlow', 'AWS', 'Docker', 'PostgreSQL', ...]",
  contact: "Email: saahil.shelke@gmail.com | LinkedIn: linkedin.com/in/shelkesahil",
  projects: "Run 'pip install sahil-portfolio' to see all projects ↑",
  clear: "__CLEAR__",
  "sudo hire-sahil": "✓ Excellent choice! Sending resume... 📧\n  → saahil.shelke@gmail.com",
  "pip install sahil": "Successfully installed sahil-0.1.0\n  Dependencies: python, creativity, coffee",
  "import antigravity": "🚀 You found the Python easter egg!",
  "exit()": "Nice try. You can't escape this portfolio 😎",
};
