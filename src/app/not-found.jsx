"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh grid place-items-center p-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Página no encontrada</h1>
        <p>La página que buscas no existe.</p>
        <Link href="/" className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50 transition">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
