import { afterEach, beforeEach, describe, expect, it, mock } from 'bun:test';
import {
  createTestDb,
  destroyTestDb,
  type TestDbContext,
} from '../test/setup-test-db';
import { insertTodo, insertUser, type NewTodo } from './queries';

let ctx: TestDbContext | undefined;

beforeEach(async () => {
  ctx = await createTestDb();
  if (!ctx) {
    throw new Error('Failed to create test database');
  }
  const testDb = ctx.db;
  await mock.module('../db/db', () => ({
    db: testDb,
  }));
});

afterEach(async () => {
  if (ctx) {
    await destroyTestDb(ctx);
    ctx = undefined;
  }
});

describe('Insert Todo', () => {
  it('should insert a new todo', async () => {
    const userId = await insertUser('test@test.com', 'password123');

    const newTodo = {
      userId,
      title: 'Test Todo new',
      description: 'This is a test todo',
      completed: false,
    } as NewTodo;

    const todo = await insertTodo(newTodo);

    expect(todo).toHaveProperty('id');
    expect(todo.userId).toBe(newTodo.userId);
  });
});
