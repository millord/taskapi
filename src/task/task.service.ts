import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from 'task.model';
import * as uuid from 'uuid/v1';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    return this.tasks.push(task);
  }
}
