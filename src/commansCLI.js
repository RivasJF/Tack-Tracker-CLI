import { Command } from "commander";
import inquirer from "inquirer";
import { readJsonAll,readJsonInProgress,readJsonDone,readJsonTodo} from "./commands/read.js";

const program = new Command()

program
    .version(0.1)
    .description("Software task manager CLI")

program
    .command('list')
    .alias('l')
    .description("list task")
    .action(async () => {
        console.table( await readJsonAll())
    })

program
    .command('list-done')
    .alias('ld')
    .description("list task done")
    .action(async () => {
        console.table( await readJsonDone())
    })

program
    .command('list-todo')
    .alias('lt')
    .description("list task todo")
    .action(async () => {
        console.table( await readJsonTodo())
    })

program
    .command('list-in-progress')
    .alias('lp')
    .description("list task in-progress")
    .action(async () => {
        console.table( await readJsonInProgress())
    })

program
    .command('p')
    .action(async()=>{
        const res= await inquirer.prompt([
            {
                type:"input",
                name:'title',
                message:"Name task?"
            },{
                type:"input",
                name:'desc',
                message:"Description task?"
            }
            ])
        console.log("enterado: ")
        console.log(res)
    })

export {program}

program.parse(process.argv)
