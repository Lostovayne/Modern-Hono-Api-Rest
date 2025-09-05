import { randomUUID } from 'node:crypto';
import { join } from 'node:path';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import { todosTable, usersTable } from '../db/schema';

const adminDbUrl = process.env.ADMIN_DB_URL;

export async function createTestDb() {
  if (!adminDbUrl) {
    throw new Error('ADMIN_DB_URL is not defined in environment variables');
  }

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
    schema: { users: usersTable, todos: todosTable },
    casing: 'snake_case',
  });

  await migrate(db, { migrationsFolder: join(__dirname, '../db/migrations') });

  return { db, pool, testDbName };
}
