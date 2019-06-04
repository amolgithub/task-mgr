import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Task } from '../task';

const baseUrl = "http://localhost/api/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

constructor(private http: HttpClient) { }

getTaskList():Observable<object> {  
  // return of<Task[]>([ {
  //         taskId: 1,
  //         taskName: 'Task1',
  //         startDate: '2019-03-12',
  //         endDate: '2019-03-17',
  //         priority: 1,
  //         status: 'I',
  //         parentId: null
  //       }]);
  console.log("getTaskList()" + baseUrl + 'task/all');
  
 return this.http.get<Task[]>(baseUrl + 'task/all',httpOptions);//.map(response => response.json());
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

