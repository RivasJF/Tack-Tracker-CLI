import { readJson } from "./read.js";
import { writeJson } from "./write.js";
import 'colors'

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

const DeleteTask = async(id: number) => {
    const datos: TasksData = await readJson();
    if(!datos.task[id]){
        console.log("not found".red);
        return;
    }
    datos.task.splice(id,1);

    // //ordenar id
    var ind = 0;
    for (const key of datos.task) {
        if (key.id!=ind) {
            key.id=ind
        }
        ind++;
    }
    await writeJson(datos);
    console.log("deleted".red);
}

export { DeleteTask }