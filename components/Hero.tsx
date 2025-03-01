import Link from "next/link"
import {
  FaGithub,
  FaLinkedin,
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
import { SiExpress, SiCpanel, SiVercel, SiPostman, SiMysql, SiMongodb, SiInertia } from "react-icons/si"

const tools = [
  { name: "Laravel", icon: FaLaravel },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Vue.js", icon: FaVuejs },
  { name: "React", icon: FaReact },
  { name: "PHP", icon: FaPhp },
  { name: "Git", icon: FaGitAlt },
  { name: "AWS", icon: FaAws },
  { name: "cPanel", icon: SiCpanel },
  { name: "Vercel", icon: SiVercel },
  { name: "Postman", icon: SiPostman },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Inertia.js", icon: SiInertia }, // Added Inertia.js
]

export default function Hero() {
  return (
    <section id="home" className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
      <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Jonieber Dela Victoria</h1>
          <h2 className="text-2xl sm:text-3xl mb-8">Full Stack Web Developer</h2>
          <div className="flex justify-center space-x-6 mb-12">
            <Link href="https://github.com/jnbrdev" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl sm:text-5xl hover:text-gray-400 transition-colors duration-300" />
            </Link>
            <Link href="https://linkedin.com/in/jonieber-dela-victoria" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl sm:text-5xl hover:text-gray-400 transition-colors duration-300" />
            </Link>
          </div>

          {/* Tools Loop */}
          <div className="relative overflow-hidden max-w-4xl mx-auto">
            <div className="animate-loop-scroll py-4">
              <div className="flex space-x-8">
                {[...tools, ...tools].map((tool, index) => (
                  <div key={`${tool.name}-${index}`} className="flex flex-col items-center justify-center mx-4">
                    <tool.icon className="text-3xl text-gray-300 hover:text-white transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

