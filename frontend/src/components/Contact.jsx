function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-medium text-muted-foreground">
          Contact
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Let's work together
        </h2>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          Have a project, opportunity, or just want to connect?
          Send me a message.
        </p>

        <form className="mt-10 max-w-2xl space-y-6">

          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium"
            >
              Message
            </label>

            <textarea
              id="message"
              rows="6"
              placeholder="Tell me about your opportunity..."
              className="mt-2 w-full resize-none rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;