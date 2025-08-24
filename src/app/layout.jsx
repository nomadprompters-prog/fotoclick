import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Fotosclick — Portfolio Fotográfico",
  description: "Portfolio profesional de fotografía, sesiones y trabajos a medida.",
  metadataBase: new URL("https://fotoclick.nomadprompters.es"),
  openGraph: {
    title: "Fotosclick — Portfolio Fotográfico",
    description: "Portfolio profesional de fotografía, sesiones y trabajos a medida.",
    url: "https://fotoclick.nomadprompters.es",
    siteName: "Fotosclick",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
                <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
