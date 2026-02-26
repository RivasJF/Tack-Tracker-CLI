import { Task } from "../domain/Task.js";

export interface TaskRepository{
    save(task: Task): Promise<void>;
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    deleteById(id: string): Promise<void>;
    findByStatus(status: string): Promise<Task[]>;
}