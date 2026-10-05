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
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-medium text-muted-foreground">
          Experience
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Where I've worked
        </h2>

        <div className="mt-10 space-y-8">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="border-l-2 pl-6"
            >
              <p className="text-sm text-muted-foreground">
                {experience.period}
              </p>

              <h3 className="mt-1 text-xl font-semibold">
                {experience.role}
              </h3>

              <p className="mt-1 font-medium">
                {experience.company}
              </p>

              <p className="mt-3 max-w-3xl text-muted-foreground">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;