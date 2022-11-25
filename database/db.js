import Database from "better-sqlite3";
const db = new Database("database/todos.db");

export default () => {
  const stmt = db.prepare(`
    CREATE TABLE IF NOT EXISTS "todos" (
      "id"	INTEGER NOT NULL,
      "todo"	TEXT NOT NULL,
      "completed"	TEXT NOT NULL,
      PRIMARY KEY("id" AUTOINCREMENT)
    );
  `);

  stmt.run();

  return db;
};
