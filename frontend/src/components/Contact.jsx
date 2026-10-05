function Contact() {
  return (
    <section id="contact" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          
          {/* Left side */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's work together.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              Have a project, opportunity, or just want to connect?
              Send me a message and I'll get back to you.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border bg-background px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border bg-background px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                className="w-full resize-y rounded-md border bg-background px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;