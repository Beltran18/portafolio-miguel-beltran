import StackBadge from "./StackBadge"

export default function ProjectCard({ project }) {
  return (
    <div className="group border border-zinc-800 rounded-lg overflow-hidden hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-400/20">
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden bg-zinc-800">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Destacado
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 mb-4 text-sm line-clamp-3">
          {project.description}
        </p>
        
        {/* Stack de tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <StackBadge key={tech} tech={tech} />
          ))}
        </div>
        
        {/* Enlaces */}
        <div className="flex gap-4">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 border border-zinc-700 rounded hover:bg-zinc-800 transition-colors text-center text-sm font-medium"
          >
            Ver código
          </a>
          <a 
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors text-center text-sm font-medium"
          >
            Ver en vivo
          </a>
        </div>
      </div>
    </div>
  )
}
