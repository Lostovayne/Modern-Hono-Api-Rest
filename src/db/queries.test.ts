import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  mock,
} from 'bun:test';
import {
  createTestDb,
  destroyTestDb,
  type TestDbContext,
} from '../test/setup-test-db';
import { pool } from './db';
import {
  getTodosByUserId,
  insertTodo,
  insertUser,
  type NewTodo,
} from './queries';

let ctx: TestDbContext | undefined;

// Hook que se ejecuta una vez antes de todos los tests
beforeAll(() => {
  console.log('Iniciando suite de tests...');
});

// Hook que se ejecuta antes de cada test
beforeEach(async () => {
  try {
    ctx = await createTestDb();
    if (!ctx) {
      throw new Error('Failed to create test database');
    }
    const testDb = ctx.db;
    await mock.module('../db/db', () => ({
      db: testDb,
    }));
  } catch (error) {
    console.error('Error en beforeEach:', error);
    throw error;
  }
});

// Hook que se ejecuta después de cada test
afterEach(async () => {
  try {
    if (ctx) {
      await destroyTestDb(ctx);
      ctx = undefined;
    }
  } catch (error) {
    console.error('Error en afterEach:', error);
    // No lanzamos el error para evitar que falle el test por problemas de limpieza
  }
});

// Hook que se ejecuta una vez después de todos los tests
afterAll(async () => {
  console.log('Finalizando suite de tests...');
  // Aseguramos que todas las conexiones se cierren correctamente
  try {
    await pool.end();
    console.log('Conexiones de pool cerradas correctamente');
  } catch (error) {
    console.error('Error al cerrar el pool de conexiones:', error);
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

describe('getTodosByUserId', () => {
  it('should return todos for a given user id', async () => {
    const userId = await insertUser('test@test.com', 'password123');
    const newTodo = {
      userId,
      title: 'Test Todo new',
      description: 'This is a test todo',
      completed: false,
    } as NewTodo;

    const newTodo2 = {
      userId,
      title: 'Test 2 Todo new',
      description: 'This is a test todo 2',
      completed: false,
    } as NewTodo;

    await insertTodo(newTodo);
    await insertTodo(newTodo2);

    const todos = await getTodosByUserId(userId);
    expect(todos).toBeDefined();
    expect(Array.isArray(todos)).toBe(true);
    expect(todos.length).toBe(2);
    expect(todos[0].title).toBe(newTodo.title);
    expect(todos[1].title).toBe(newTodo2.title);
  });
});
