import Pool from 'pg';

export const pool = new Pool.Pool({
  database: 'backend-test-first',
  user: 'postgres',
  password: 'Rumahku10',
  host: 'localhost',
  port: 5432,
});
