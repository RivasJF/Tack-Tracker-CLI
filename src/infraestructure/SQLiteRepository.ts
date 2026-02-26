import { Task } from "../domain/Task.js";
import { TaskRepository } from "../repository/TaskRepository.js";
import { SQLiteConnection } from "./SQLiteConnection.js";

export class SQLiteRepository implements TaskRepository{
    findByStatus(status: string): Promise<Task[]> {
        const smt = this.db.prepare("SELECT * FROM tasks WHERE status = ?");
        const rows: any[] = smt.all(status);
        const tasks: Task[] = rows.map(row => Task.fromDB(row.id, row.description, row.status, row.createdAt, row.updatedAt));
        return Promise.resolve(tasks)
    }


    deleteById(id: string): Promise<void> {
        const smt = this.db.prepare( `DELETE FROM tasks WHERE id = ?`);
        smt.run(id);
        return Promise.resolve();
    }

    private db = new SQLiteConnection().getDB();

    save(task: Task): Promise<void> {
        if (task.getId() === 0) {
            const smt = this.db.prepare( `INSERT INTO tasks (description, status, createdAt, updatedAt) VALUES (?, ?, ?, ?)`);
            smt.run(task.getDescription(), task.getStatus(), task.getCreatedAt(), task.getUpdatedAt());
        } else {    
            const smt = this.db.prepare( `UPDATE tasks SET description = ?, status = ?, updatedAt = ? WHERE id = ?`);
            smt.run(task.getDescription(), task.getStatus(), task.getUpdatedAt(), task.getId())
        }
        return Promise.resolve();
    }

    findAll(): Promise<Task[]> {
        const rows: any[] = this.db.prepare("SELECT * FROM tasks").all();
        const tasks: Task[] = rows.map(row => Task.fromDB(row.id, row.description, row.status, row.createdAt, row.updatedAt));
        return Promise.resolve(tasks);
    }

    findById(id: string): Promise<Task> {
        const smt = this.db.prepare("SELECT * FROM tasks WHERE id = ?");
        const row: any = smt.get(id);
        if (!row) {
            return Promise.reject(new Error(`Task with id ${id} not found`));
        }
        return Promise.resolve(Task.fromDB(row.id, row.description, row.status, row.createdAt, row.updatedAt));
    }
}