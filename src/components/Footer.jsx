export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre mí</h3>
            <p className="text-zinc-400">Desarrollador de software apasionado por crear soluciones innovadoras y escalables.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="mailto:miguelbelttan12@gmail.com" className="hover:text-blue-400 transition-colors">miguelbelttan12@gmail.com</a></li>
              <li>+57 3053954434</li>
              <li>Envigado, Colombia</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500">
          <p>&copy; {currentYear} Miguel Beltrán. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
