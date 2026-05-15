#!/bin/bash

echo "Levantando el Backend (Node.js/Express)..."
# Entra a la carpeta del backend y lo corre en segundo plano (con el & al final)
cd backend && npm run dev &

echo "Levantando el Frontend (Next.js)..."
# Vuelve a la raíz, entra al frontend y lo corre en segundo plano
cd ../frontend && npm run dev &

echo "¡Todo listo! Frontend y Backend están corriendo en paralelo."
# El comando 'wait' mantiene la terminal activa viendo los logs de ambos
wait