# Hono REST API with Drizzle ORM, PostgreSQL, and Bun

Production-ready starter for building a fast REST API using:

- Hono (ultra-light web framework)
- Drizzle ORM (typesafe SQL ORM)
- PostgreSQL (via Docker)
- Bun (runtime, dev server, and test runner)

This README walks you through local development with Docker, database migrations with Drizzle, testing, and deployment considerations.

## Tech Stack

- Runtime: Bun
- Web framework: Hono
- Database: PostgreSQL (Docker)
- ORM & Migrations: Drizzle ORM + Drizzle Kit
- Testing: Bun test

## Quick start

# Hono API REST con Bun — Starter mínimo

API REST ultraligera construida con Hono y ejecutada con Bun. Hot reload listo y un endpoint de ejemplo.

## 🚀 Quick start

1. Instalar dependencias

```sh
bun install
```

2. Levantar el servidor en modo desarrollo

```sh
bun run dev
```

3. Probar el endpoint

```sh
curl http://localhost:3000/
```

Deberías ver: `Hello Hono!`

## 🧩 Stack

- Runtime: Bun
- Framework: Hono

## 🗂️ Estructura del proyecto

```
.
├─ src/
│  └─ index.ts           # App Hono exportada por defecto
├─ package.json          # Scripts (dev)
├─ tsconfig.json         # Config TS mínima
└─ bun.lock
```

## 🧭 Arquitectura (minimal)

```mermaid
flowchart LR
  Client[Cliente] -->|HTTP GET /| App[Bun + Hono (src/index.ts)]
  App -->|200 text/plain: "Hello Hono!"| Client
```

## 🔌 Endpoints

- GET `/` → 200 OK, texto plano: `Hello Hono!`

Ejemplo:

```sh
curl -i http://localhost:3000/
```

## 📜 Scripts disponibles

Definidos en `package.json`:

- `dev`: `bun run --hot src/index.ts`

El modo `--hot` aplica recarga en caliente al editar el código.

## 🔍 Notas de desarrollo

- La app Hono se exporta por defecto desde `src/index.ts`, lo que permite a Bun servirla automáticamente como handler `fetch` en `http://localhost:3000`.
- Mantén las rutas simples y puras; añade nuevas rutas importando y componiendo instancias de `Hono`.

## 🧪 (Opcional) Prueba rápida en código

Si quieres un test mínimo con el runner de Bun, puedes crear `src/index.test.ts` con:

```ts
import { expect, test } from "bun:test";
import app from "./index";

test("GET /", async () => {
  const res = await app.request("/");
  expect(res.status).toBe(200);
  expect(await res.text()).toBe("Hello Hono!");
});
```

Y ejecutarlo con:

```sh
bun test
```

## ✨ Futuras extensiones (cuando apliquen)

- Añadir nuevas rutas y middlewares (auth, validación, etc.).
- Integrar base de datos o clientes externos según necesidad.

MIT — feel free to use this as a foundation for your own APIs.
