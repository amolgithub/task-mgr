import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../task';

const baseUrl = "http://localhost:50019/api/";
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

getTaskList():Observable<Task[]> {  
 return this.http.get<Task[]>(baseUrl + 'task/all');
}

getTask(taskId: number): Observable<Task> {
  return this.http.get<Task>(baseUrl + 'task/' + taskId);
}

addTask(newTask: Task): Observable<any> {
  let body = JSON.stringify(newTask);
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  return this.http.post(baseUrl + 'task/add',body, httpOptions);
}

updateTask(modifiedTask: Task): Observable<object> {
  return;
}

endTask(taskId: number): void {
  return;
}


}

