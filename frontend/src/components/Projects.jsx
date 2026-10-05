import { useState } from "react";

const projects = [
  {
    title: "CampusConnect",
    description:
      "A campus social platform for students to discover events, connect with peers, share posts, and communicate through group chats.",
    technologies: ["Flutter", "Firebase", "Cloudinary"],
    tags: ["Mobile", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Digital Loan System",
    description:
      "A web-based loan management system designed to handle loan applications, customer information, and loan processing.",
    technologies: ["Java", "Spring", "Hibernate", "JDBC", "MySQL"],
    tags: ["Java", "Backend", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Bill Split Application",
    description:
      "A Splitwise-style application for managing shared expenses, tracking balances, and simplifying bill splitting between users.",
    technologies: ["Spring Boot", "React", "MySQL"],
    tags: ["Spring Boot", "React", "MySQL"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = [
    "All",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Things I've built
          </h2>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image placeholder */}
              <div className="mb-6 flex aspect-video items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
                Project Screenshot
              </div>

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  className="text-sm font-medium underline-offset-4 hover:underline"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="text-sm font-medium underline-offset-4 hover:underline"
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