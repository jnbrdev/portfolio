"use client"
import Image from "next/image"
import GlassCard from "./GlassCard"
import { motion } from "framer-motion"
import { useState } from "react"
import ProjectModal from "./ProjectModal"

const projects = [
  {
    id: 1,
    name: "Urban Shop Landing Page",
    image: "/urban.png",
    description: "A brief description of Project 1",
    details:
      "Developed a mobile-responsive e-commerce landing page using HTML, CSS, and JavaScript as a personal project.",
    tools: ["HTML", "CSS", "Javascript"],
    link: "https://jnbrdev.github.io/urban-ecom-landing/",
  },
  {
    id: 2,
    name: "Tapik Profile",
    image: "/tapik.png",
    description: "A brief description of Project 2",
    details:
      "Developed new features and maintain an inhouse app using Laravel, HTML, CSS, JavaScript, and Bootstrap. The site is fully responsive, providing an optimal viewing experience on all devices.",
      tools: ["Laravel", "Bootstrap", "MySQL", "HTML", "CSS", "Javascript"],
    link: "https://my.tapik.ph/tpaf94ur",
  },
  {
    id: 3,
    name: "Freight Calculator",
    image: "/freight.png",
    description: "A brief description of Project 2",
    details:
      "A personal project developed using HTML, CSS, JavaScript, and Three.js",
      tools: ["HTML", "CSS", "Javascript", "Three.js"],
    link: "https://jnbrdev.github.io/freight-calculator/",
  },
  {
    id: 4,
    name: "BrokerageNow",
    image: "/broker.png",
    description: "A brief description of Project 3",
    details:
      "Implemented the frontend UI/UX based on the design provided by the client, ensuring accuracy and adherence to their specifications. For styling and layout design, CSS and bootstrap was used to achieve a responsive and visually cohesive interface.",
    tools: ["Laravel", "HTML", "CSS", "Javascript", "Bootstrap"],
    link: "#",
  },
  {
    id: 5,
    name: "E-commerce",
    image: "/shoplifty.png",
    description: "A brief description of Project 4",
    details:
      "Developed a full-stack E-commerce app using React.js, integrating the E-commerce API app (capstone 2). The app features a fully functional product directory, cart system, and secure payment processing via Xendit.",
    tools: ["React.js", "Bootstrap", "HTML", "CSS", "Javascript"],
    link: "https://ecommerce-app-react-wheat.vercel.app/products",
  },
  {
    id: 6,
    name: "Blog",
    image: "/blog.png",
    description: "A brief description of Project 5",
    details:
      "The Blog Application provides a user-friendly interface to create, edit, and delete blog posts, as well as view articles in an engaging layout. The project emphasizes clean UI design, seamless navigation, and responsiveness. My role involved designing and developing the frontend using React.js, integrating Bootstrap for styling, and ensuring smooth interactivity with JavaScript. The backend is built with Express.js and MongoDB, providing a robust and scalable architecture for handling user data, authentication, and content storage.",
      tools: ["React.js", "Bootstrap", "HTML", "CSS", "Javascript", "Express.js", "MongoDB"],
    link: "https://blog-app-frontend-ecru.vercel.app/",
  },
  {
    id: 7,
    name: "Salon Management App",
    image: "/salon-admin.png",
    description: "A brief description of Project 1",
    details:
      "Developed new features and maintain an inhouse app using Laravel, Vue.js HTML, CSS, JavaScript, and Bootstrap. The site is fully responsive, providing an optimal viewing experience on all devices.",
    tools: ["Laravel", "Vue.js", "Bootstrap", "MySQL", "HTML", "CSS", "Javascript"],
    link: "#",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

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
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300"
                      >
                        Description
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
      )}
    </section>
  )
}

