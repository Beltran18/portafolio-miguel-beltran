const techColors = {
  React: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Next.js": "bg-white/10 text-gray-300 border-white/20",
  Vue: "bg-green-500/20 text-green-300 border-green-500/30",
  TypeScript: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Tailwind CSS": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  JavaScript: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "Node.js": "bg-green-700/20 text-green-300 border-green-700/30",
  Express: "bg-gray-500/20 text-gray-300 border-gray-500/30",
  Python: "bg-blue-600/20 text-blue-300 border-blue-600/30",
  MongoDB: "bg-green-600/20 text-green-300 border-green-600/30",
  PostgreSQL: "bg-blue-700/20 text-blue-300 border-blue-700/30",
  Firebase: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Docker: "bg-blue-400/20 text-blue-300 border-blue-400/30",
  Git: "bg-red-500/20 text-red-300 border-red-500/30",
  "Stripe": "bg-purple-600/20 text-purple-300 border-purple-600/30",
  "Chart.js": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "WebSocket": "bg-cyan-600/20 text-cyan-300 border-cyan-600/30",
  Markdown: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  Vercel: "bg-black/40 text-white border-white/20",
  "React Native": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "OpenWeather API": "bg-orange-600/20 text-orange-300 border-orange-600/30",
  Webpack: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Figma: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Laravel: "bg-red-500/20 text-red-300 border-red-500/30",
  Bootstrap: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  MySQL: "bg-blue-600/20 text-blue-300 border-blue-600/30",
}

export default function StackBadge({ tech }) {
  const style = techColors[tech] || "bg-zinc-700/50 text-zinc-300 border-zinc-600"
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${style}`}>
      {tech}
    </span>
  )
}
