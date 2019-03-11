import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable, of } from 'rxjs';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

getTaskList():Observable<Task[]> {
 return;
}

getTask(): Observable<Task> {
  return;
}

addTask(newTask: Task): void {
  return;
}

updateTask(modifiedTask: Task): Observable<object> {
  return;
}

endTask(taskId: number): void {
  return;
}


}

