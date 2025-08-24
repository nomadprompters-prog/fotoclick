#!/usr/bin/env bash
set -e
cd /var/www/fotoclick
echo "[1/4] Instalar deps si faltan..."
npm ci || npm i
echo "[2/4] Export estático..."
npm run export
echo "[3/4] Publicar en /site..."
rm -rf site/*
cp -r out/* site/
echo "[4/4] Reiniciar contenedor..."
docker restart fotoclick-web
echo "✅ Despliegue listo: https://fotoclick.nomadprompters.es"
