---
name: prisma-database
description: Utiliza esta skill siempre que el usuario mencione cambios en la base de datos, relaciones entre tablas o el archivo schema.prisma.
---

# Reglas para Prisma y Base de Datos Relacional

1. **Validación Previa:** Antes de generar código para Controladores o Servicios nuevos, SIEMPRE revisa y sugiere las modificaciones necesarias en el archivo `schema.prisma`.
2. **Relaciones Claras:** Asegúrate de mantener una correcta normalización. (Ejemplo: Un `Usuario` tiene muchos `WorkoutLogs`, un `WorkoutLog` tiene muchos `Sets`, y un `Set` pertenece a un `Exercise`).
3. **Migraciones:** Nunca sugieras comandos destructivos. Tras modificar el esquema, sugiere al usuario ejecutar `npx prisma migrate dev --name [nombre_descriptivo]`.
4. **Tipos de Datos:** Usa Float para pesos (ej. 75.5 kg) y enteros para repeticiones o series.