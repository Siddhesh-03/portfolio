const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "MIT World Peace University",
    period: "2024 – Present",
    result: "SGPA: 7.48",
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
    <section id="education" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My academic journey
          </h2>
        </div>

        <div className="relative border-l pl-6 sm:pl-8">
          {education.map((item) => (
            <div
              key={`${item.degree}-${item.institution}`}
              className="relative mb-6 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 bg-background sm:-left-[35px]" />

              <div className="rounded-xl border p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.degree}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 text-sm font-medium">
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;