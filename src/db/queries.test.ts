import { describe, expect, it, mock } from 'bun:test';
import { afterEach, beforeEach } from 'node:test';
import {
  createTestDb,
  destroyTestDb,
  type TestDbContext,
} from '../test/setup-test-db';
import { insertTodo, type NewTodo } from './queries';

let ctx: TestDbContext;

beforeEach(async () => {
  ctx = await createTestDb();
  await mock.module('../db/db', () => ({
    db: ctx.db,
  }));
});

afterEach(async () => {
  await destroyTestDb(ctx);
});

describe('Insert Todo', () => {
  it('should insert a new todo', async () => {
    const newTodo = {
      userId: 'd049e186-b9e4-48e8-4966-bf777df7727c',
      title: 'Test Todo new',
      description: 'This is a test todo',
      completed: false,
    } as NewTodo;

    const todo = await insertTodo(newTodo);

    expect(todo).toHaveProperty('id');

    expect(todo.userId).toBe(newTodo.userId);
  });
});
