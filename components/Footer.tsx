import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} DevName. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

