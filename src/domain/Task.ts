import { Status } from "./Status.enum.js";

export class Task {
    private readonly id: number;
    private readonly description: string;
    private readonly status: Status;
    private readonly createdAt: string;
    private readonly updatedAt: string;

    private constructor(id: number, description: string, status: Status, createdAt: string, updatedAt: string) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt
    }
    
    getId(): number {
        return this.id;
    }
    getDescription(): string {
        return this.description;
    }
    getStatus(): Status {
        return this.status;
    }
    getCreatedAt(): string {
        return this.createdAt;
    }
    getUpdatedAt(): string {
        return this.updatedAt;
    }

    public equals(task: Task): boolean {
        return this.id === task.getId()
    }
    
    private static checkDescription(description: string): string {
        if(description.trim().length === 0) throw new Error("Description cannot be empty");
        if(description.trim().length > 50) throw new Error("Description cannot be more than 50 characters");
        return description.trim();
    }


    static createTask(description: string): Task {
        description = Task.checkDescription(description);
        const now = new Date().toUTCString();
        return new Task(0,description, Status.TODO, now, now);
    } 

    static fromDB(id: number, description: string, status: Status, createdAt: string, updatedAt: string): Task {
        return new Task(id, description, status, createdAt, updatedAt);
    }

    changeDescription(description: string): Task {
        description = Task.checkDescription(description);
        const now = new Date().toUTCString();
        return new Task(this.id, description, this.status, this.createdAt, now);
    }

    toProgress(): Task {
        if(this.status !== Status.TODO) throw new Error("Task is not in todo status");
        const now = new Date().toUTCString();
        return new Task(this.id, this.description, Status.IN_PROGRESS, this.createdAt, now);
    }

    toDone(): Task {
        if(this.status !== Status.IN_PROGRESS) throw new Error("Task is not in in_progress status");
        const now = new Date().toUTCString();
        return new Task(this.id, this.description, Status.DONE, this.createdAt, now);
    }

}