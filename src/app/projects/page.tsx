import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/project-data'

export default function Projects() {
  return (
    <div>
        <Header />
        <div className="flex flex-col">
            <div className="flex text-xl font-semibold tracking-wider font-poppins border-b-2 border-gray-400">
              <Link href="/" className="tab inactiveTab">About Me</Link>
              <div className="tab activeTab ml-4">Projects</div>
            </div>
            <div className="mt-4 flex flex-col space-y-4 font-poppins">
                { projects.map( (project, i) => (
                    <ProjectCard
						key={i}
						title={project.title}
						categories={project.categories}
						stack={project.stack}
						keyFeatures={project.keyFeatures}
						screenshot={project.screenshot}
						liveSite={project.liveSite}
					/>
                ))}                
            </div>
        </div>
        <Footer />
    </div>
  );
}
