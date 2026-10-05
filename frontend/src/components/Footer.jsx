function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Siddhesh Hule. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm">
          <a href="#" className="hover:underline">
            GitHub
          </a>

          <a href="#" className="hover:underline">
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;