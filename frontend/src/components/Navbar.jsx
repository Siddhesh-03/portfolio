function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <h1 className="text-xl font-bold">
          Siddhesh
        </h1>

        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;