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
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-medium text-muted-foreground">
          Skills
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Technologies I work with
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border p-6"
            >
              <h3 className="font-semibold">
                {group.category}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-muted px-3 py-1 text-sm"
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