import inquirer from "inquirer";
import { readJson } from "./read.js";
import { writeJson } from "./write.js";

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

const CreateTask = async () => {
  const datos: TasksData = await readJson();

  const newTask: Partial<Task> = await inquirer.prompt([
    {
      type: "input",
      name: "description",
      message: "Description task?",
    },
  ]);
  newTask.id = 0;
  newTask.status = 'todo';
  newTask.createdAt = new Date().toUTCString();
  newTask.updatedAt = newTask.createdAt;

  datos.task.push(newTask as Task);

  //ordenar id
  var ind = 0;
  for (const key of datos.task) {
      if (key.id!=ind) {
          key.id=ind
      }
      ind++;
  }
  
  await writeJson(datos);
  console.log("Task created successfully".green);
};

export {CreateTask}
