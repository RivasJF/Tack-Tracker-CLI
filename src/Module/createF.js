#!/usr/bin/env node
//import './commansCLI.js'

//import {menu} from './Module/menu.js';
//import { readJson } from './Module/readfile.js';
import inquirer from "inquirer";

const main = async () => {
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
  console.log(res);
};

main();
