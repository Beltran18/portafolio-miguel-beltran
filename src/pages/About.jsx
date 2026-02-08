export default function About() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-6">Sobre mí</h1>
        <div className="flex gap-4">
          <div className="w-32 h-32 rounded-2xl bg-linear-to-br from-blue-400 to-cyan-400 p-1 shrink-0">
            <img 
              src="./public/foto-profesional.png"
              alt="Foto de perfil"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl text-zinc-300 mb-2">
              Soy Analista y Desarrollador de Software enfocado en Backend con experiencia en Laravel, Express, Python y Javascript. Me apasiona crear soluciones eficientes y escalables que resuelvan problemas reales.
            </p>
            <p className="text-zinc-400">
              Basado en Medellín, Colombia
            </p>
          </div>
        </div>
      </div>

      {/* Historia */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Mi Historia</h2>
          
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p>
              Mi pasión por la programación comenzó hace más de 3 años cuando decidí aprender a codificar de forma autodidacta.
              Desde entonces, he trabajado en diversos proyectos para mejorar mis habilidades como desarrollador Backend y siempre me he esforzado por aprender nuevas tecnologías y mejorar mis habilidades. Adiconalmente tambien he trabajado con tecnologías de Front-end como React, Html, Css, Boostrap y Tailwind. A lo largo de mi carrera, he tenido la oportunidad de colaborar con equipos talentosos, aprender de profesionales experimentados y enfrentar desafíos técnicos complejos que han fortalecido mis capacidades como desarrollador. 
            </p>
            
            <p>
              He tenido la oportunidad de colaborar con equipos talentosos, aprender de profesionales experimentados y
              enfrentar desafíos técnicos complejos que han fortalecido mis capacidades como desarrollador.
            </p>
            
            <p>
              Estoy comprometido con el aprendizaje continuo y siempre busco estar actualizado con las últimas
              tecnologías y mejores prácticas en la industria del desarrollo de software.
            </p>
            
            <p>
              Mi objetivo es crear soluciones que no solo sean técnicamente sólidas, sino que también aporten valor
              real a los usuarios y negocios para los que trabajo.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
            <h3 className="font-bold text-lg mb-2 text-blue-400">Experiencia</h3>
            <p className="text-2xl font-bold">6+ meses</p>
            <p className="text-zinc-400 text-sm">En desarrollo de software</p>
          </div>
          
          <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
            <h3 className="font-bold text-lg mb-2 text-cyan-400">Proyectos</h3>
            <p className="text-2xl font-bold">5+</p>
            <p className="text-zinc-400 text-sm">Completados exitosamente</p>
          </div>
        </div>
      </section>

      {/* Educación y Certificaciones */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Educación y Certificaciones</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <h3 className="font-bold text-lg mb-1">Tecnologia en Analisis y Desarrollo de Software</h3>
            <p className="text-zinc-400 text-sm mb-2">Servicio Nacional de Aprendizaje (SENA) 2024 - 2026</p>
            <p className="text-zinc-300">Título de Tecnologo especializado en el Analisis y el desarrollo de software</p>
          </div>
          
          <div className="border-l-4 border-cyan-500 pl-6 py-2">
            <h3 className="font-bold text-lg mb-1">React Developer Certification</h3>
            <p className="text-zinc-400 text-sm mb-2">2025</p>
            <p className="text-zinc-300">Certificación en desarrollo con React</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <h3 className="font-bold text-lg mb-1">Tecnico en Programacion de Software</h3>
            <p className="text-zinc-400 text-sm mb-2">Servicio Nacional de Aprendizaje (SENA) 2022 - 2023</p>
            <p className="text-zinc-300">Título de tecnico especializado en programación de software</p>
          </div>
        </div>
      </section>

      {/* Intereses y Hobbies */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Fuera del código</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-zinc-800 rounded-lg hover:border-blue-400/50 transition-colors">
            <h3 className="font-bold text-lg mb-3">🎮 Gaming</h3>
            <p className="text-zinc-400">Fan de juegos de estrategia. Creo que los juegos son una forma increíble de aprender sobre diseño y experiencia del usuario.</p>
          </div>
          
          <div className="p-6 border border-zinc-800 rounded-lg hover:border-blue-400/50 transition-colors">
            <h3 className="font-bold text-lg mb-3">⚽ Deporte</h3>
            <p className="text-zinc-400">Me gusta practicar deporte en mi tiempo libre, especialmente fútbol e ir al gimnasio, siento que es una excelente forma de mantenerme en forma y relajarme despues de trabajar.</p>
          </div>
          
          <div className="p-6 border border-zinc-800 rounded-lg hover:border-blue-400/50 transition-colors">
            <h3 className="font-bold text-lg mb-3">💻 Freelance y Aprendiz autonomo</h3>
            <p className="text-zinc-400">Me gusta trabajar en proyectos freelance y aprender nuevas tecnologías de forma autónoma. Me mantengo actualizado con las últimas tendencias del desarrollo.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

