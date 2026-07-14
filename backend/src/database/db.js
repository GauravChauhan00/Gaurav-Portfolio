import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'fs/promises';
import path from 'path';
import { env } from '../config/env.js';

let database;

export async function getDatabase() {
  if (database) return database;

  await fs.mkdir(path.dirname(env.databaseFile), { recursive: true });

  database = await open({
    filename: env.databaseFile,
    driver: sqlite3.Database
  });

  await database.exec('PRAGMA foreign_keys = ON;');
  return database;
}

export async function closeDatabase() {
  if (database) {
    await database.close();
    database = null;
  }
}
