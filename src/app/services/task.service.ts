import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
  filterTasks(): Task[] {
    let filtered = TASKS.filter((task) => task.reminder === true);
    return filtered;
  }
}
