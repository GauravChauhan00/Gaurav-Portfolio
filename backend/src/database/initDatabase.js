import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDatabase } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendRoot = path.resolve(__dirname, '../../');
const schemaPath = path.resolve(backendRoot, 'database/schema.sql');

export async function initializeDatabase() {
  const db = await getDatabase();
  const schema = await fs.readFile(schemaPath, 'utf-8');
  await db.exec(schema);
  return db;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  initializeDatabase()
    .then(() => {
      console.log('SQLite database initialized successfully.');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Database initialization failed:', error);
      process.exit(1);
    });
}
