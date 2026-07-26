/**
 * Portfolio Data Configuration
 * Edit this file to update all personal information across the website
 */

export const personalData = {
  name: "Akash Kumar",
  firstName: "Akash",
  lastName: "Kumar",
  title: "AI & Machine Learning Student",
  roles: [
    "AI & Machine Learning Student",
    "Frontend Developer",
    "Prompt Engineer",
  ],
  email: "aka9250ku@gmail.com" ,
  phone: "+91 9250328993",
  location: "Vadodara, Gujarat, India",
  resumeUrl: "#", // Add your resume PDF link here
  profileImage: "profile.jpeg",
  about: {
    intro: "Passionate AI & Machine Learning student with a strong foundation in frontend development. I combine creative design thinking with technical expertise to build intelligent, user-centric applications. My journey in tech is driven by curiosity and a desire to create meaningful impact through innovation.",
    journey: "Started my coding journey in high school, fascinated by how technology could solve real-world problems. Pursuing B.Tech in AI & Machine Learning at Parul University, I've developed expertise in both machine learning algorithms and modern web technologies. I'm particularly interested in the intersection of AI and user experience design.",
    codingHours: "2,500+",
    projects: "15+",
    certificates: "10+",
    experience: "2+ Years",
  },
  social: {
    github: "https://github.com/akash-19kumar",
    linkedin: "https://www.linkedin.com/in/akash-kumar-5715373b5/",
    instagram: "https://instagram.com/akashkumar",
    email: "mailto:aka9250ku@gmail.com",
  },
};

export const skillsData = [
  { name: "Python", category: "Programming", level: 90, icon: "python" },
  { name: "Java", category: "Programming", level: 80, icon: "java" },
  { name: "C++", category: "Programming", level: 75, icon: "cplusplus" },
  { name: "C", category: "Programming", level: 70, icon: "c" },
  { name: "HTML", category: "Frontend", level: 95, icon: "html5" },
  { name: "CSS", category: "Frontend", level: 90, icon: "css3" },
  { name: "JavaScript", category: "Frontend", level: 85, icon: "javascript" },
  { name: "React", category: "Frontend", level: 82, icon: "react" },
  { name: "Tailwind CSS", category: "Frontend", level: 88, icon: "tailwind" },
  { name: "Git", category: "Tools", level: 85, icon: "git" },
  { name: "GitHub", category: "Tools", level: 90, icon: "github" },
  { name: "Prompt Engineering", category: "AI", level: 92, icon: "openai" },
  { name: "Machine Learning", category: "AI", level: 78, icon: "brain" },
  { name: "Data Structures", category: "CS", level: 80, icon: "database" },
  { name: "SQL", category: "Database", level: 75, icon: "mysql" },
  { name: "Problem Solving", category: "Soft Skills", level: 88, icon: "lightbulb" },
];

export const projectsData = [
  {
    id: 1,
    title: "AI Chatbot",
    description: "An intelligent conversational AI chatbot built with natural language processing capabilities. Features context awareness, sentiment analysis, and multi-turn conversations powered by modern LLM APIs.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["Python", "React", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/akashkumar/ai-chatbot",
    live: "https://ai-chatbot-demo.vercel.app",
    category: "AI",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A premium, award-winning personal portfolio website featuring glassmorphism design, smooth animations, and interactive 3D elements. Built with React, Framer Motion, and modern web technologies.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/akashkumar/portfolio",
    live: "https://akashkumar.dev",
    category: "Web",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A beautiful weather application with real-time data, interactive maps, and detailed forecasts. Features location-based weather, hourly predictions, and severe weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    tech: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    github: "https://github.com/akashkumar/weather-app",
    live: "https://weather-app-demo.vercel.app",
    category: "Web",
  },
  {
    id: 4,
    title: "Task Manager",
    description: "A productivity-focused task management application with drag-and-drop functionality, priority sorting, deadline tracking, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    github: "https://github.com/akashkumar/task-manager",
    live: "https://task-manager-demo.vercel.app",
    category: "Web",
  },
  {
    id: 5,
    title: "Music Player",
    description: "A sleek music streaming player with playlist management, audio visualization, and responsive design. Supports multiple audio formats and features a beautiful waveform visualizer.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
    tech: ["JavaScript", "HTML5 Audio", "Canvas API", "CSS3"],
    github: "https://github.com/akashkumar/music-player",
    live: "https://music-player-demo.vercel.app",
    category: "Web",
  },
  {
    id: 6,
    title: "Student Management System",
    description: "A comprehensive student management system with attendance tracking, grade management, and report generation. Features role-based access control and data analytics dashboard.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    tech: ["Java", "MySQL", "Swing", "JDBC"],
    github: "https://github.com/akashkumar/student-management",
    live: "#",
    category: "Desktop",
  },
];

export const experienceData = [
  {
    id: 1,
    type: "internship",
    title: "Frontend Development Intern",
    company: "Tech Solutions Pvt. Ltd.",
    duration: "Jun 2025 - Aug 2025",
    description: "Developed responsive web interfaces using React and Tailwind CSS. Collaborated with design team to implement pixel-perfect UI components. Improved page load performance by 40% through optimization techniques.",
    skills: ["React", "Tailwind CSS", "Git", "REST APIs"],
  },
  {
    id: 2,
    type: "hackathon",
    title: "Smart India Hackathon 2025",
    company: "Ministry of Education, India",
    duration: "Aug 2025",
    description: "Participated in India's largest hackathon. Built an AI-powered agricultural advisory system for farmers. Secured top 10 position among 500+ participating teams nationwide.",
    skills: ["Python", "Machine Learning", "React", "Problem Solving"],
  },
  {
    id: 3,
    type: "achievement",
    title: "State Level Badminton Player",
    company: "Uttar Pradesh State Sports Association",
    duration: "2019 - Present",
    description: "Represented district at state-level badminton championships. Sports taught me discipline, strategic thinking, and the importance of consistent practice.",
    skills: ["Leadership", "Discipline", "Strategic Thinking", "Teamwork"],
  },
];

export const educationData = [
  {
    id: 1,
    degree: "B.Tech in AI & Machine Learning",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    duration: "2025 - Present",
    description: "Pursuing Bachelor of Technology with specialization in Artificial Intelligence and Machine Learning. Coursework includes Deep Learning, Neural Networks, Computer Vision, and Natural Language Processing.",
    grade: "Pursuing",
  },
  {
    id: 2,
    degree: "Senior Secondary (12th Grade)",
    institution: "Ratna Memorial Public School",
    location: "Vadodara, Gujarat",
    duration: "2023 - 2025",
    description: "Completed senior secondary education with Physics, Chemistry, Mathematics, and Computer Science. Scored 85% in board examinations with distinction in Computer Science.",
    grade: "67%",
  },
  {
    id: 3,
    degree: "Secondary (10th Grade)",
    institution: "Ratna Memorial Public School",
    location: "Vadodara, Gujarat",
    duration: "2021 - 2023",
    description: "Completed secondary education with strong foundation in science and mathematics. Developed early interest in programming and participated in science exhibitions.",
    grade: "77%",
  },
];

export const certificatesData = [
  {
    id: 1,
    title: "Python ",
    issuer: "neo colab",
    date: "May 2026",
    image: "python.png",
    url: "#",
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Coursera - Stanford Online",
    date: "15 May 2026",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    url: "#",
  },
  {
    id: 3,
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    url: "#",
  },
  {
    id: 4,
    title: "Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    date: "Jun 2025",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop",
    url: "#",
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    date: "Jul 2025",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
    url: "#",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];
