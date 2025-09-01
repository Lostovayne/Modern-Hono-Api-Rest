import type { UUID } from 'node:crypto';
import { eq } from 'drizzle-orm';
import { db } from './db';
import { todosTable } from './schema';

export type NewTodo = {
  userId: UUID;
  title: string;
  description?: string;
  completed?: boolean;
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
