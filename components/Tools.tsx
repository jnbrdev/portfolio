"use client"
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
import { SiExpress, SiCpanel, SiVercel, SiPostman, SiMysql, SiMongodb, SiInertia } from "react-icons/si"
import GlassCard from "./GlassCard"
import { motion } from "framer-motion"

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

export default function Tools() {
  return (
    <section id="tools" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="shadow-xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center p-4 hover:bg-white/5 rounded-lg transition-colors duration-300"
                >
                  <tool.icon className="text-4xl mb-2" />
                  <span className="text-sm text-gray-300">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}

