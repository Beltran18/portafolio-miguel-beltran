import { useState, useEffect } from "react"
import emailjs from '@emailjs/browser'

export default function Contact() {
  // Inicializar EmailJS una sola vez
  useEffect(() => {
    emailjs.init('yYzU9zjO6IeU7VXiV')
  }, [])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Enviar datos con EmailJS
    emailjs.send(
      'service_378gqlw',      // Tu Service ID
      'template_90wmjum',     // Tu Template ID
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }
    )
    .then(() => {
      // Email enviado exitosamente
      console.log('Email enviado con éxito')
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    })
    .catch((error) => {
      // Si hay error
      console.error('Error al enviar email:', error)
      alert('Hubo un error al enviar el mensaje. Intenta de nuevo.')
    })
  }

  return (
    <div className="py-12">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Contacto</h1>
        <p className="text-xl text-zinc-400">
          ¿Tenés una propuesta, pregunta o simplemente querés saludar? Me encantaría saber de ti.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Formulario */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Enviar un mensaje</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-3">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-3">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu.email@example.com"
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-3">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="¿De qué es sobre?"
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-3">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame tu idea, pregunta o propuesta..."
                rows="6"
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 font-semibold">¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Otras formas de contactarme</h2>
          
          <div className="space-y-8">
            {/* Email */}
            <div className="p-6 border border-zinc-800 rounded-lg hover:border-blue-400/50 transition-colors">
              <h3 className="font-bold text-lg mb-2 block">Email</h3>
              <a 
                href="mailto:correo@example.com"
                className="text-blue-400 hover:text-blue-300 transition-colors break-all"
              >
                miguelbelttan12@gmail.com
              </a>
            </div>

            {/* Teléfono */}
            <div className="p-6 border border-zinc-800 rounded-lg hover:border-blue-400/50 transition-colors">
              <h3 className="font-bold text-lg mb-2 block">Teléfono</h3>
              <a 
                href="tel:+5712345678"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                +57 3053954434
              </a>
            </div>

            {/* Ubicación */}
            <div className="p-6 border border-zinc-800 rounded-lg hover:border-blue-400/50 transition-colors">
              <h3 className="font-bold text-lg mb-2 block">Ubicación</h3>
              <p className="text-zinc-300">Envigado, Colombia</p>
            </div>

            {/* Redes Sociales */}
            <div className="p-6 border border-zinc-800 rounded-lg hover:border-blue-400/50 transition-colors">
              <h3 className="font-bold text-lg mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-blue-600 transition-colors"
                  title="GitHub"
                >
                  <span className="text-lg">🔗</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/miguel-beltran-493502336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-blue-600 transition-colors"
                  title="LinkedIn"
                >
                  <span className="text-lg">💼</span>
                </a>
                <a 
                  href="https://instagram.com/m_beltran_35"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-zinc-800 rounded-full hover:bg-blue-600 transition-colors"
                  title="Instagram"
                >
                  <span className="text-lg">📷</span>
                </a>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="p-6 bg-grdaient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-400">Disponibilidad</h3>
              <p className="text-zinc-300 mb-3">
                Actualmente estoy disponible para:
              </p>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li>✓ Proyectos freelance</li>
                <li>✓ Trabajo remoto</li>
                <li>✓ Capacitaciones en nuevas tecnologías</li>
                <li>✓ Colaboraciones en proyectos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-12">Preguntas frecuentes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-zinc-800 rounded-lg">
            <h3 className="font-bold text-lg mb-3">¿Cuál es tu disponibilidad?</h3>
            <p className="text-zinc-400">Estoy disponible de inmediato para proyectos nuevos. Generalmente inicio en 1-2 semanas después de confirmar los detalles.</p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg">
            <h3 className="font-bold text-lg mb-3">¿Qué es tu presupuesto mínimo?</h3>
            <p className="text-zinc-400">Depende del proyecto. Para freelance, tengo presupuestos desde $500 USD. Para proyectos mayores, lo discutimos según alcance.</p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg">
            <h3 className="font-bold text-lg mb-3">¿Trabajas remotamente?</h3>
            <p className="text-zinc-400">En su matoria, trabajo remotamente.Pero puedo trabajar hibrido en la ciudad de Medellin y colaborar con equipos en diferentes zonas horarias sin problemas.</p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg">
            <h3 className="font-bold text-lg mb-3">¿Cuál es tu tiempo de respuesta?</h3>
            <p className="text-zinc-400">Generalmente respondo en las primeras 24 horas. Para consultas urgentes, puedes contactarme directamente por teléfono.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
