<div align="center">

# 🚀 Hono API con Drizzle ORM y PostgreSQL

<p align="center">
  <img src="https://img.shields.io/badge/Hono-4.9.4-blue?style=for-the-badge&logo=hono" alt="Hono" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-0.44.4-orange?style=for-the-badge&logo=drizzle" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/PostgreSQL-17.5-blue?style=for-the-badge&logo=postgresql" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/TypeScript-Latest-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Bun-Latest-black?style=for-the-badge&logo=bun" alt="Bun" />
  <img src="https://img.shields.io/badge/Biome-2.2.2-purple?style=for-the-badge&logo=biome" alt="Biome" />
</p>

<p align="center">
  Una API REST moderna y de alto rendimiento construida con <a href="https://hono.dev/">Hono</a>, un framework web ligero y rápido, y <a href="https://orm.drizzle.team/">Drizzle ORM</a> para acceso a base de datos PostgreSQL con seguridad de tipos. Incluye una configuración completa para desarrollo local y contenerización con Docker.
</p>

</div>

## 📚 Índice

- [✨ Características](#-características)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [📋 Requisitos Previos](#-requisitos-previos)
- [🚀 Primeros Pasos](#-primeros-pasos)
- [📊 Esquema de Base de Datos](#-esquema-de-base-de-datos)
- [🔄 API Endpoints](#-api-endpoints)
- [🧪 Testing](#-testing)
- [🐳 Docker](#-docker)
- [🔧 Herramientas de Desarrollo](#-herramientas-de-desarrollo)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)

## ✨ Características

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">

<div style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #4285f4;">
  <h3>🚀 Ultra-rápido</h3>
  <p>Construido con Hono para un rendimiento excepcional en aplicaciones web.</p>
</div>

<div style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #34a853;">
  <h3>🔒 Seguridad de tipos</h3>
  <p>Seguridad de tipos de extremo a extremo con TypeScript y Drizzle ORM.</p>
</div>

<div style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #fbbc05;">
  <h3>🐳 Dockerizado</h3>
  <p>Incluye <code>docker-compose.yml</code> para configuración fácil de PostgreSQL.</p>
</div>

<div style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #ea4335;">
  <h3>🐘 PostgreSQL</h3>
  <p>Utiliza PostgreSQL como base de datos principal con esquemas tipados.</p>
</div>

<div style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #673ab7;">
  <h3>🔥 Hot-Reload</h3>
  <p>Recarga en vivo para una experiencia de desarrollo fluida con Bun.</p>
</div>

<div style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #ff9800;">
  <h3>💅 Calidad de código</h3>
  <p>Incluye <a href="https://biomejs.dev/">Biome</a> para formateo y linting, y <a href="https://typicode.github.io/husky/">Husky</a> para hooks pre-commit.</p>
</div>

<div style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #009688;">
  <h3>🧪 Testing integrado</h3>
  <p>Configuración de pruebas lista para usar con Bun test y base de datos de prueba.</p>
</div>

<div style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #e91e63;">
  <h3>🔄 CI/CD</h3>
  <p>Integración continua con GitHub Actions para verificar la calidad del código.</p>
</div>

</div>

## 🛠️ Stack Tecnológico

<div style="display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; margin: 2rem 0;">

<div style="text-align: center; width: 120px;">
  <img src="https://raw.githubusercontent.com/honojs/hono/main/docs/images/hono-logo.png" alt="Hono" width="60" height="60" />
  <p><a href="https://hono.dev/">Hono</a></p>
  <small>Framework web ultrarrápido</small>
</div>

<div style="text-align: center; width: 120px;">
  <img src="https://orm.drizzle.team/favicon.ico" alt="Drizzle ORM" width="60" height="60" />
  <p><a href="https://orm.drizzle.team/">Drizzle ORM</a></p>
  <small>ORM TypeScript nativo</small>
</div>

<div style="text-align: center; width: 120px;">
  <img src="https://wiki.postgresql.org/images/3/30/PostgreSQL_logo.3colors.120x120.png" alt="PostgreSQL" width="60" height="60" />
  <p><a href="https://www.postgresql.org/">PostgreSQL</a></p>
  <small>Base de datos relacional</small>
</div>

<div style="text-align: center; width: 120px;">
  <img src="https://bun.sh/logo.svg" alt="Bun" width="60" height="60" />
  <p><a href="https://bun.sh/">Bun</a></p>
  <small>Runtime JavaScript todo-en-uno</small>
</div>

<div style="text-align: center; width: 120px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" width="60" height="60" />
  <p><a href="https://www.typescriptlang.org/">TypeScript</a></p>
  <small>JavaScript con tipos</small>
</div>

<div style="text-align: center; width: 120px;">
  <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="Docker" width="60" height="60" />
  <p><a href="https://www.docker.com/">Docker</a></p>
  <small>Contenerización</small>
</div>

<div style="text-align: center; width: 120px;">
  <img src="https://biomejs.dev/img/favicon.svg" alt="Biome" width="60" height="60" />
  <p><a href="https://biomejs.dev/">Biome</a></p>
  <small>Linter y formateador</small>
</div>

</div>

## 📁 Estructura del Proyecto

```mermaid
graph TD
    A[hono-drizzle] --> B[src/]
    A --> C[scripts/]
    A --> D[.github/]
    A --> E[docker-compose.yml]
    A --> F[drizzle.config.ts]
    A --> G[biome.jsonc]
    A --> H[.husky/]

    B --> I[db/]
    B --> J[index.ts]
    B --> K[test/]

    I --> L[db.ts]
    I --> M[schema.ts]
    I --> N[queries.ts]
    I --> O[queries.test.ts]
    I --> P[drizzle/]

    C --> Q[seed.script.ts]

    K --> R[setup-test-db.ts]
    K --> S[setup.ts]

    D --> T[workflows/]
    T --> U[ci.yml]

    H --> V[pre-commit]
```

<div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; font-family: 'Courier New', monospace; margin: 1rem 0;">

```bash
hono-drizzle/
├── src/
│   ├── db/
│   │   ├── db.ts           # Instancia de Drizzle DB
│   │   ├── drizzle/        # Migraciones generadas
│   │   ├── queries.ts      # Consultas a la base de datos
│   │   ├── queries.test.ts # Tests para las consultas
│   │   └── schema.ts       # Definiciones del esquema de la BD
│   ├── index.ts            # Punto de entrada y rutas API
│   └── test/
│       ├── setup-test-db.ts # Configuración de BD para tests
│       └── setup.ts         # Configuración general de tests
├── scripts/
│   └── seed.script.ts      # Script para poblar la BD
├── .github/                # Configuración de GitHub
│   └── workflows/
│       └── ci.yml          # Configuración de CI
├── .husky/                 # Hooks de Git
│   └── pre-commit          # Hook pre-commit
├── .gitignore
├── biome.jsonc             # Configuración de Biome
├── docker-compose.yml      # Configuración de Docker Compose
├── drizzle.config.ts       # Configuración de Drizzle ORM
├── package.json            # Dependencias y scripts
├── tsconfig.json           # Configuración de TypeScript
└── README.md               # Documentación del proyecto
```

</div>

## 📋 Requisitos Previos

<div style="background-color: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #4285f4; margin: 1rem 0;">

Asegúrate de tener instalado lo siguiente en tu sistema:

<div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
  <img src="https://bun.sh/logo.svg" alt="Bun" width="24" height="24" style="margin-right: 10px;" />
  <a href="https://bun.sh/">Bun</a> (v1.0 o superior)
</div>

<div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
  <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="Docker" width="24" height="24" style="margin-right: 10px;" />
  <a href="https://www.docker.com/">Docker</a> y <a href="https://docs.docker.com/compose/">Docker Compose</a>
</div>

<div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
  <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" width="24" height="24" style="margin-right: 10px;" />
  <a href="https://git-scm.com/">Git</a>
</div>

</div>

## 🚀 Primeros Pasos

### 1. Clonar el repositorio

```bash
git clone https://github.com/your-username/hono-drizzle.git
cd hono-drizzle
```

### 2. Instalar dependencias

```bash
bun install
```

### 3. Configurar la base de datos

Inicia la base de datos PostgreSQL usando Docker Compose:

```bash
docker-compose up -d
```

Esto creará un contenedor PostgreSQL con la siguiente configuración:

| Parámetro     | Valor       |
| ------------- | ----------- |
| Host          | `localhost` |
| Puerto        | `5432`      |
| Base de datos | `todos`     |
| Usuario       | `user`      |
| Contraseña    | `password`  |

También necesitarás configurar la variable de entorno `DATABASE_URL`. Puedes crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
DATABASE_URL=postgresql://user:password@localhost:5432/todos
```

### 4. Ejecutar migraciones de la base de datos

Aplica el esquema de la base de datos:

```bash
bun run db:migrate
```

### 5. Poblar la base de datos con datos de ejemplo (opcional)

```bash
bun run db:seed
```

### 6. Ejecutar la aplicación

Para iniciar el servidor de desarrollo con recarga en caliente:

```bash
bun run dev
```

La API estará disponible en `http://localhost:3000`.

## 📊 Esquema de Base de Datos

```mermaid
erDiagram
    USERS {
        uuid id PK
        varchar(256) email UK
        varchar(500) passwordHash
        integer age
        timestamp createdAt
        timestamp updatedAt
    }
    TODOS {
        uuid id PK
        uuid userId FK
        varchar(500) title
        varchar(1000) description
        boolean completed
        timestamp createdAt
        timestamp updatedAt
    }
    USERS ||--o{ TODOS : "tiene"
```

### Tabla `users`

| Campo          | Tipo           | Descripción                          |
| -------------- | -------------- | ------------------------------------ |
| `id`           | `uuid`         | Identificador único (clave primaria) |
| `email`        | `varchar(256)` | Email del usuario (único)            |
| `passwordHash` | `varchar(500)` | Hash de la contraseña                |
| `age`          | `integer`      | Edad del usuario (0-120)             |
| `createdAt`    | `timestamp`    | Fecha de creación                    |
| `updatedAt`    | `timestamp`    | Fecha de última actualización        |

### Tabla `todos`

| Campo         | Tipo            | Descripción                          |
| ------------- | --------------- | ------------------------------------ |
| `id`          | `uuid`          | Identificador único (clave primaria) |
| `userId`      | `uuid`          | ID del usuario (clave foránea)       |
| `title`       | `varchar(500)`  | Título de la tarea                   |
| `description` | `varchar(1000)` | Descripción de la tarea              |
| `completed`   | `boolean`       | Estado de completitud                |
| `createdAt`   | `timestamp`     | Fecha de creación                    |
| `updatedAt`   | `timestamp`     | Fecha de última actualización        |

## 🔄 API Endpoints

<div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0;">

### Usuarios

| Método   | Ruta         | Descripción                    |
| -------- | ------------ | ------------------------------ |
| `GET`    | `/users`     | Obtiene todos los usuarios     |
| `GET`    | `/users/:id` | Obtiene un usuario por ID      |
| `POST`   | `/users`     | Crea un nuevo usuario          |
| `PUT`    | `/users/:id` | Actualiza un usuario existente |
| `DELETE` | `/users/:id` | Elimina un usuario             |

### Tareas

| Método   | Ruta                  | Descripción                            |
| -------- | --------------------- | -------------------------------------- |
| `GET`    | `/todos`              | Obtiene todas las tareas               |
| `GET`    | `/todos/:id`          | Obtiene una tarea por ID               |
| `GET`    | `/todos/user/:userId` | Obtiene todas las tareas de un usuario |
| `POST`   | `/todos`              | Crea una nueva tarea                   |
| `PUT`    | `/todos/:id`          | Actualiza una tarea existente          |
| `DELETE` | `/todos/:id`          | Elimina una tarea                      |

</div>

### Ejemplo de Uso

```bash
# Obtener todos los usuarios
curl -X GET http://localhost:3000/users

# Crear un nuevo usuario
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"email":"usuario@ejemplo.com","passwordHash":"hash_seguro","age":30}'

# Obtener todas las tareas de un usuario
curl -X GET http://localhost:3000/todos/user/550e8400-e29b-41d4-a716-446655440000
```

### Ejemplo de Respuesta

```json
// Respuesta al obtener todos los usuarios
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "usuario@ejemplo.com",
    "passwordHash": "hash_seguro",
    "age": 30,
    "createdAt": "2023-04-01T12:00:00Z",
    "updatedAt": "2023-04-01T12:00:00Z"
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "email": "otro@ejemplo.com",
    "passwordHash": "otro_hash_seguro",
    "age": 25,
    "createdAt": "2023-04-02T10:30:00Z",
    "updatedAt": "2023-04-02T10:30:00Z"
  }
]
```

## 🧪 Testing

<div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 4px solid #673ab7; margin: 1rem 0;">

Este proyecto incluye una configuración completa para pruebas unitarias e integración utilizando el test runner integrado de Bun.

### Configuración de Tests

Los tests utilizan una base de datos PostgreSQL temporal que se crea y destruye para cada prueba, asegurando que cada test se ejecute en un entorno aislado y limpio.

### Ejecutando los Tests

Para ejecutar todos los tests:

```bash
bun test
```

Para ejecutar un archivo de test específico:

```bash
bun test src/db/queries.test.ts
```

### Estructura de Tests

Los tests están organizados siguiendo la estructura del código fuente. Por ejemplo, las pruebas para las consultas de base de datos se encuentran en `src/db/queries.test.ts`.

### Ejemplo de Test

```typescript
import { describe, expect, it } from "bun:test";
import { createTestDb } from "../test/setup-test-db";
import { insertUser, getTodosByUserId } from "./queries";

describe("Database queries", () => {
  it("should insert a user and retrieve todos", async () => {
    const ctx = await createTestDb();
    const db = ctx.db;

    // Insertar un usuario de prueba
    const user = await insertUser(db, {
      email: "test@example.com",
      passwordHash: "test_hash",
      age: 25,
    });

    // Verificar que el usuario se insertó correctamente
    expect(user.id).toBeDefined();
    expect(user.email).toBe("test@example.com");

    // Limpiar después de la prueba
    await ctx.cleanup();
  });
});
```

</div>

## 🐳 Docker

<div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 4px solid #fbbc05; margin: 1rem 0;">

Este proyecto utiliza Docker para proporcionar un entorno de desarrollo consistente y fácil de configurar.

### Configuración de Docker

El archivo `docker-compose.yml` define un servicio PostgreSQL:

```yaml
services:
  postgres:
    image: postgres:17.5-alpine
    restart: unless-stopped
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: todos
```

### Comandos Docker útiles

```bash
# Iniciar los servicios en segundo plano
docker-compose up -d

# Ver logs de los servicios
docker-compose logs

# Detener los servicios
docker-compose down

# Detener los servicios y eliminar volúmenes (borra datos)
docker-compose down -v
```

</div>

## 🔧 Herramientas de Desarrollo

<div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; margin: 1rem 0;">

### Biome

[Biome](https://biomejs.dev/) es una herramienta todo-en-uno para formateo, linting y más. La configuración se encuentra en `biome.jsonc`:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.2/schema.json",
  "extends": ["ultracite"]
}
```

Comandos disponibles:

```bash
# Formatear código
bun run format

# Verificar linting
bun run lint

# Verificar y corregir problemas
bun run check
```

### Husky

[Husky](https://typicode.github.io/husky/) se utiliza para ejecutar scripts en los hooks de Git. La configuración se encuentra en `.husky/pre-commit`:

```bash
bunx lint-staged
```

Esto ejecuta `lint-staged` antes de cada commit, que a su vez ejecuta los comandos de formateo y linting en los archivos modificados según la configuración en `package.json`:

```json
"lint-staged": {
  "*.{js,ts,tsx,json,jsonc,css,md,mdx}": [
    "bun format",
    "bun check ",
    "bun lint"
  ]
}
```

### Drizzle ORM

[Drizzle ORM](https://orm.drizzle.team/) es un ORM TypeScript nativo con excelente soporte para PostgreSQL. La configuración se encuentra en `drizzle.config.ts`:

```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
  casing: "snake_case",
});
```

Comandos disponibles:

```bash
# Generar migraciones
bun run db:generate:migration

# Aplicar migraciones
bun run db:migrate

# Abrir Drizzle Studio (interfaz visual para la BD)
bun run db:studio

# Poblar la BD con datos de ejemplo
bun run db:seed
```

### GitHub Actions

Este proyecto incluye una configuración de CI con GitHub Actions en `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  check:
    name: Biome Check
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js v22
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Set up Bun
        uses: oven-sh/setup-bun@v1

      - name: Install dependencies
        run: bun install

      - name: Run Biome check
        run: bun run check
```

Esta configuración ejecuta las verificaciones de Biome en cada push a la rama principal y en cada pull request.

</div>

## 🤝 Contribuir

<div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 4px solid #34a853; margin: 1rem 0;">

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'feat: añadir nueva característica'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

### Convenciones de Código

- Sigue las convenciones de estilo aplicadas por Biome
- Escribe tests para tu código
- Documenta las nuevas características
- Sigue las [convenciones de commits convencionales](https://www.conventionalcommits.org/)

</div>

## 📄 Licencia

<div style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 4px solid #fbbc05; margin: 1rem 0;">

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

</div>

---

<div align="center">

<img src="https://raw.githubusercontent.com/honojs/hono/main/docs/images/hono-logo.png" alt="Hono" width="30" height="30" style="margin-right: 10px;" />
<img src="https://orm.drizzle.team/img/drizzle-logo.svg" alt="Drizzle" width="30" height="30" style="margin-right: 10px;" />
<img src="https://wiki.postgresql.org/images/3/30/PostgreSQL_logo.3colors.120x120.png" alt="PostgreSQL" width="30" height="30" style="margin-right: 10px;" />
<img src="https://bun.sh/logo.svg" alt="Bun" width="30" height="30" />

<p>Hecho con ❤️ usando tecnologías modernas</p>

</div>
