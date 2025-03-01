"use client"
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa"
import Link from "next/link"
import GlassCard from "./GlassCard"
import { motion } from "framer-motion"

export default function Contact() {
  const handleDownloadCV = () => {
    // Replace this URL with your actual CV file URL
    const cvUrl = "/your-cv.pdf"
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "JonieberDelaVictoria-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="shadow-xl">
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
      <div className="flex justify-center space-x-6 mb-6">
        <Link
          href="https://github.com/jnbrdev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaGithub className="text-4xl hover:text-gray-400 transition-colors" />
        </Link>
        <Link
          href="https://linkedin.com/in/jonieber-dela-victoria"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin className="text-4xl hover:text-gray-400 transition-colors" />
        </Link>
        <Link
          href="mailto:delavictoriajnbr@gmail.com"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaEnvelope className="text-4xl hover:text-gray-400 transition-colors" />
        </Link>
      </div>
      <p className="text-lg mb-8">Feel free to contact me via Email or LinkedIn!</p>
    </div>
  </div>
</GlassCard>

        </motion.div>
      </div>
    </section>
  )
}

