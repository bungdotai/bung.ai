import { Project } from "@/data/projects";

function StatusBadge({ status }: { status: Project["status"] }) {
  const isLive = status === "live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
        isLive
          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isLive ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
        }`}
      />
      {isLive ? "Live" : "Coming Soon"}
    </span>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.url ? "a" : "div";
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`card-glow block rounded-2xl bg-[#12121a]/80 backdrop-blur-sm p-6 ${
        project.url ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{project.emoji}</span>
        <StatusBadge status={project.status} />
      </div>
      <h2 className="text-lg font-semibold text-white mb-2">{project.name}</h2>
      <p className="text-sm text-slate-400 leading-relaxed">
        {project.description}
      </p>
      {project.url && (
        <div className="mt-4 flex items-center gap-1 text-xs text-indigo-400 font-medium">
          Visit →
        </div>
      )}
    </Wrapper>
  );
}
