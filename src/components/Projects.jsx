import { projects } from '../data/projects'

function Badge({ children }) {
  return <span className="rounded-md border border-slate-700 px-2 py-1 text-xs">{children}</span>
}

export default function Projects() {
  return (
    <section id="projects" className="container-limit py-16">
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="mt-2 text-slate-400">Curated selection of my favorite work.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <article key={p.title} className="card flex flex-col">
            <div className="aspect-video rounded-lg bg-slate-800/80 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-300 text-sm flex-1">{p.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => <Badge key={s}>{s}</Badge>)}
            </div>

            <div className="mt-4 flex gap-3">
              <a className="btn-primary" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
              {p.demo && <a className="btn-ghost" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
