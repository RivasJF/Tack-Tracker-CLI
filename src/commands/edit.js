import inquirer from "inquirer";
import { readJson } from "./read.js"
import { writeJson } from "./write.js";
import 'colors'


const EditTask = async(id) => {
    const datos = await readJson()

    const newDesc = await inquirer.prompt([
        {
          type: "input",
          name: "desciption",
          message: "New Description task?",
        },
      ]);

    datos.task[id].desciption=newDesc.desciption
    datos.task[id].updrade = new Date().toUTCString();

    console.log((await writeJson(datos)).green)
}

const MarkTaskInProgress = async(id) => {
    const datos = await readJson()

    datos.task[id].status='in progress'
    datos.task[id].updrade = new Date().toUTCString();

    console.log((await writeJson(datos)).green)
}

const MarkTaskDone = async(id) => {
    const datos = await readJson()

    datos.task[id].status='done'
    datos.task[id].updrade = new Date().toUTCString();

    console.log((await writeJson(datos)).green)
}


export { EditTask , MarkTaskDone , MarkTaskInProgress}