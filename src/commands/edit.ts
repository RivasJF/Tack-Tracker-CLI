import inquirer from "inquirer";
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

const EditTask = async(id: number) => {
    const datos: TasksData = await readJson();

    const newDesc = await inquirer.prompt([
        {
          type: "input",
          name: "description",
          message: "New Description task?",
        },
      ]);

    datos.task[id].description = newDesc.description;
    datos.task[id].updatedAt = new Date().toUTCString();

    await writeJson(datos);
    console.log("Task edited successfully".green);
}

const MarkTaskInProgress = async(id: number) => {
    const datos: TasksData = await readJson();

    datos.task[id].status = 'in_progress';
    datos.task[id].updatedAt = new Date().toUTCString();

    await writeJson(datos);
    console.log("Task marked as in progress".green);
}

const MarkTaskDone = async(id: number) => {
    const datos: TasksData = await readJson();

    datos.task[id].status = 'done';
    datos.task[id].updatedAt = new Date().toUTCString();

    await writeJson(datos);
    console.log("Task marked as done".green);
}


export { EditTask , MarkTaskDone , MarkTaskInProgress}