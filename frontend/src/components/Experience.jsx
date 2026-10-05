const experiences = [
  {
    role: "Java Developer Intern",
    company: "Your Company",
    period: "2025",
    description:
      "Worked with Java web technologies and gained practical experience with JSP, Spring, Hibernate, JDBC, and MySQL.",
  },
];

function Experience() {
  return (
    <section id="experience" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Where I've worked
          </h2>
        </div>

        <div className="relative border-l pl-6 sm:pl-8">
          {experiences.map((experience) => (
            <div key={`${experience.role}-${experience.company}`} className="relative">
              
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 bg-background sm:-left-[35px]" />

              <div className="rounded-xl border p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {experience.role}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {experience.company}
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;