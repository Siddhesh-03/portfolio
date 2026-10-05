function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-6xl px-6">
        
        <p className="mb-4 text-sm font-medium">
          Hello, I'm
        </p>

        <h1 className="text-5xl font-bold tracking-tight">
          Siddhesh Hule
        </h1>

        <h2 className="mt-4 text-2xl text-muted-foreground">
          Software Engineer
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I build scalable backend systems, web applications,
          and mobile experiences using modern software technologies.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-primary px-5 py-3 text-primary-foreground"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border px-5 py-3"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;