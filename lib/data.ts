import type { IconType } from "react-icons"
import {
  FaLaravel,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaVuejs,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaAws,
} from "react-icons/fa"
import { SiExpress, SiCpanel, SiVercel, SiPostman, SiMysql, SiMongodb, SiInertia, SiThreedotjs } from "react-icons/si"

export const profile = {
  name: "Jonieber Dela Victoria",
  initials: "JDV",
  role: "Full Stack Web Developer",
  location: "Philippines",
  email: "delavictoriajnbr@gmail.com",
  github: "https://github.com/jnbrdev",
  linkedin: "https://linkedin.com/in/jonieber-dela-victoria",
  intro:
    "I build fast, responsive web apps end to end, from Laravel and Node.js backends to React and Vue.js interfaces, and ship them to production.",
  about: [
    "I'm a full stack developer who enjoys turning business requirements into clean, reliable software. Most of my day-to-day work lives in the Laravel + Vue.js ecosystem, building and maintaining in-house products used by real customers.",
    "Beyond the code, I handle deployment and hosting on AWS EC2, cPanel and other platforms, so I'm comfortable owning a feature from the first commit to the live server.",
  ],
}

export type Tool = { name: string; icon: IconType }

export const toolGroups: { title: string; tools: Tool[] }[] = [
  {
    title: "Frontend",
    tools: [
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Inertia.js", icon: SiInertia },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    title: "Backend",
    tools: [
      { name: "Laravel", icon: FaLaravel },
      { name: "PHP", icon: FaPhp },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Databases",
    tools: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "DevOps & Tooling",
    tools: [
      { name: "AWS", icon: FaAws },
      { name: "Vercel", icon: SiVercel },
      { name: "cPanel", icon: SiCpanel },
      { name: "Git", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
    ],
  },
]

export const allTools: Tool[] = [...toolGroups.flatMap((g) => g.tools), { name: "Three.js", icon: SiThreedotjs }]

export type Project = {
  id: number
  name: string
  image: string
  summary: string
  details: string
  tools: string[]
  link?: string
  category: "Professional" | "Personal"
}

// Add new projects at the top
export const projects: Project[] = [
  {
    id: 1,
    name: "Urban Shop Landing Page",
    image: "/urban.png",
    summary: "Mobile-first e-commerce landing page.",
    details:
      "Developed a mobile-responsive e-commerce landing page using HTML, CSS, and JavaScript as a personal project.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://jnbrdev.github.io/urban-ecom-landing/",
    category: "Personal",
  },
  {
    id: 2,
    name: "Tapik Profile",
    image: "/tapik.png",
    summary: "Digital profile platform: new features and maintenance.",
    details:
      "Developed new features and maintained an in-house app using Laravel, HTML, CSS, JavaScript, and Bootstrap. The site is fully responsive, providing an optimal viewing experience on all devices.",
    tools: ["Laravel", "Bootstrap", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://my.tapik.ph/tpaf94ur",
    category: "Professional",
  },
  {
    id: 3,
    name: "Box Calculator",
    image: "/freight.png",
    summary: "Freight box calculator with a live 3D preview.",
    details: "A personal project developed using HTML, CSS, JavaScript, and Three.js.",
    tools: ["HTML", "CSS", "JavaScript", "Three.js"],
    link: "https://jnbrdev.github.io/freight-calculator/",
    category: "Personal",
  },
  {
    id: 4,
    name: "BrokerageNow",
    image: "/broker.png",
    summary: "Pixel-accurate frontend built from client designs.",
    details:
      "Implemented the frontend UI/UX based on the design provided by the client, ensuring accuracy and adherence to their specifications. CSS and Bootstrap were used to achieve a responsive and visually cohesive interface.",
    tools: ["Laravel", "HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Professional",
  },
  {
    id: 5,
    name: "E-commerce",
    image: "/shoplifty.png",
    summary: "Full-stack store with cart and Xendit payments.",
    details:
      "Developed a full-stack e-commerce app using React.js, integrating a custom e-commerce API. The app features a fully functional product directory, cart system, and secure payment processing via Xendit.",
    tools: ["React.js", "Bootstrap", "HTML", "CSS", "JavaScript"],
    link: "https://ecommerce-app-react-wheat.vercel.app/products",
    category: "Personal",
  },
  {
    id: 6,
    name: "Blog",
    image: "/blog.png",
    summary: "MERN blog with auth and full post management.",
    details:
      "The Blog Application provides a user-friendly interface to create, edit, and delete blog posts, as well as view articles in an engaging layout. I designed and developed the frontend using React.js and Bootstrap. The backend is built with Express.js and MongoDB, providing a robust and scalable architecture for handling user data, authentication, and content storage.",
    tools: ["React.js", "Bootstrap", "HTML", "CSS", "JavaScript", "Express.js", "MongoDB"],
    link: "https://blog-app-frontend-ecru.vercel.app/",
    category: "Personal",
  },
  {
    id: 7,
    name: "Salon Management App",
    image: "/salon-admin.png",
    summary: "In-house admin for bookings, staff and services.",
    details:
      "Developed new features and maintained an in-house app using Laravel, Vue.js, HTML, CSS, JavaScript, and Bootstrap. The site is fully responsive, providing an optimal viewing experience on all devices.",
    tools: ["Laravel", "Vue.js", "Bootstrap", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "Professional",
  },
]

// Add new roles at the top
export const experience = [
  {
    title: "Full Stack Web Developer",
    company: "EcomPilot",
    period: "May 2023 - Present",
    description:
      "Develop, maintain, and deploy websites using Laravel, MySQL, Bootstrap, and Vue.js. Manage hosting across AWS EC2, cPanel, SiteGround, and Hostinger.",
    tags: ["Laravel", "Vue.js", "MySQL", "AWS"],
  },
  {
    title: "Intern",
    company: "EcomPilot",
    period: "Jan 2023 - May 2023",
    description: "Assisted senior developers with debugging and implementing new features.",
    tags: ["Laravel", "Bootstrap"],
  },
]

export const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#tools", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]
