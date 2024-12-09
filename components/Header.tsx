'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          DevName
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
            <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}

const NavLink = ({ href, children, ...props }) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-white transition duration-300"
    {...props}
  >
    {children}
  </Link>
)

export default Header

