import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    name: string
    image: string
    description: string
    tools: string[]
    link: string
    details: string
  }
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gray-900/95 backdrop-blur-lg text-white border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image - Full width on mobile, right side on desktop */}
          <div className="md:order-2 mt-5">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Content - Under image on mobile, left side on desktop */}
          <div className="md:order-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                  <p className="text-gray-300">{project.details}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full mt-4 bg-white/10 hover:bg-white/20">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

