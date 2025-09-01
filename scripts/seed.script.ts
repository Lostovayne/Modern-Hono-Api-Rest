import { reset, seed } from 'drizzle-seed';
import { db, pool } from '../src/db/db';
import { todosTable, usersTable } from '../src/db/schema';

export const seedDb = async () => {
  await reset(db, { usersTable, todosTable });
  await seed(db, { usersTable, todosTable }).refine((funcs) => ({
    usersTable: {
      columns: {
        age: funcs.int({ minValue: 18, maxValue: 120 }),
      },
      count: 10,
      with: {
        todosTable: 10,
      },
    },
    todosTable: {
      columns: {
        title: funcs.valuesFromArray({
          values: [
            'Comprar leche',
            'Llevar el coche al taller',
            'Pagar las facturas',
            'Hacer ejercicio',
            'Leer un libro',
          ],
        }),
        description: funcs.valuesFromArray({
          values: [
            'Comprar leche en el supermercado local.',
            'Llevar el coche al taller para una revisión completa.',
            'Pagar las facturas de electricidad y agua antes del fin de mes.',
            'Hacer ejercicio en el gimnasio durante al menos 30 minutos.',
            'Leer un libro de ficción antes de dormir.',
          ],
        }),
      },
    },
  }));
};

seedDb()
  .then(() => {
    console.log('Seeding completed');
    return pool.end();
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    return pool.end();
  });
