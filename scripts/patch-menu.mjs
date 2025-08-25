import fs from "node:fs";

const file = "src/app/page.jsx";
let s = fs.readFileSync(file, "utf8");

// localiza el primer <nav> y, dentro, el primer <ul>..</ul>
const navStart = s.indexOf("<nav");
if (navStart === -1) {
  console.error("No encontré <nav> en src/app/page.jsx");
  process.exit(1);
}
const ulStart = s.indexOf("<ul", navStart);
if (ulStart === -1) {
  console.error("No encontré <ul> dentro del primer <nav>");
  process.exit(1);
}
const ulEnd = s.indexOf("</ul>", ulStart);
if (ulEnd === -1) {
  console.error("No encontré cierre </ul> del primer <ul>");
  process.exit(1);
}

// nuevo contenido del menú (mismos puntos que el original; “Galería” rotulado como “Portfolio”)
const newItems =
`  <li><Link href="/">Home</Link></li>
  <li><Link href="/galeria">Portfolio</Link></li>
  <li><Link href="/nosotros">Nosotros</Link></li>
  <li><Link href="/servicios">Servicios</Link></li>
  <li><Link href="/opiniones">Opiniones</Link></li>
  <li><Link href="/contacto">Contacto</Link></li>`;

const before = s.slice(0, ulStart);
const openTagEnd = s.indexOf(">", ulStart);
const openTag = s.slice(ulStart, openTagEnd + 1);
const after = s.slice(ulEnd + "</ul>".length);

const patched = before + openTag + "\n" + newItems + "\n</ul>" + after;
fs.writeFileSync(file, patched, "utf8");
console.log("✔ Menú de la home actualizado.");
