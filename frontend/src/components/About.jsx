function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-medium text-muted-foreground">
          About Me
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Building software with a strong engineering foundation.
        </h2>

        <div className="mt-8 max-w-3xl space-y-4 text-muted-foreground">
          <p>
            I'm an MCA student and aspiring Software Engineer with an
            interest in backend development, web applications, and
            mobile development.
          </p>

          <p>
            I enjoy understanding how systems work under the hood and
            building applications that are practical, maintainable,
            and scalable.
          </p>

          <p>
            My current technical focus includes Java, Spring Boot,
            REST APIs, databases, React, Node.js, and data structures
            and algorithms.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;