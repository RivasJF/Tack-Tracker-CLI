import fs_promises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import 'colors'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathJson = path.join(__dirname, '..','..', 'Data', 'index.json');

interface Task {
    id: number;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
    createdAt: string;
    updatedAt: string;
}

interface TasksData {
    task: Task[];
}

const readJson = async (): Promise<TasksData> => {
    try {
        console.log(pathJson)
        const res = JSON.parse(await fs_promises.readFile(pathJson, 'utf-8'));
        return res;
    } catch (err) {
        console.log("not found".red);
        return { task: [] };
    }
}

const readJsonAll = async (): Promise<Task[]> => {
    try {
        const res = await readJson();
        const table = res.task.map((task: Task) => ({
            id: task.id,
            description: task.description,
            status: task.status,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
        }));
        return table;
    } catch (err) {
        console.log("not found".red);
        return [];
    }
}

const readJsonDone = async (): Promise<Task[]> => {
    try {
        const res = await readJsonAll();
        const table = res.filter((task: Task) => task.status == 'done');
        return table;
    } catch (err) {
        console.log("not found".red);
        return [];
    }
}

const readJsonTodo = async (): Promise<Task[]> => {
    try {
        const res = await readJsonAll();
        const table = res.filter((task: Task) => task.status == 'todo');
        return table;
    } catch (err) {
        console.log("not found".red);
        return [];
    }
}

const readJsonInProgress = async (): Promise<Task[]> => {
    try {
        const res = await readJsonAll();
        const table = res.filter((task: Task) => task.status == 'in_progress');
        return table;
    } catch (err) {
        console.log("not found".red);
        return [];
    }
}

export { readJson, readJsonAll, readJsonInProgress, readJsonDone, readJsonTodo }