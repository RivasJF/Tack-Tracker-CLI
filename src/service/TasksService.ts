import inquirer from "inquirer";
import { Task } from "../domain/Task.js";
import { TaskRepository } from "../repository/TaskRepository.js";
import { Status } from "../domain/Status.enum.js";
import 'colors'

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async createTask(): Promise<void> {
    const newTask = await inquirer.prompt([
      {
        type: "input",
        name: "description",
        message: "Description task?",
      },
    ]);
    const task = Task.createTask(newTask.description);
    await this.taskRepository.save(task);
    console.log("Task created successfully".green);
  }

  async deleteTask(id: string): Promise<void> {
    const task: Task = await this.taskRepository.findById(id);
    await this.taskRepository.deleteById(id);
    console.log("Task deleted successfully".green);
  }

  async getAllTasks(): Promise<void> {
    const tasks: Task[] = await this.taskRepository.findAll();
    console.table(tasks);
  }

  async getTaskById(id: string): Promise<void> {
    const task: Task = await  this.taskRepository.findById(id);
    console.table(task);
  }

  async updateTaskStatus(id: string, status: Status): Promise<void> {
    const task = await this.taskRepository.findById(id);
    let taskUpdated: Task;
    if(status === 'in_progress') {taskUpdated = task.toProgress(); await this.taskRepository.save(taskUpdated);};
    if(status === 'done') {taskUpdated = task.toDone(); await this.taskRepository.save(taskUpdated);};
    console.log("Task updated successfully".green);
  }

  async updateTaskDescription(id: string,): Promise<void> {
    const description:{description:Status} = await inquirer.prompt([
        {
          type: "input",
          name: "description",
          message: "New Description task?",
        },
      ]);
    const task = await this.taskRepository.findById(id);
    const taskUpdated = task.changeDescription(description.description);
    await this.taskRepository.save(taskUpdated);
    console.log("Task updated successfully".green);
  }

  async getTasksByStatus(status: Status): Promise<void> {
    const tasks: Task[] = await this.taskRepository.findByStatus(status);
    console.table(tasks);
  }
}
