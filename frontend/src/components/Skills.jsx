const skills = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Node.js", "REST APIs"],
  },
  {
    category: "Frontend",
    skills: ["React", "Flutter"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker"],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border p-5 transition-shadow hover:shadow-sm"
            >
              <h3 className="mb-4 font-semibold">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-muted px-3 py-1.5 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;