const groups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "EJS"] },
  { title: "Backend", items: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
  { title: "Programming", items: ["Python", "C", "Shell"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Linux"] },
]

export default function Skills() {
  return (
    <section id="skills" className="container-limit py-16">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.map((g) => (
          <div key={g.title} className="card">
            <h3 className="font-semibold">{g.title}</h3>
            <ul className="mt-3 space-y-1 text-slate-300">
              {g.items.map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
