import inquirer from "inquirer";
import { readJson } from "./read.js";
import { writeJson } from "./write.js";

const CreateTask = async () => {
  const datos = await readJson()

  const newTask = await inquirer.prompt([
    {
      type: "input",
      name: "desciption",
      message: "Description task?",
    },
  ]);
  newTask.id = 0;
  newTask.status='todo'
  newTask.createdAt = new Date().toUTCString();
  newTask.updrade = newTask.createdAt;

  datos.task.push(newTask)

  //ordenar id
  var ind = 0;
  for (const key of datos.task) {
      if (key.id!=ind) {
          key.id=ind
      }
      ind++;
  }
  
  console.log((await writeJson(datos)).green)
};

export {CreateTask}
