const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "MIT World Peace University",
    period: "aug 2024 – jul 2026",
    result: "SGPA: 7.83",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Savitribai Phule Pune University",
    period: "2020 – 2023",
    result: "CGPA: 8.83",
  },
];

function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-medium text-muted-foreground">
          Education
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Academic background
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={`${item.degree}-${item.institution}`}
              className="rounded-xl border p-6"
            >
              <p className="text-sm text-muted-foreground">
                {item.period}
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {item.degree}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {item.institution}
              </p>

              <p className="mt-4 text-sm font-medium">
                {item.result}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;