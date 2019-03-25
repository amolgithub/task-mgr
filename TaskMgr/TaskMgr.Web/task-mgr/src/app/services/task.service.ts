import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

getTaskList():Observable<Task[]> {  
 return this.http.get<Task[]>('http://localhost/task/all');
}

getTask(taskId: number): Observable<Task> {
  return this.http.get<Task>('http://localhost/task/' + taskId);
}

addTask(newTask: Task) {
  return this.http.post('http://localhost/task/add', newTask);
}

updateTask(modifiedTask: Task): Observable<object> {
  return;
}

endTask(taskId: number): void {
  return;
}


}

