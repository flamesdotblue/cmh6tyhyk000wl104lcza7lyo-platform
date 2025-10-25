export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/80">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-lg font-semibold">Nova Growth</div>
            <p className="mt-1 text-sm text-zinc-400">Digital marketing agency. © {new Date().getFullYear()}</p>
          </div>
          <nav className="flex items-center gap-5 text-sm text-zinc-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
