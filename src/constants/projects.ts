import { DetailProjectItem } from "@/interfaces/detail_project_item";
import { ProjectItem } from "@/interfaces/project_item";
import { SmallProjectItem } from "@/interfaces/small_project_item";

export const TOP_PROJECTS: ProjectItem[] = [
  {
    id: "1",
    image: "/images/VSAT.png",
    stack: "JS React.js Nest.js PostgreSQL Docker",
    title: "VSAT",
    desc: "Building VSAT to solve the problem of generic SAT prep by delivering personalized study plans and progress tracking for test centers.",
    link: "https://github.com/orgs/VSAT-SAT-learning-center/repositories",
  },
  {
    id: "2",
    image: "/images/HealthFeast.jpg",
    stack: "JS React Native .NET MongoDB Cloudinary",
    title: "HealthFeast",
    desc: "Helping users manage their health by making Vietnamese food nutrition tracking and daily activity monitoring simple and accessible.",
    link: "https://github.com/devdoubled/HealthFeast",
  },
  {
    id: "3",
    image: "/images/Pesterin.png",
    stack: "JS React.js Express.js MongoDB Firebase",
    title: "Pesterin",
    desc: "Giving artists a safe, interactive space to share and discover artwork with real-time chat and AI-powered image moderation.",
    link: "https://github.com/orgs/Pesterin-Artwork-Platform/repositories",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "1",
    image: "/images/VSAT.png",
    stack: "JS React.js Nest.js PostgreSQL Docker",
    title: "VSAT",
    desc: "Building VSAT to solve the problem of generic SAT prep by delivering personalized study plans and progress tracking for test centers.",
    link: "https://github.com/orgs/VSAT-SAT-learning-center/repositories",
  },
  {
    id: "2",
    image: "/images/HealthFeast.jpg",
    stack: "JS React Native .NET MongoDB Cloudinary",
    title: "HealthFeast",
    desc: "Helping users manage their health by making Vietnamese food nutrition tracking and daily activity monitoring simple and accessible.",
    link: "https://github.com/devdoubled/HealthFeast",
  },
  {
    id: "3",
    image: "/images/Pesterin.png",
    stack: "JS React.js Express.js MongoDB Firebase",
    title: "Pesterin",
    desc: "Giving artists a safe, interactive space to share and discover artwork with real-time chat and AI-powered image moderation.",
    link: "https://github.com/orgs/Pesterin-Artwork-Platform/repositories",
  },
  {
    id: "4",
    image: "/images/Portfolio.png",
    stack: "TS Next.js HTML/SCSS",
    title: "My Portfolio",
    desc: "An online resume that highlights my projects, tech skills, and practical experience solving real-world challenges.",
    link: "https://github.com/devdoubled/my-portfolio",
  },
];

export const DETAIL_PROJECTS: DetailProjectItem[] = [
  {
    id: "1",
    title: "VSAT - The SAT Game-Changer",
    desc: "An intelligent learning ecosystem that transforms standardized test preparation through machine learning and adaptive algorithms, serving educational institutions and individual learners.",
    stack:
      "React.js, NestJS, PostgreSQL, TypeORM, Docker, ChatGPT API, JWT, OAuth2, Socket.io, Chart.js",
    archive: [
      "Led a 4-developer Agile team, facilitating daily standups and sprint retrospectives to deliver a production-ready platform in 4 months.",
      "Implemented secure JWT authentication and Google OAuth, achieving a 60% user adoption rate for social login.",
      "Integrated the ChatGPT API to automate 50% of test content grading tasks.",
      "Designed a PostgreSQL schema capable of managing 10K+ practice questions efficiently.",
      "Reduced API response times by 35% through query optimization and systematic team code reviews.",
      "Set up a CI/CD pipeline with GitHub Actions and deploy Docker containers on a VPS for scalable releases.",
      "Conducted weekly code reviews to maintain high code quality and consistency.",
      "Recognized as Runner-Up at HIU Startup 2025 for innovation and practical impact in SAT preparation.",
    ],
    image: Array.from({ length: 55 }, (_, i) => `/images/VSAT/${i + 1}.png`),
  },
  {
    id: "2",
    title: "HealthFeast - AI Nutrition Assistant",
    desc: "A health companion app that revolutionizes diet tracking for Vietnamese cuisine through computer vision and personalized recommendations.",
    stack:
      "React Native, Expo, Gemini Vision API, Cloudinary, Firebase, Google OAuth2",
    archive: [
      "Developed cross-platform app using React Native with Expo, achieving 95% code reuse between iOS and Android.",
      "Built Vietnamese food recognition scoring 92% accuracy on 100+ local dishes (custom-trained Gemini AI model).",
      "Stored 500+ user-uploaded images efficiently with Cloudinary, reducing load times by 25%.",
      "Implemented a daily nutrition tracker to monitor total calorie intake throughout the day.",
      "Added activity tracking features to estimate calories burned through daily exercises.",
      "Created a smart recipe suggestion system that recommends meal ideas based on user goals.",
      "Conducted user interviews with 50+ participants to refine UI/UX.",
    ],
    image: ["/images/HealthFeast.jpg"],
    video: [
      "https://www.youtube.com/embed/SyR3XSyW4Vs",
      "https://www.youtube.com/embed/XSxrQiasYQk",
    ],
  },
  {
    id: "3",
    title: "Pesterin - Next-Gen Art Community",
    desc: "A creator ecosystem combining social features with professional tools for digital artists and collectors.",
    stack:
      "React.js, Express.js, MongoDB, Socket.io, Firebase Storage, ModerateContent API, Chart.js",
    archive: [
      "Led a team of 6 to develop a Pinterest-style web platform for sharing and discovering artwork.",
      "Built a clean, responsive frontend with React.js and deployed it on Vercel.",
      "Implemented a robust backend with Express.js and MongoDB for managing user data, posts, comments, and messages, deployed on Railway.",
      "Added real-time collaboration and chat features using Socket.io, increasing user engagement by 40%.",
      "Integrated an AI-based content moderation system that blocked 90% of policy violations automatically.",
      "Implemented Google OAuth2 for secure authentication and used Firebase Storage for encrypted user image storage.",
      "Optimized MongoDB queries to improve response times and database efficiency.",
      "Created an artist analytics dashboard with Chart.js for clear data visualization.",
    ],
    image: Array.from(
      { length: 26 },
      (_, i) => `/images/Pesterin/${i + 1}.png`
    ),
  },
];

export const SMALL_PROJECTS: SmallProjectItem[] = [
  {
    stack: "TS Nest.js Redis Docker",
    name: "Dev-commerce",
    desc: "Practicing microservices and modern technologies through a hands-on e-commerce platform.",
    link: "https://github.com/devdoubled/dev-commerce",
  },
  {
    stack: "JS React.js Express.js MongoDB",
    name: "Social Media App",
    desc: " Practiced social features, real-time communication, and full-stack development.",
    link: "https://github.com/orgs/Dev2d-Media/repositories",
  },
  {
    stack: "JS React.js HTML/SCSS",
    name: "Bird Trading Platform UI",
    desc: "Designed and built a clean, user-friendly interface for a bird commerce platform.",
    link: "https://github.com/devdoubled/bird-trading-ui",
  },
  {
    stack: "JS React.js HTML/SCSS",
    name: "Tiktok Client UI",
    desc: "Built a Tiktok-like client UI with React.js to learn modern frontend design.",
    link: "https://github.com/devdoubled/tiktok-ui",
  },
];
