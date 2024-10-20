"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

const projects = [
  {
    title: "Matrimonial App UI",
    description: "A modern and intuitive user interface for a matrimonial application.",
    image: "https://i.imgur.com/E059qfB.png",
    link: "https://www.behance.net/gallery/196724741/Matrimonial-App-UI-Design-Figma-Project"
  },
  {
    title: "IPL Mobile App UI",
    description: "An engaging mobile app interface for Indian Premier League cricket fans.",
    image: "https://i.imgur.com/eYoH3vv.png",
    link: "https://www.behance.net/gallery/196082583/IPL-APP-UI-DESIGN-USING-FIGMA"
  },
  {
    title: "Logo Designs",
    description: "Designed logo for IIIT Agartala Gymkahna Body & QNITA 24",
    image: "https://i.imgur.com/n62IlKB.png",
    link: "https://www.behance.net/gallery/210655633/LOGO-DESIGN"
  },
  {
    title: "Merch Design",
    description: "Created custom merchandise designs for various brands and events.",
    image: "https://imgur.com/fYpODzt", // You'll need to add this image to your public folder
    technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
    link: "#" // Replace with actual project link if available
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;