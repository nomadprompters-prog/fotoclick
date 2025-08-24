# Design Manifest — Fotosclick (v0.1)

## Paleta
- Fondo: #0b0b0b
- Texto: #f4f4f5
- Texto secundario: #a1a1aa
- Acento (dorado): #e0b973
- Borde: #1f1f22

## Tipografía
- Familia: Inter, sans-serif
- Jerarquía:
  - H1: 44/52 (semibold)
  - H2: 32/40 (semibold)
  - H3: 24/32 (medium)
  - Body: 16/24 (regular)
  - Caption: 14/20 (regular)

## Layout
- Contenedor centrado `max-w-6xl`, padding 1–2rem
- Navbar fijo, fondo oscuro; Footer minimal

## Componentes base
- Navbar, Footer, Button (primary/ghost), Card
- GalleryGrid (1/2/3 cols), Lightbox (pendiente), Section

## Imágenes
- WebP/AVIF (fallback JPG)
- Breakpoints: 480 / 768 / 1024 / 1440 / 1920
- Peso objetivo: hero < 250KB, grid < 120KB

## Accesibilidad
- Contraste AA, foco visible, `alt` en fotos

## SEO
- Title base: “Fotosclick — Portfolio Fotográfico”
- Meta desc: “Portfolio profesional de fotografía, sesiones y trabajos a medida.”
- OG por defecto: /public/og-image.jpg
