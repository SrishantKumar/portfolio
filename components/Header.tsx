import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-12 h-12 overflow-hidden rounded-full">
              <Image
                src="/profile.png"
                alt="SK"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 ease-in-out hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 mix-blend-overlay"></div>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              SK
            </span>
          </motion.div>
        </Link>

        {/* ... rest of the component remains the same ... */}

      </div>
    </header>
  )
}

export default Header
