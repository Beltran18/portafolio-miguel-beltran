import { Link } from "react-router-dom"
import { projects, skills } from "../data/Projects"
import ProjectCard from "../components/ProjectCard"

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hola, soy <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Miguel Beltrán</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Desarrollador Backend apasionado por crear soluciones innovadoras y escalables.
              Especializado en Laravel, Express, Python, Javascript, en bases de datos manejo Mysql y Postgresql. Adicional por el lado de Front-end tengo experiencia con React, Html, Css, Boostrap y Tailwind. Siempre buscando aprender nuevas tecnologías y mejorar mis habilidades para ofrecer el mejor resultado en cada proyecto.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/proyectos"
                className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Ver mis proyectos
              </Link>
              <Link 
                to="/contacto"
                className="px-8 py-3 border border-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold"
              >
                Contactame
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 opacity-20 blur-3xl absolute -z-10"></div>
            <img 
              src="/foto-perfil.jpg"
              alt="Miguel Beltrán"
              className="w-80 h-120 rounded-2xl border-2 border-blue-500/30 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 mb-20">
        <h2 className="text-4xl font-bold mb-12">Habilidades</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border border-zinc-800 rounded-lg hover:border-blue-400/50 transition-colors">
            <h3 className="font-bold text-lg mb-4 text-blue-400">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map(skill => (
                <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg hover:border-cyan-400/50 transition-colors">
            <h3 className="font-bold text-lg mb-4 text-cyan-400">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map(skill => (
                <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg hover:border-purple-400/50 transition-colors">
            <h3 className="font-bold text-lg mb-4 text-purple-400">Herramientas</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map(skill => (
                <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg hover:border-pink-400/50 transition-colors">
            <h3 className="font-bold text-lg mb-4 text-pink-400">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map(skill => (
                <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 mb-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Proyectos Destacados</h2>
          <Link to="/proyectos" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
            Ver todos →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-linear-to-r from-blue-900/40 to-cyan-900/40 rounded-2xl border border-blue-500/30 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tenés un proyecto en mente?</h2>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
          Estoy disponible para trabajar en proyectos desafiantes. Contactame para discutir tu idea.
        </p>
        <Link 
          to="/contacto"
          className="inline-block px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Iniciar conversación
        </Link>
      </section>
    </>
  )
}    