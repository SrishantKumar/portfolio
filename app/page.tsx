import React from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
