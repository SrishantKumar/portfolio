"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">SK</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#portfolio" className="text-primary hover:text-primary/80 px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
              <Link href="#about" className="text-primary hover:text-primary/80 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="#contact" className="text-primary hover:text-primary/80 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;