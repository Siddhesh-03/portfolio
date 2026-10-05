const achievements = [
  // Add your achievements here
  // Example:
  // {
  //   title: "Achievement title",
  //   description: "Short description",
  // }
];

function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-medium text-muted-foreground">
          Achievements
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Highlights
        </h2>

        {achievements.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="rounded-xl border p-6"
              >
                <h3 className="font-semibold">
                  {achievement.title}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-8 text-muted-foreground">
            More achievements coming soon.
          </p>
        )}

      </div>
    </section>
  );
}

export default Achievements;