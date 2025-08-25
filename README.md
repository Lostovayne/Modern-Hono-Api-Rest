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

1. Install dependencies

```sh
bun install
```

2. Start the API (Bun auto-serves the default exported Hono app)

```sh
bun run dev
```

3. Hit the health endpoint

```sh
curl http://localhost:3000/
```

If you see "Hello Hono!", the server is up.

> Note: In Bun, exporting a default Hono app exposes a `fetch` handler automatically. The dev script `bun run --hot src/index.ts` hot-reloads on file changes.

## Project structure

```
.
├─ src/
│  └─ index.ts            # Hono app (default export)
├─ package.json           # Scripts and dependencies
├─ tsconfig.json          # TS config
└─ bun.lock               # Bun lockfile
```

Planned additions for DB and tests (see instructions below):

```
src/
├─ db/
│  ├─ index.ts            # Drizzle DB client
│  └─ schema.ts           # Drizzle table schemas
├─ routes/...
└─ __tests__/...

drizzle.config.ts         # Drizzle Kit config
docker-compose.yml        # Postgres + (optional) Adminer/pgAdmin
```

## Environment variables

Create a `.env` file at the root with your database connection info (used by Drizzle and the app):

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/hono_db
# Optional: change user/password/db to your liking
```

Ensure this URL matches the values used in `docker-compose.yml` and your Drizzle config.

## Run PostgreSQL with Docker

Create a `docker-compose.yml` like this:

```yaml
services:
	db:
		image: postgres:17.5-alpine
		container_name: hono_postgres
		environment:
			POSTGRES_USER: postgres
			POSTGRES_PASSWORD: postgres
			POSTGRES_DB: hono_db
		ports:
			- '5432:5432'
		volumes:
			- pgdata:/var/lib/postgresql/data
		healthcheck:
			test: ["CMD-SHELL", "pg_isready -U postgres"]
			interval: 5s
			timeout: 5s
			retries: 10

	adminer:
		image: adminer
		restart: always
		ports:
			- '8080:8080'
		depends_on:
			- db

volumes:
	pgdata:
```

Start the database:

```sh
docker compose up -d
```

Open Adminer at http://localhost:8080 and connect using:

- System: PostgreSQL
- Server: db
- Username: postgres
- Password: postgres
- Database: hono_db

## Add Drizzle ORM

Install Drizzle and the Postgres driver (postgres-js):

```sh
bun add drizzle-orm postgres
bun add -d drizzle-kit dotenv
```

Add `drizzle.config.ts`:

```ts
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

Create `src/db/schema.ts`:

```ts
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
```

Create `src/db/index.ts`:

```ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL!, { prepare: true });
export const db = drizzle(client);
```

Generate and run migrations:

```sh
bun x drizzle-kit generate
bun x drizzle-kit migrate
```

Verify schema tables appear in the database.

## Using Drizzle inside Hono routes

Example route file `src/routes/todos.ts`:

```ts
import { Hono } from "hono";
import { db } from "../db";
import { todos } from "../db/schema";
import { eq } from "drizzle-orm";

export const todosRoute = new Hono();

todosRoute.get("/", async (c) => {
  const list = await db.select().from(todos);
  return c.json(list);
});

todosRoute.post("/", async (c) => {
  const body = await c.req.json();
  const [row] = await db.insert(todos).values({ title: body.title }).returning();
  return c.json(row, 201);
});

todosRoute.get("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const [row] = await db.select().from(todos).where(eq(todos.id, id));
  if (!row) return c.json({ message: "Not found" }, 404);
  return c.json(row);
});
```

Wire it in `src/index.ts`:

```ts
import { Hono } from "hono";
import { todosRoute } from "./routes/todos";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));
app.route("/todos", todosRoute);

export default app;
```

## Testing

We use Bun's built-in test runner. Create `src/index.test.ts`:

```ts
import { expect, test } from "bun:test";
import app from "./index";

test("GET / returns Hello Hono!", async () => {
  const res = await app.request("/");
  expect(res.status).toBe(200);
  expect(await res.text()).toBe("Hello Hono!");
});
```

Add endpoint tests, e.g. for todos, in `src/routes/todos.test.ts`:

```ts
import { expect, test } from "bun:test";
import app from "../index";

test("POST /todos creates a todo", async () => {
  const res = await app.request("/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Write docs" }),
  });
  expect(res.status).toBe(201);
  const data = await res.json();
  expect(data.title).toBe("Write docs");
});
```

Run tests:

```sh
bun test
```

Tip: For DB-integration tests, run Docker Postgres first and target a separate test database (e.g., `hono_db_test`). Use migrations in a test setup step and truncate tables between tests.

## Recommended scripts

Update `package.json` with convenient scripts (examples):

```json
{
  "scripts": {
    "dev": "bun run --hot src/index.ts",
    "db:up": "docker compose up -d",
    "db:down": "docker compose down -v",
    "migrate:generate": "bun x drizzle-kit generate",
    "migrate": "bun x drizzle-kit migrate",
    "test": "bun test"
  }
}
```

## API examples

- GET /

  - 200 OK: Hello Hono!

- GET /todos

  - 200 OK: `[{ id, title, created_at }]`

- POST /todos

  - Body: `{ "title": "string" }`
  - 201 Created: `{ id, title, created_at }`

- GET /todos/:id
  - 200 OK: `{ id, title, created_at }`
  - 404 Not found

## Troubleshooting

- App runs but DB calls fail:

  - Ensure `docker compose ps` shows Postgres healthy.
  - Verify `DATABASE_URL` matches Docker credentials and is loaded (`dotenv/config`).
  - Run migrations after schema changes.

- Migrations generate no files:

  - Confirm `drizzle.config.ts` points to the correct `schema` path.
  - Ensure your schema exports at least one table.

- Tests are flaky with DB:
  - Use a dedicated test database and truncate tables between tests.
  - Mock DB for unit tests; reserve integration tests for CRUD flows.

## Deployment notes

- Build a small container image with Bun and your compiled TypeScript, or run directly with Bun in your hosting environment.
- Use a managed PostgreSQL (e.g., Neon, Supabase, RDS) and set `DATABASE_URL` accordingly.
- Run `drizzle-kit migrate` as part of your release pipeline.

## License

MIT — feel free to use this as a foundation for your own APIs.
