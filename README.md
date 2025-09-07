<div align="center">

# 🚀 Hono API with Drizzle ORM and PostgreSQL

<p align="center">
  <img src="https://img.shields.io/badge/Hono-4.9.4-blue?style=for-the-badge&logo=hono" alt="Hono" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-0.44.4-orange?style=for-the-badge&logo=drizzle" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/PostgreSQL-17.5-blue?style=for-the-badge&logo=postgresql" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/TypeScript-Latest-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Bun-Latest-black?style=for-the-badge&logo=bun" alt="Bun" />
</p>

<p align="center">
  Una API REST moderna y de alto rendimiento construida con <a href="https://hono.dev/">Hono</a>, un framework web ligero y rápido, y <a href="https://orm.drizzle.team/">Drizzle ORM</a> para acceso a base de datos PostgreSQL con seguridad de tipos. Incluye una configuración completa para desarrollo local y contenerización con Docker.
</p>

</div>

## ✨ Características

<div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">

<div class="feature-card" style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #4285f4;">
  <h3>🚀 Ultra-rápido</h3>
  <p>Construido con Hono para un rendimiento excepcional en aplicaciones web.</p>
</div>

<div class="feature-card" style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #34a853;">
  <h3>🔒 Seguridad de tipos</h3>
  <p>Seguridad de tipos de extremo a extremo con TypeScript y Drizzle ORM.</p>
</div>

<div class="feature-card" style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #fbbc05;">
  <h3>🐳 Dockerizado</h3>
  <p>Incluye <code>docker-compose.yml</code> para configuración fácil de PostgreSQL.</p>
</div>

<div class="feature-card" style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #ea4335;">
  <h3>🐘 PostgreSQL</h3>
  <p>Utiliza PostgreSQL como base de datos principal.</p>
</div>

<div class="feature-card" style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #673ab7;">
  <h3>🔥 Hot-Reload</h3>
  <p>Recarga en vivo para una experiencia de desarrollo fluida con Bun.</p>
</div>

<div class="feature-card" style="padding: 1rem; border-radius: 8px; background-color: #f8f9fa; border-left: 4px solid #ff9800;">
  <h3>💅 Calidad de código</h3>
  <p>Incluye <a href="https://biomejs.dev/">Biome</a> para formateo y linting, y <a href="https://typicode.github.io/husky/">Husky</a> para hooks pre-commit.</p>
</div>

</div>

## 🛠️ Stack Tecnológico

<div class="tech-stack" style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">

<div class="tech-item" style="text-align: center; width: 120px;">
  <img src="https://raw.githubusercontent.com/honojs/hono/main/docs/images/hono-logo.png" alt="Hono" width="60" height="60" />
  <p><a href="https://hono.dev/">Hono</a></p>
</div>

<div class="tech-item" style="text-align: center; width: 120px;">
  <img src="https://avatars.githubusercontent.com/u/108468352?s=200&v=4" alt="Drizzle ORM" width="60" height="60" />
  <p><a href="https://orm.drizzle.team/">Drizzle ORM</a></p>
</div>

<div class="tech-item" style="text-align: center; width: 120px;">
  <img src="https://wiki.postgresql.org/images/3/30/PostgreSQL_logo.3colors.120x120.png" alt="PostgreSQL" width="60" height="60" />
  <p><a href="https://www.postgresql.org/">PostgreSQL</a></p>
</div>

<div class="tech-item" style="text-align: center; width: 120px;">
  <img src="https://avatars.githubusercontent.com/u/99780871?s=200&v=4" alt="Bun" width="60" height="60" />
  <p><a href="https://bun.sh/">Bun</a></p>
</div>

<div class="tech-item" style="text-align: center; width: 120px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" width="60" height="60" />
  <p><a href="https://www.typescriptlang.org/">TypeScript</a></p>
</div>

<div class="tech-item" style="text-align: center; width: 120px;">
  <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="Docker" width="60" height="60" />
  <p><a href="https://www.docker.com/">Docker</a></p>
</div>

<div class="tech-item" style="text-align: center; width: 120px;">
  <img src="https://avatars.githubusercontent.com/u/103283236?s=200&v=4" alt="Biome" width="60" height="60" />
  <p><a href="https://biomejs.dev/">Biome</a></p>
</div>

</div>

## 📁 Estructura del Proyecto

<div class="project-structure" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; font-family: 'Courier New', monospace;">

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
│       └── setup-test-db.ts # Configuración de BD para tests
├── scripts/
│   └── seed.script.ts      # Script para poblar la BD
├── .github/                # Configuración de GitHub
├── .husky/                 # Hooks de Git
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

<div class="prerequisites" style="background-color: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #4285f4;">

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

<div class="getting-started" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px;">

### 1. Clonar el repositorio

<div class="code-block" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">

