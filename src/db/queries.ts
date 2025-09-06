import type { UUID } from 'node:crypto';
import { password } from 'bun';
import { eq } from 'drizzle-orm';
import { db } from './db';
import { todosTable, usersTable } from './schema';

export type NewTodo = {
  userId: UUID;
  title: string;
  description?: string;
  completed?: boolean;
};

export const insertUser = async (email: string, passwordUser: string) => {
  const passwordHash = await password.hash(passwordUser);

  const [user] = await db
    .insert(usersTable)
    .values({
      email,
      passwordHash,
    })
    .returning();

  return user.id as UUID;
};

export const insertTodo = async (newTodo: NewTodo) => {
  const [createdTodo] = await db.insert(todosTable).values(newTodo).returning();
  return createdTodo;
};

export const getTodosByUserId = async (userId: UUID) => {
  const todos = await db
    .select()
    .from(todosTable)
    .where(eq(todosTable.userId, userId))
    .orderBy(todosTable.createdAt);
  return todos;
};
