function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-73px)] items-center"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:py-20 md:grid-cols-2 md:gap-12">
        
        {/* Left side */}
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground sm:mb-4">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Siddhesh Hule
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-muted-foreground sm:mt-4 sm:text-2xl md:text-3xl">
            Software Engineer
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
            I build backend systems, web applications, and mobile
            experiences using Java, Spring Boot, React, and modern
            database technologies.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href="#projects"
              className="rounded-md bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-md border px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-muted"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
            {["Java", "Spring Boot", "React", "MongoDB"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="hidden items-center justify-end md:flex">
          <div className="w-full max-w-md rounded-xl border bg-muted/30 p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full border" />
              <div className="h-3 w-3 rounded-full border" />
              <div className="h-3 w-3 rounded-full border" />
            </div>

            <div className="space-y-2 font-mono text-sm">
              <p>
                <span className="text-muted-foreground">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="pl-4">
                name: <span>"Siddhesh Hule"</span>,
              </p>

              <p className="pl-4">
                role: <span>"Software Engineer"</span>,
              </p>

              <p className="pl-4">
                backend: <span>"Spring Boot"</span>,
              </p>

              <p className="pl-4">
                frontend: <span>"React"</span>,
              </p>

              <p className="pl-4">
                database: <span>"MongoDB"</span>
              </p>

              <p>{"}"}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;