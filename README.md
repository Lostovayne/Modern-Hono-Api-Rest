# Hono API REST

Una API REST moderna y eficiente construida con [Hono](https://hono.dev/), un framework web ultrarrápido para JavaScript/TypeScript que funciona en cualquier runtime.

## 🚀 Características

- **⚡ Ultra rápido**: Construido con Hono, optimizado para rendimiento
- **🔧 TypeScript**: Desarrollo type-safe con soporte completo de TypeScript
- **🐳 Docker Ready**: Configuración Docker Compose incluida
- **🗃️ Base de datos**: PostgreSQL 17.5 Alpine configurado
- **🔄 Hot Reload**: Desarrollo con recarga automática usando Bun
- **📦 Runtime moderno**: Ejecutado con Bun para máximo rendimiento

## 🛠️ Stack Tecnológico

- **Framework**: [Hono](https://hono.dev/) v4.9.4
- **Runtime**: [Bun](https://bun.sh/)
- **Base de datos**: PostgreSQL 17.5 Alpine
- **Lenguaje**: TypeScript
- **Containerización**: Docker & Docker Compose

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Bun](https://bun.sh/) (v1.0 o superior)
- [Docker](https://www.docker.com/) y Docker Compose
- [Git](https://git-scm.com/)

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/Lostovayne/Hono-Api-Rest.git
cd Hono-Api-Rest
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

- **Host**: localhost
- **Puerto**: 5432
- **Base de datos**: todos
- **Usuario**: user
- **Contraseña**: password

### 4. Ejecutar la aplicación

Para desarrollo con hot reload:

```bash
bun run dev
```

La API estará disponible en `http://localhost:3000`

## 🔧 Scripts Disponibles

| Script        | Descripción                                          |
| ------------- | ---------------------------------------------------- |
| `bun run dev` | Inicia el servidor en modo desarrollo con hot reload |

## 📡 API Endpoints

### Endpoints Base

| Método | Endpoint | Descripción               |
| ------ | -------- | ------------------------- |
| `GET`  | `/`      | Endpoint de saludo básico |

### Ejemplo de respuesta

```bash
curl http://localhost:3000/
# Respuesta: Hello Hono!
```

## 🐳 Docker

### Ejecutar con Docker Compose

```bash
# Iniciar todos los servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

### Configuración de PostgreSQL

La base de datos PostgreSQL se configura automáticamente con:

```yaml
services:
  postgres:
    image: postgres:17.5-alpine
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: todos
```

## 🏗️ Estructura del Proyecto

```
hono-drizzle/
├── src/
│   └── index.ts          # Punto de entrada de la aplicación
├── docker-compose.yml    # Configuración de Docker Compose
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
├── bun.lock             # Lock file de Bun
└── README.md            # Documentación del proyecto
```

## 🔧 Configuración

### TypeScript

El proyecto está configurado con las siguientes opciones de TypeScript:

```json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "jsxImportSource": "hono/jsx"
  }
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ve el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Lostovayne**

- GitHub: [@Lostovayne](https://github.com/Lostovayne)

## 🙏 Agradecimientos

- [Hono](https://hono.dev/) - Por el increíble framework web
- [Bun](https://bun.sh/) - Por el runtime ultrarrápido
- [PostgreSQL](https://www.postgresql.org/) - Por la robusta base de datos

---

⭐ ¡Dale una estrella al proyecto si te ha sido útil!
