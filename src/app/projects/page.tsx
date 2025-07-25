import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/project-data'

export default function Projects() {
  return (
    <div>
        <Header />
        <div className="flex flex-col">
            <h1 className="text-3xl font-semibold tracking-wider font-poppins border-b-2 border-gray-400">Projects</h1>
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
