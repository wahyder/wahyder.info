export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Wahyder</div>
          <div className="flex gap-8 text-slate-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-2xl text-slate-300 mb-8">Full-stack developer | AI enthusiast | Open source contributor</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">View My Work</button>
          <button className="border-2 border-blue-600 hover:bg-blue-600/10 px-8 py-3 rounded-lg font-semibold transition">Download CV</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-24 bg-slate-800/50 rounded-lg mb-24">
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-4">
          I'm a passionate full-stack developer with expertise in modern web technologies, cloud platforms, and AI integration.
          With over 25 repositories showcasing diverse projects from Android apps to AI-powered tools, I bring ideas to life.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          My focus is on building scalable, user-friendly applications that solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-white mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: 'OCR Plugin', desc: 'Cross-browser OCR extraction extension', tech: 'TypeScript, AI' },
            { name: 'Live Podcast Generator', desc: 'Transform documents into podcasts', tech: 'Python, LLM' },
            { name: 'BitChat', desc: 'Bluetooth mesh messaging app', tech: 'Android, IoT' },
            { name: 'Voice Agent', desc: 'AI-powered voice assistant', tech: 'TypeScript, Web' }
          ].map((project, i) => (
            <div key={i} className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-slate-400 mb-4">{project.desc}</p>
              <div className="flex gap-2">
                {project.tech.split(', ').map((t, j) => (
                  <span key={j} className="text-xs bg-blue-600/30 text-blue-200 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-24 bg-slate-800/50 rounded-lg mb-24">
        <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular'] },
            { category: 'Backend', skills: ['Node.js', 'Python', 'C#', '.NET', 'APIs'] },
            { category: 'Tools & Platforms', skills: ['Vercel', 'Docker', 'Git', 'AWS', 'Claude AI'] }
          ].map((group, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-white mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill, j) => (
                  <li key={j} className="text-slate-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-24 text-center text-white mb-12">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-slate-300 text-lg mb-8">I'd love to hear from you. Let's create something amazing together!</p>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/wahyder" className="bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-lg transition">GitHub</a>
          <a href="mailto:wahyder@gmail.com" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition">Email</a>
          <a href="https://linkedin.com" className="bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-lg transition">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8 text-center text-slate-400">
        <p>&copy; 2026 Wahyder. All rights reserved.</p>
      </footer>
    </main>
  )
}
