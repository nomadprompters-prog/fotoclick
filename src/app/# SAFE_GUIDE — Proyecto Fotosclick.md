# SAFE_GUIDE — Proyecto Fotosclick (v1.0)

## 🚫 NO TOCAR (zonas prohibidas)

- `src/app/page.jsx` → Página principal (Home con Hero, Navbar blanca e imágenes).
- `src/app/layout.jsx` → Estructura global del sitio (`<html>`, `<body>`, `<main>`).
- `public/photos/sample.jpg` → Imagen principal del hero.
- `site/index.html` → Home en producción.

Estas piezas están **congeladas**.  
Cualquier cambio en ellas debe hacerse **solo con autorización explícita**.

---

## ✅ ÁREAS SEGURAS (zonas editables)

- `src/app/galeria/**` → Índice y categorías de galería.
- `src/app/contacto/**`, `src/app/nosotros/**`, `src/app/servicios/**`, `src/app/opiniones/**`.
- `src/components/**` → Solo para **componentes nuevos**.  
  _(Navbar/Footer actuales no se tocan)._
- `public/photos/**` → Subir fotos nuevas para categorías o servicios.

---

## 🛠️ FLUJO DE TRABAJO SEGURO

1. **Limpiar antes de compilar:**
   ```bash
   npm run clean
   ```
