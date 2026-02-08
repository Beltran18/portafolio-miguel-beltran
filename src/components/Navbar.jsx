import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 sticky top-0 bg-zinc-950/95 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          &lt;Miguel Beltran /&gt;
        </Link>
        
        <ul className="flex gap-8">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/sobre-mi" className="hover:text-blue-400 transition-colors">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="/proyectos" className="hover:text-blue-400 transition-colors">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-blue-400 transition-colors">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
