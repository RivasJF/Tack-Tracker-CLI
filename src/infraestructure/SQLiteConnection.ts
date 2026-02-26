import Database from 'better-sqlite3'
import { Database as SqliteType } from 'better-sqlite3';

export class SQLiteConnection {
    private readonly instance: SqliteType;

    constructor() {
        this.instance = new Database("database.sqlite", {
            verbose: console.log
        });

        this.instance.pragma('journal_mode = WAL');

        this.init(); 
    }

    private init(): void {
        this.instance.prepare(`
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                description TEXT NOT NULL,
                status TEXT NOT NULL,
                createdAt TEXT NOT NULL,
                updatedAt TEXT NOT NULL
            )
        `).run();
    }

    getDB(): SqliteType {
        return this.instance;
    }

    close(): void {
        this.instance.close();
    }
}