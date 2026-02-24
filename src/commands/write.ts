import fs_promises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import 'colors'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathJson = path.join(__dirname, '..', 'Data', 'index.json');

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

const writeJson = async (datas: TasksData): Promise<string> => {
    try {
        await fs_promises.writeFile(pathJson, JSON.stringify(datas, null, 2));
        return "escrito";
    } catch (err) {
        if (err instanceof Error) {
            return err.message;
        }
        return "An unknown error occurred";
    }
}

export { writeJson }
