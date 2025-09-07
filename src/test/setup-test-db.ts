/** biome-ignore-all lint/suspicious/noConsole: Console is used for debugging */
/** biome-ignore-all lint/nursery/noUnnecessaryConditions: This is a test setup file */
import { randomUUID } from 'node:crypto';
import { join } from 'node:path';
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';

// biome-ignore lint/performance/noNamespaceImport: <No es eficiente en este caso>
import * as schema from '../db/schema';

export type TestDbContext = {
  pool: Pool;
  db: NodePgDatabase<typeof schema>;
  testDbName: string;
};

const adminDbUrl = process.env.ADMIN_DB_URL;

export async function createTestDb(): Promise<TestDbContext> {
  const testDbName = `test_db_${randomUUID().replace(/-/g, '')}`;
  const testDbUrl = `postgres://user:password@localhost:5432/${testDbName}`;

  const adminPool = new Pool({ connectionString: adminDbUrl });
  await adminPool.query(`CREATE DATABASE ${testDbName}`);
  await adminPool.end();

  const pool = new Pool({
    connectionString: testDbUrl,
    max: 10,
    idleTimeoutMillis: 30_000,
  });

  const db = drizzle(pool, {
    schema,
    casing: 'snake_case',
  });

  await migrate(db, {
    migrationsFolder: join(__dirname, '../db/drizzle'),
  });

  return { db, pool, testDbName };
}

export async function destroyTestDb({ pool, testDbName }: TestDbContext) {
  try {
    // Primero cerramos el pool de conexiones
    if (pool) {
      await pool.end();
    }

    // Creamos una conexión administrativa para eliminar la base de datos
    const adminPool = new Pool({ connectionString: adminDbUrl });

    try {
      // Terminamos todas las conexiones activas a la base de datos
      await adminPool.query(
        'SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = $1 AND pid <> pg_backend_pid()',
        [testDbName]
      );
      // Eliminamos la base de datos
      await adminPool.query(`DROP DATABASE IF EXISTS ${testDbName}`);
    } catch (error) {
      console.error(`Error al eliminar la base de datos ${testDbName}:`, error);
    } finally {
      await adminPool.end();
    }
  } catch (error) {
    console.error('Error al destruir la base de datos de prueba:', error);
  }
}
