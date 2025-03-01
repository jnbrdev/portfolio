"use client"
import Image from "next/image"
import Link from "next/link"
import GlassCard from "./GlassCard"
import { motion } from "framer-motion"

const projects = [
  { id: 1, name: "Salon Management App", image: "/salon-admin.png", link: "#" },
  { id: 2, name: "Tapik Profile", image: "/tapik.png", link: "https://my.tapik.ph/tpaf94ur" },
  { id: 3, name: "BrokerageNow", image: "/broker.png", link: "#" },
  { id: 4, name: "Ecommerce", image: "/shoplifty.png", link: "https://ecommerce-app-react-wheat.vercel.app" },
  { id: 5, name: "Blog", image: "/blog.png", link: "#" },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="shadow-xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <Link
                        href={project.link}
                        className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300"
                      >
                        Go to Project
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}

