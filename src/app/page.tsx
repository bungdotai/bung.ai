import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="pt-16 pb-12 px-6 text-center">
        <div className="mb-4">
          <span className="text-6xl inline-block animate-bounce" style={{ animationDuration: "2s" }}>
            🐡
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          bung.ai
        </h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Personal AI hub &amp; project gallery
        </p>
      </header>

      {/* Projects Grid */}
      <main className="flex-1 px-6 pb-16 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5">
        <p className="text-sm text-slate-500">
          Powered by Bung 🐡
        </p>
      </footer>
    </div>
  );
}
