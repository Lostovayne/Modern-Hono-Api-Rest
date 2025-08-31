# Hono API with Drizzle ORM and PostgreSQL

This project is a modern, high-performance REST API built with [Hono](https://hono.dev/), a lightweight and fast web framework, and [Drizzle ORM](https://orm.drizzle.team/) for type-safe database access to a PostgreSQL database. It includes a complete setup for local development and containerization with Docker.

## Features

- **🚀 Ultra-fast:** Built on Hono for exceptional performance.
- **🔒 Type-Safe:** End-to-end type safety with TypeScript and Drizzle ORM.
- **🐳 Dockerized:** Comes with a `docker-compose.yml` for easy setup of the PostgreSQL database.
- **🐘 PostgreSQL:** Uses PostgreSQL as the database.
- **🔥 Hot-Reload:** Live-reloading for a smooth development experience powered by Bun.
- **💅 Code Quality:** Includes [Biome](https://biomejs.dev/) for formatting and linting, and [Husky](https://typicode.github.io/husky/) for pre-commit hooks.

## Tech Stack

- **Framework:** [Hono](https://hono.dev/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Runtime:** [Bun](https://bun.sh/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Containerization:** [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- **Code Quality:** [Biome JS](https://biomejs.dev/), [Husky](https://typicode.github.io/husky/), [lint-staged](https://github.com/lint-staged/lint-staged)

## Project Structure

```
hono-drizzle/
├── src/
│   ├── db/
│   │   ├── db.ts           # Drizzle DB instance
│   │   └── schema.ts       # Database schema definitions
│   └── index.ts          # Application entry point and API routes
├── .gitignore
├── biome.jsonc           # Biome configuration
├── docker-compose.yml    # Docker Compose setup for PostgreSQL
├── drizzle.config.ts     # Drizzle ORM configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Prerequisites

Make sure you have the following installed on your system:

- [Bun](https://bun.sh/) (v1.0 or higher)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hono-drizzle.git
cd hono-drizzle
```

### 2. Install dependencies

```bash
bun install
```

### 3. Set up the database

Start the PostgreSQL database using Docker Compose:

```bash
docker-compose up -d
```

This will create a PostgreSQL container with the following configuration:
- **Host**: `localhost`
- **Port**: `5432`
- **Database**: `todos`
- **User**: `user`
- **Password**: `password`

You will also need to set the `DATABASE_URL` environment variable. You can create a `.env` file in the root of the project with the following content:

```
DATABASE_URL=postgresql://user:password@localhost:5432/todos
```

### 4. Run database migrations

Apply the database schema to your database:

```bash
bun run db:migrate
```

### 5. Run the application

To start the development server with hot-reloading:

```bash
bun run dev
```

The API will be available at `http://localhost:3000`.

## API Endpoints

### Base Endpoint

| Method | Endpoint | Description             |
| :----- | :------- | :---------------------- |
| `GET`  | `/`      | Basic greeting endpoint |

**Example response:**

```bash
curl http://localhost:3000/
# Response: Hello Hono!
```

## Database

The database schema is defined in `src/db/schema.ts` using Drizzle ORM.

### Schema

The project includes two tables: `users` and `todos`.

- **`users`**: Stores user information.
- **`todos`**: Stores todo items, with a foreign key relationship to the `users` table.

### Migrations

Database migrations are managed with `drizzle-kit`.

- **Generate a new migration:**

  ```bash
  bun run db:generate:migration
  ```

- **Apply migrations:**

  ```bash
  bun run db:migrate
  ```

- **Drizzle Studio:**

  Open a web-based GUI for your database:
  ```bash
  bun run db:studio
  ```

## Tooling

### Biome

This project uses [Biome](https://biomejs.dev/) for code formatting and linting. The configuration is in `biome.jsonc`.

- **Format all files:**
  ```bash
  bun run format
  ```
- **Lint all files:**
  ```bash
  bun run lint
  ```
- **Check all files (format and lint):**
  ```bash
  bun run check
  ```

### Husky and lint-staged

[Husky](https://typicode.github.io/husky/) is used to run scripts at different stages of the git process. A `pre-commit` hook is configured to run `lint-staged`, which in turn runs `bun format` and `bun lint` on staged files. This ensures that all committed code is formatted and linted correctly.

## Available Scripts

| Script                    | Description                                             |
| :------------------------ | :------------------------------------------------------ |
| `bun run dev`             | Starts the development server with hot-reloading.       |
| `bun run prepare`         | Installs Husky hooks.                                   |
| `bun run format`          | Formats the code using Biome.                           |
| `bun run lint`            | Lints the code using Biome.                             |
| `bun run check`           | Runs both the linter and formatter.                     |
| `bun run db:generate:migration` | Generates a new database migration file.                |
| `bun run db:migrate`      | Applies all pending migrations to the database.         |
| `bun run db:studio`       | Starts Drizzle Studio, a GUI for the database.          |

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the project.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.