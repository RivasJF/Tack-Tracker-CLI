import { Command } from "commander";
import { readJsonAll,readJsonInProgress,readJsonDone,readJsonTodo} from "./commands/read.js";
import { CreateTask } from "./commands/add.js";
import { DeleteTask } from "./commands/delete.js";
import { EditTask, MarkTaskDone, MarkTaskInProgress } from "./commands/edit.js";

const program = new Command()

program
    .version(0.1)
    .description("Software task manager CLI")

program
    .command('delete <id>')
    .description("delete Task for id")
    .action(async (id) => {
        await DeleteTask(id)
    })

program
    .command('edit <id>')
    .description("edit task for id")
    .action(async (id) => {
        await EditTask(id)
    })

program
    .command('markIP <id>')
    .description("Mark Task in-progress")
    .action(async (id) => {
        await MarkTaskInProgress(id)
    })

program
    .command('markDone <id>')
    .description("Mark Task done")
    .action(async (id) => {
        await MarkTaskDone(id)
    })

program
    .command('add')
    .alias('a')
    .description("Creat new task")
    .action(async () => {
        await CreateTask()
    })

program
    .command('list')
    .alias('l')
    .description("list All Task")
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

export {program}

program.parse(process.argv)
