import { getDatabase } from '../database/db.js';

export async function createInquiry({ name, email, subject, message }) {
  const db = await getDatabase();
  const result = await db.run(
    `INSERT INTO inquiries (name, email, subject, message)
     VALUES (?, ?, ?, ?)`,
    [name.trim(), email.trim().toLowerCase(), subject.trim(), message.trim()]
  );

  return db.get('SELECT * FROM inquiries WHERE id = ?', result.lastID);
}

export async function getLatestInquiries(limit = 100) {
  const db = await getDatabase();
  return db.all(
    `SELECT id, name, email, subject, message, created_at
     FROM inquiries
     ORDER BY created_at DESC
     LIMIT ?`,
    [limit]
  );
}
