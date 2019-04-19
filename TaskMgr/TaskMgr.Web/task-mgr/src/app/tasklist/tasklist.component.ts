import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  taskSource: any;
  taskList: any;
  filter: any;
  criteria: any;
  
  constructor() {     
   this.taskList = [
      {
        taskId: 1,
        taskName: 'Task1',
        startDate: '2019-03-12',
        endDate: '2019-03-17',
        priority: 1,
        status: 'I',
        parentTask: null
      },
      {
        taskId: 2,
        taskName: 'Task2',
        startDate: '2019-01-10',
        endDate: '2019-02-10',
        priority: 2,
        status: 'I',
        parentTask: null
      },
      {
        taskId: 3,
        taskName: 'Task3',
        startDate: '2019-04-12',
        endDate: '2019-04-20',
        priority: 2,
        status: 'I',
        parentTask: "Task1"
      }      
    ];

    this.taskSource = this.taskList;
  }

  filterGrid(filter) {
    this.taskList = this.taskSource;
    console.log(filter);    
    if(filter.taskName != null) {
      this.taskList = this.taskSource.filter((task) => task.taskName.indexOf(filter.taskName) > -1);
      //console.log('Searching on name');
    }
   
    if(filter.parentTask != null) {
      this.taskList = this.taskList.filter((task) => task.parentTask && task.parentTask.indexOf(filter.parentTask) > -1);
      //console.log('Searching on parent');
    }
      
   /* if(filter.priorityFrom != null) {
      this.taskList = this.taskList.filter(task => task.priority >= filter.priorityFrom);
      console.log('From' + filter.priorityFrom);
    }
    console.log(this.taskList);

    if(filter.priorityTo != null) {
      this.taskList = this.taskList.filter(task => task.priority <= filter.priorityTo);
      console.log('To' + filter.priorityTo);
    }

    if(filter.startDate != null) {
      this.taskList = this.taskList.filter(task => new Date(task.startDate) >= new Date(filter.startDate));
      console.log(filter.startDate);
    }

    if(filter.endDate != null) {
      this.taskList = this.taskList.filter(task => new Date(task.endDate) >= new Date(filter.endDate));
      console.log(filter.endDate);
    }*/
    console.log(this.taskList);
  }

  ngOnInit() {
  }

}
