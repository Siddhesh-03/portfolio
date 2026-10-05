const certifications = [
  {
    name: "DSA using Java",
    issuer: "LearnYard",
    date: "May 2025",
  },
  {
    name: "JavaScript",
    issuer: "Infosys Springboard",
    date: "April 2025",
  },
  {
    name: "Java Programming",
    issuer: "Infosys Springboard",
    date: "November 2024",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Certifications
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Learning and credentials
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <div
              key={certification.name}
              className="rounded-xl border p-5 transition-shadow hover:shadow-sm"
            >
              <h3 className="font-semibold">
                {certification.name}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {certification.issuer}
              </p>

              <p className="mt-4 text-xs text-muted-foreground">
                {certification.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;