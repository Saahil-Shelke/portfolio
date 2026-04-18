export const personalInfo = {
  name: "Sahil Shelke",
  title: "Software Developer",
  tagline: "Leveraging AI & Machine Learning to solve real-world problems",
  email: "saahil.shelke@gmail.com",
  phone: "+91 8669993553",
  location: "Dresden, Germany",
  bio: `At the heart of my professional journey lies a deep-seated passion for leveraging technology to solve real-world problems. Currently pursuing my Master's in Computer Science at TU Dresden, I apply my knowledge of Computer Engineering to create impactful software solutions. My toolbox is rich with Python, FastAPI, Machine Learning, Neural Networks, SQL, MongoDB and PostgreSQL — honed through both academic rigor and hands-on experience. I am committed to continuous learning and applying my technical acumen to drive forward the intersection of Artificial Intelligence and Machine Learning.`,
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
      "Developed an AI-powered agricultural chatbot using RAG-based generative AI for crop, pest, disease, and fertilizer advisories",
      "Designed and built a farmer data management system to collect and organize farmer-level data for delivering customized advisories",
      "Built a platform for FPO/FPC tracking, enabling the company to manage and monitor producer organizations effectively",
      "Developed a water governance system to collect village-level data and generate actionable adaptation plans",
      "Integrated weather data sources (IMD, OpenWeather, Davis stations) for accurate forecast advisories",
      "Worked on IoT solutions including installation and calibration of soil moisture sensors with gateway integration",
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
      "Collaborated on wheat yield prediction using remote sensing by integrating geospatial data and Deep Learning techniques",
      "Cleaned, processed, and analyzed district-level agricultural datasets for NaturePro with indicator validation and geospatial evaluations",
      "Designed backend APIs for multiple applications: FPO (member management, procurement), GDD-Analysis",
      "Applied DL techniques like autoencoders for Pest Prediction using meteorological data, built pipeline using FastAPI",
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
      "Contributed to the Image Analytics team on watt-meter fault detection using YOLOv5, PyTorch, and machine learning",
      "Optimized model accuracy by creating custom datasets with Roboflow, improving performance across multiple use cases",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Farm Precise Chatbot",
    description:
      "RAG-based generative AI system providing crop, pest, disease, and fertilizer advisories to farmers. Integrates weather data from IMD, OpenWeather, and Davis stations for accurate real-time recommendations.",
    tech: ["Python", "FastAPI", "RAG", "Generative AI", "MongoDB", "AWS"],
    highlights: ["RAG Architecture", "Multi-source Weather Data", "Real-time Advisories"],
    icon: "🤖",
  },
  {
    id: 2,
    title: "Water Governance System",
    description:
      "Platform to collect village-level data and generate actionable adaptation plans for improving water availability and usage. Includes IoT integration with soil moisture sensors and gateway systems.",
    tech: ["Python", "FastAPI", "PostgreSQL", "IoT", "Firebase", "Azure"],
    highlights: ["Village-level Data", "IoT Sensors", "Adaptation Plans"],
    icon: "💧",
  },
  {
    id: 3,
    title: "FPC Tracking Platform",
    description:
      "Enterprise platform for managing and monitoring Farmer Producer Organizations. Includes member management, procurement tracking, and organizational analytics.",
    tech: ["Python", "FastAPI", "MongoDB", "AWS Lambda", "S3"],
    highlights: ["Member Management", "Procurement Tracking", "Real-time Analytics"],
    icon: "📊",
  },
  {
    id: 4,
    title: "Yield Prediction — Remote Sensing & DL",
    description:
      "Predicting wheat yield by integrating geospatial data from Sentinel-2 satellites, IMD meteorological data, and calculating vegetation indices with Deep Learning models.",
    tech: ["Python", "TensorFlow", "Google Earth Engine", "QGIS", "Deep Learning"],
    highlights: ["Sentinel-2 Satellite", "Geospatial Analysis", "Deep Learning"],
    icon: "🛰️",
  },
  {
    id: 5,
    title: "Employee Tracking System",
    description:
      "Android application enabling employers to track employee whereabouts for onsite and remote work. Integrated GPS and geofencing using Google Maps API, Fused Location Provider, and Android Geofencing API.",
    tech: ["Flutter", "Java", "Google Maps API", "Firebase", "Geofencing"],
    highlights: ["GPS Tracking", "Geofencing", "Real-time Location"],
    icon: "📍",
  },
  {
    id: 6,
    title: "Smart BAT — Budget Analyzer & Tracker",
    description:
      "Application that scans expense receipts using OCR, automatically categorizing and storing data by items and categories. Published at IEEE ICACTA 2023.",
    tech: ["Android Studio", "Java", "Python", "OCR", "Firebase"],
    highlights: ["OCR Receipt Scanning", "Auto-categorization", "IEEE Published"],
    icon: "📱",
  },
];

export const skills = {
  "Languages": ["Python", "SQL", "Java", "C++"],
  "Frameworks & Libraries": ["FastAPI", "TensorFlow", "PyTorch", "Flutter"],
  "Cloud & DevOps": ["AWS (Lambda, S3, EC2)", "Azure", "Docker", "Git", "GitHub", "GitLab"],
  "Databases": ["PostgreSQL", "MongoDB", "Firebase", "MySQL"],
  "Tools & Platforms": ["Postman", "QGIS", "Google Earth Engine", "Unity", "Roboflow", "Linux"],
  "AI / ML": ["Deep Learning", "Neural Networks", "Computer Vision", "YOLOv5", "RAG", "Generative AI", "OCR"],
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
  },
];

export const awards = [
  {
    title: "Best Concept Game — Teknack'22",
    description: "Won Best Concept Game award at Teknack Gaming Studio hackathon for innovative game design using Unity.",
  },
  {
    title: "First Runner Up — Hackover 3.0",
    description: "Secured First Runner Up in Game Development Domain at Fr. Conceicao Rodrigues College of Engineering (Google DSC).",
  },
];

export const volunteering = [
  {
    title: "Mentor — Girls4Impact",
    period: "Oct 2021 — Jan 2022",
    description: "Mentored school-going girls in Python programming fundamentals over four months. Initiative by Girls4Impact Foundation in collaboration with ACM, DBIT.",
  },
  {
    title: "Technical Head — Colosseum",
    period: "Jan 2023 — Mar 2023",
    description: "Led a team of 7 members for DBIT's Annual Technical Event. Coordinated workshops, competitions, and presentations.",
  },
  {
    title: "Mentor — Teknack Gaming Studio",
    period: "Sep 2022 — Feb 2024",
    description: "Conducted Unity workshops and delivered lectures on game development. Provided technical support to external development teams.",
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
