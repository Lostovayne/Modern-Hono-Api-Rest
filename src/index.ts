import type { UUID } from 'node:crypto';
import { Hono } from 'hono';
import { getTodosByUserId } from './db/queries';

const StatusCode = {
  USER_ID_REQUIRED: 400,
  INTERNAL_SERVER_ERROR: 500,
  TODO_NOT_FOUND: 404,
  TODO_ALREADY_EXISTS: 409,
  TODO_CREATED: 201,
  SUCCESS: 200,
} as const;

const app = new Hono();

app.get('/', async (c) => {
  const userId = c.req.query('userId') as UUID;
  if (!userId) {
    return c.json(
      { error: 'User ID is required' },
      { status: StatusCode.USER_ID_REQUIRED }
    );
  }
  try {
    const todos = await getTodosByUserId(userId);
    return c.json(todos, { status: StatusCode.SUCCESS });
  } catch (error) {
    return c.json({ error }, { status: StatusCode.INTERNAL_SERVER_ERROR });
  }
});

export default app;
