"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center"></div>
    </header>
  );
};

export default Header;