```bash
git clone https://github.com/your-username/hono-drizzle.git
cd hono-drizzle
```

</div>

### 2. Instalar dependencias

<div class="code-block" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">

```bash
bun install
```

</div>

### 3. Configurar la base de datos

Inicia la base de datos PostgreSQL usando Docker Compose:

<div class="code-block" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">

```bash
docker-compose up -d
```

</div>

Esto creará un contenedor PostgreSQL con la siguiente configuración:

<div class="db-config" style="display: grid; grid-template-columns: auto 1fr; gap: 0.5rem; margin-bottom: 1rem;">
  <div style="font-weight: bold;">Host:</div>
  <div><code>localhost</code></div>
  <div style="font-weight: bold;">Puerto:</div>
  <div><code>5432</code></div>
  <div style="font-weight: bold;">Base de datos:</div>
  <div><code>todos</code></div>
  <div style="font-weight: bold;">Usuario:</div>
  <div><code>user</code></div>
  <div style="font-weight: bold;">Contraseña:</div>
  <div><code>password</code></div>
</div>

También necesitarás configurar la variable de entorno `DATABASE_URL`. Puedes crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

<div class="code-block" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">

```
DATABASE_URL=postgresql://user:password@localhost:5432/todos
```

</div>

### 4. Ejecutar migraciones de la base de datos

Aplica el esquema de la base de datos:

<div class="code-block" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">

```bash
bun run db:migrate
```

</div>

### 5. Ejecutar la aplicación

Para iniciar el servidor de desarrollo con recarga en caliente:

<div class="code-block" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">

```bash
bun run dev
```

</div>

</div>

La API estará disponible en `http://localhost:3000`.

</div>

## 🚀 API Endpoints

<div class="api-endpoints" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px;">

### Usuarios

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/users` | Obtiene todos los usuarios |
| `GET` | `/users/:id` | Obtiene un usuario por ID |
| `POST` | `/users` | Crea un nuevo usuario |
| `PUT` | `/users/:id` | Actualiza un usuario existente |
| `DELETE` | `/users/:id` | Elimina un usuario |

### Tareas

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/todos` | Obtiene todas las tareas |
| `GET` | `/todos/:id` | Obtiene una tarea por ID |
| `POST` | `/todos` | Crea una nueva tarea |
| `PUT` | `/todos/:id` | Actualiza una tarea existente |
| `DELETE` | `/todos/:id` | Elimina una tarea |

</div>

## 🤝 Contribuir

<div class="contributing" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 4px solid #34a853;">

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'feat: añadir nueva característica'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

</div>

## 📄 Licencia

<div class="license" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 4px solid #fbbc05;">

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

</div>

---

<div align="center">
Hecho con ❤️ usando <a href="https://hono.dev/">Hono</a> y <a href="https://orm.drizzle.team/">Drizzle ORM</a>
</div>

### Ejemplo de Uso

<div class="example" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-family: 'Courier New', monospace;">

```bash
# Obtener todos los usuarios
curl -X GET http://localhost:3000/api/users

# Crear un nuevo usuario
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Juan Pérez","email":"juan@example.com"}'

# Obtener todas las tareas
curl -X GET http://localhost:3000/api/todos
```

</div>

### Ejemplo de Respuesta

<div class="response" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px;">

```json
// Respuesta al obtener todos los usuarios
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "usuario@ejemplo.com",
    "name": "Juan Pérez",
    "createdAt": "2023-04-01T12:00:00Z",
    "updatedAt": "2023-04-01T12:00:00Z"
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "email": "otro@ejemplo.com",
    "name": "Ana García",
    "createdAt": "2023-04-02T10:30:00Z",
    "updatedAt": "2023-04-02T10:30:00Z"
  }
]
```

</div>

## 🧪 Desarrollo y Testing

<div class="development" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 4px solid #673ab7;">

Este proyecto incluye herramientas para mantener la calidad del código y facilitar el desarrollo:

- **Tests automatizados**: Ejecuta los tests con `bun test`
- **Pre-commit hooks**: Configurados con Husky para verificar el formato y linting antes de cada commit
- **Drizzle Studio**: Interfaz visual para gestionar la base de datos con `bun run db:studio`
- **Seed script**: Pobla la base de datos con datos de ejemplo usando `bun run db:seed`

### Ejecutando los Tests

Para ejecutar los tests unitarios, utiliza el siguiente comando:

```bash
bun run test
```

</div>

### Ejemplo de Respuesta

<div class="response-example" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-family: 'Courier New', monospace;">

```bash
curl http://localhost:3000/
# Response: Hello Hono!
```

</div>

## 💾 Base de Datos

<div class="database" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px;">

El esquema de la base de datos está definido en `src/db/schema.ts` usando Drizzle ORM.

### Esquema

