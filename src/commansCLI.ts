import { Command } from "commander";
import { SQLiteRepository } from "./infraestructure/SQLiteRepository.js";
import { TaskService } from "./service/TasksService.js";
import { Status } from "./domain/Status.enum.js";

const TaskRepository = new SQLiteRepository;
const ITaskService = new TaskService(TaskRepository)

const program = new Command()

program
    .version("2.0")
    .description("Software task manager CLI")

program
    .command('delete <id>')
    .alias('d')
    .description("delete Task for id")
    .action(async (id) => {
        ITaskService.deleteTask(id)
    })

program
    .command('edit <id>')
    .alias('e')
    .description("edit description Task for id")
    .action(async (id) => {
        ITaskService.updateTaskDescription(id)
    })

program
    .command('markIP <id>')
    .alias('mip')
    .description("Mark Task in-progress")
    .action(async (id) => {
        ITaskService.updateTaskStatus(id,Status.IN_PROGRESS)
    })

program
    .command('markDone <id>')
    .alias('md')
    .description("Mark Task done")
    .action(async (id) => {
        ITaskService.updateTaskStatus(id,Status.DONE);
    })

program
    .command('add')
    .alias('a')
    .description("Creat new task")
    .action(async () => {
       ITaskService.createTask()
    })

program
    .command('list')
    .alias('l')
    .description("list All Task")
    .action(async () => {
        ITaskService.getAllTasks()
    })

program
    .command('list-done')
    .alias('ld')
    .description("list task done")
    .action(async () => {
       ITaskService.getTasksByStatus(Status.DONE)
    })

program
    .command('list-todo')
    .alias('lt')
    .description("list task todo")
    .action(async () => {
        ITaskService.getTasksByStatus(Status.TODO)
    })

program
    .command('list-in-progress')
    .alias('lp')
    .description("list task in-progress")
    .action(async () => {
        ITaskService.getTasksByStatus(Status.IN_PROGRESS)
    })

export {program}

program.parse(process.argv)
