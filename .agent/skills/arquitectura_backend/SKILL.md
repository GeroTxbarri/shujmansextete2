---
name: arquitectura_backend
description: Utiliza esta skill SIEMPRE que el usuario te pida crear un nuevo módulo, endpoint o funcionalidad para el backend en Node.js, Express y Prisma.
---

# Reglas de Arquitectura Backend

Al crear una nueva funcionalidad, debes dividir el código estrictamente en 4 capas separadas:
1. **Rutas (/routes):** Solo define el endpoint HTTP.
2. **Controlador (/controllers):** Recibe la petición, extrae los datos y llama al servicio. No contiene lógica de negocio.
3. **Servicio (/services):** Contiene todas las reglas de negocio y validaciones.
4. **Repositorio (/repositories):** Es la única capa autorizada para usar Prisma e interactuar con la base de datos.

Bajo ninguna circunstancia debes mezclar estas responsabilidades en un solo archivo.