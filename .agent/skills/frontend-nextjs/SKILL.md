---
name: frontend-nextjs
description: Utiliza esta skill para generar componentes de React, páginas en Next.js (App Router) o estilos con Tailwind CSS.
---

# Reglas de Desarrollo Frontend

2. **Componentes:** Por defecto, utiliza Server Components de Next.js. Solo añade la directiva `"use client"` cuando el componente requiera interactividad (como el cronómetro de descanso o botones para anotar repeticiones).
3. **UI/UX:** Utiliza clases de Tailwind claras. Si te pido un componente complejo (ej. un modal de confirmación), asume el uso de una estética minimalista tipo Shadcn/UI.
4. **Formularios:** Para cargar series, pesos y comidas rápido, los formularios deben ser ágiles, sin recargar la página.