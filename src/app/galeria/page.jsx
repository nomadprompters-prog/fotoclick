import Link from "next/link";

const CATEGORIES = [
  { name: "Autor", slug: "autor" },
  { name: "Paisajes", slug: "paisajes" },
  { name: "Deporte", slug: "deporte" },
  { name: "H2O", slug: "h2o" },
  { name: "Flora", slug: "flora" },
  { name: "Modelos", slug: "modelos" },
  { name: "Animales", slug: "animales" },
  { name: "Grabados", slug: "grabados" },
  { name: "Montajes", slug: "montajes" },
  { name: "Arquitectura y escultura", slug: "arquitectura-escultura" },
  { name: "Miradas", slug: "miradas" },
  { name: "Otras", slug: "otras" },
  { name: "Desnudo", slug: "desnudo" },
  { name: "Urbex", slug: "urbex" },
  { name: "Cantabria", slug: "cantabria" },
];

export const metadata = {
  title: "Galería — Fotosclick",
  description: "Índice de categorías fotográficas.",
};

export default function GaleriaIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Galería</h1>
        <p className="text-[--color-muted] mt-2">Explora el portfolio por categorías.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list" aria-label="Categorías de galería">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/galeria/${cat.slug}`}
            role="listitem"
            className="group rounded-xl border border-[--color-border] p-6 bg-[--color-background] hover:bg-white/5 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg md:text-xl font-medium">{cat.name}</h2>
              <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[--color-border] group-hover:border-[--color-accent]">→</span>
            </div>
            <p className="text-sm text-[--color-muted] mt-2">Ver {cat.name.toLowerCase()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
