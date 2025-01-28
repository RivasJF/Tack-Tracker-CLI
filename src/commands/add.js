import inquirer from "inquirer";
//import { readJson } from "./read.js";

const main = async () => {
  var datos = {task:[]}
  const res = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Name task?",
    },
    {
      type: "input",
      name: "desc",
      message: "Description task?",
    },
  ]);
  console.log("enterado: ");
  res.id = 0;
  res.createAt = new Date().toUTCString();
  res.updrade = 0;

  datos.task.push(res)
  console.log(datos);
};

main();
