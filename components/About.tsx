"use client"
import GlassCard from "./GlassCard"
import { motion } from "framer-motion"
import { useState } from "react"

export default function About() {
  const [showAll, setShowAll] = useState(false)

  const workExperience = [
    //Add on top to add new work experience
    {
      title: "Junior Full Stack Web Developer",
      company: "EcomPilot",
      period: "May 2023 - Present",
      description:
        "Developed, maintained, and deployed websites using various technologies including Laravel, MySQL, Bootstrap, Vue.js, and Web Hosting (AWS EC2, cPanel, SiteGrounds, and Hostinger)",
    },
    {
      title: "Intern",
      company: "EcomPilot",
      period: "Jan 2023 - May 2023",
      description: "Assisted senior developers with various tasks, including debugging and implementing new features. ",
    },
  ]

  const visibleExperience = showAll ? workExperience : workExperience.slice(0, 2)

  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="shadow-xl">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform md:-translate-x-1/2" />

                {/* Timeline entries */}
                <div className="space-y-6">
                  {visibleExperience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className={`relative md:w-full flex ${
                        index % 2 === 0 ? "justify-end md:justify-start" : "justify-end"
                      }`}
                    >
                      {/* Content container */}
                      <div
                        className={`relative w-[calc(100%-2rem)] md:w-[45%] ${
                          index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                        }`}
                      >

                        {/* Content */}
                        <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                          <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                          <p className="text-blue-300 mb-2">{job.company}</p>
                          <p className="text-gray-400 text-sm mb-3">{job.period}</p>
                          <p className="text-gray-300">{job.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                
              </div>
              {/* Show More Button */}
              {workExperience.length > 2 && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}

