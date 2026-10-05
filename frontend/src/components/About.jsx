function About() {
  return (
    <section id="about" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About Me
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Building software with purpose.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              I'm an MCA student and aspiring Software Engineer interested in
              building reliable software across backend, web, and mobile
              applications.
            </p>

            <p>
              I enjoy working with Java, Spring Boot, REST APIs, databases,
              React, and Node.js while continuously improving my problem-solving
              and data structures skills.
            </p>

            <p>
              My goal is to understand how software works from the fundamentals
              up and build practical systems that solve real problems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;