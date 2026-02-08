import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/Projects"

export default function Projects() {
  const allProjects = projects
  
  return (
    <div className="py-12">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Mis Proyectos</h1>
        <p className="text-xl text-zinc-400">
          Una selección de proyectos en los que he trabajado, mostrando mis habilidades en desarrollo web, 
          diseño de interfaces y arquitectura de software.
        </p>
      </div>
      
      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {allProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* CTA Final */}
      <div className="py-16 px-8 bg-linear-to-r from-blue-900/40 to-cyan-900/40 rounded-2xl border border-blue-500/30 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Necesitas un proyecto personalizado?</h2>
        <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
          Estoy disponible para trabajos freelance y proyectos a tiempo completo.
        </p>
        <a 
          href="mailto:correo@example.com"
          className="inline-block px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Enviar propuesta
        </a>
      </div>
    </div>
  )
}
