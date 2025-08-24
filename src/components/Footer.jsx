export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[--color-border]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[--color-muted] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Fotosclick. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:info@fotosclick.es" className="hover:text-[--color-accent]">Email</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[--color-accent]">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[--color-accent]">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
