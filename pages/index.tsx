import Projects from '../components/Projects'

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
};

const projects: Project[] = [
  // ... your projects ...
];

export default function Home() {
  return (
    <main>
      {/* Other components */}
      <Projects />
      {/* Other components */}
    </main>
  )
}
