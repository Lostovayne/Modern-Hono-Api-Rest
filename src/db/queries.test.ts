import { describe, expect, it } from 'bun:test';
import { insertTodo, type NewTodo } from './queries';

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
