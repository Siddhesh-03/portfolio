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
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-medium text-muted-foreground">
          Certifications
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Continuous learning
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => (
            <div
              key={certificate.name}
              className="rounded-xl border p-6"
            >
              <h3 className="font-semibold">
                {certificate.name}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {certificate.issuer}
              </p>

              <p className="mt-4 text-sm text-muted-foreground">
                {certificate.date}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;