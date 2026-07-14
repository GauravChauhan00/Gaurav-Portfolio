import app from './app.js';
import { env } from './config/env.js';
import { initializeDatabase } from './database/initDatabase.js';

async function startServer() {
  await initializeDatabase();

  app.listen(env.port, () => {
    console.log(`Portfolio backend running on http://localhost:${env.port}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start backend:', error);
  process.exit(1);
});