<div class="schema" style="background-color: #ffffff; padding: 1rem; border-radius: 8px; margin: 1rem 0; border: 1px solid #e0e0e0;">

El proyecto incluye dos tablas: `users` y `todos`.

<div class="table-card" style="background-color: #f0f8ff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border-left: 4px solid #4285f4;">
  <h4>📋 Tabla: users</h4>
  <p>Almacena información de usuarios.</p>
  <ul>
    <li><strong>id</strong>: UUID (clave primaria)</li>
    <li><strong>email</strong>: VARCHAR(256) (único, no nulo)</li>
    <li><strong>passwordHash</strong>: VARCHAR(500) (no nulo)</li>
    <li><strong>age</strong>: INTEGER (con restricciones de 0-120)</li>
    <li><strong>createdAt</strong>: TIMESTAMP</li>
    <li><strong>updatedAt</strong>: TIMESTAMP</li>
  </ul>
</div>

<div class="table-card" style="background-color: #f0fff0; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border-left: 4px solid #34a853;">
  <h4>📝 Tabla: todos</h4>
  <p>Almacena elementos de tareas, con una relación de clave foránea a la tabla <code>users</code>.</p>
  <ul>
    <li><strong>id</strong>: UUID (clave primaria)</li>
    <li><strong>userId</strong>: UUID (clave foránea a users.id)</li>
    <li><strong>title</strong>: VARCHAR(500) (no nulo)</li>
    <li><strong>description</strong>: VARCHAR(1000)</li>
    <li><strong>completed</strong>: BOOLEAN (no nulo, por defecto false)</li>
    <li><strong>createdAt</strong>: TIMESTAMP</li>
    <li><strong>updatedAt</strong>: TIMESTAMP</li>
  </ul>
</div>

</div>

### Migraciones

<div class="migrations" style="background-color: #ffffff; padding: 1rem; border-radius: 8px; margin: 1rem 0; border: 1px solid #e0e0e0;">

Las migraciones de la base de datos se gestionan con `drizzle-kit`.

<div class="code-block" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">

```bash
# Generar una nueva migración
bun run db:generate:migration
```

</div>

<div class="code-block" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">

```bash
# Aplicar migraciones
bun run db:migrate
```

</div>

<div class="code-block" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">

```bash
# Abrir Drizzle Studio (GUI web para tu base de datos)
bun run db:studio
```

</div>

</div>

</div>

## 🛠️ Herramientas

<div class="tooling" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px;">

### 🧹 Biome

<div class="biome" style="background-color: #ffffff; padding: 1rem; border-radius: 8px; margin: 1rem 0; border: 1px solid #e0e0e0;">

Este proyecto utiliza [Biome](https://biomejs.dev/) para el formateo y linting de código. La configuración se encuentra en `biome.jsonc`.

<div class="code-block" style="background-color: #282c34; color: #abb2bf; padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">

```bash
# Formatear código
bun run format

# Verificar linting
bun run lint

# Verificar tipos y linting
bun run check
```

</div>

</div>

</div>

<hr style="margin: 2rem 0;">

<div class="footer" style="text-align: center; padding: 1rem; color: #666;">

<p>Hecho con ❤️ usando <a href="https://hono.dev/" target="_blank">Hono</a> y <a href="https://orm.drizzle.team/" target="_blank">Drizzle ORM</a></p>

<p>© 2023-2024 Hono-Drizzle Project</p>

</div>

## 📋 Comandos Disponibles

<div class="commands" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px;">

| Comando                   | Descripción                                            |
| :------------------------ | :----------------------------------------------------- |
| `bun run dev`             | Inicia el servidor de desarrollo con recarga en vivo   |
| `bun run test`            | Ejecuta los tests unitarios                            |
| `bun run prepare`         | Instala los hooks de Husky                             |
| `bun run format`          | Formatea el código usando Biome                        |
| `bun run lint`            | Verifica el código usando Biome                        |
| `bun run check`           | Ejecuta tanto el linter como el formateador            |
| `bun run db:generate:migration` | Genera un nuevo archivo de migración de base de datos |
| `bun run db:migrate`      | Aplica todas las migraciones pendientes               |
| `bun run db:studio`       | Inicia Drizzle Studio, una GUI para la base de datos   |
| `bun run db:seed`         | Ejecuta el script de semillas para poblar la BD        |

</div>

## 🤝 Contribuir

<div class="contributing" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px;">

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/CaracteristicaIncreible`)
3. Haz commit de tus cambios (`git commit -m 'Añadir CaracteristicaIncreible'`)
4. Haz push a la rama (`git push origin feature/CaracteristicaIncreible`)
5. Abre un Pull Request

</div>

## 📄 Licencia

<div class="license" style="background-color: #f8f9fa; padding: 1rem; border-radius: 8px;">

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

</div>