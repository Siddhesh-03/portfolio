const projects = [
  {
    title: "CampusConnect",
    description:
      "A campus social platform for students to discover events, connect with peers, share posts, and communicate through group chats.",
    technologies: ["Flutter", "Firebase", "Cloudinary"],
    github: "#",
    demo: "#",
  },
  {
    title: "Digital Loan System",
    description:
      "A web-based loan management system designed to handle loan applications, customer information, and loan processing.",
    technologies: ["Java", "Spring", "Hibernate", "JDBC", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Bill Split Application",
    description:
      "A Splitwise-style application for managing shared expenses, tracking balances, and simplifying bill splitting between users.",
    technologies: ["Spring Boot", "React", "MySQL"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-medium text-muted-foreground">
          Projects
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Things I've built
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border p-6"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  className="text-sm font-medium underline"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="text-sm font-medium underline"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;