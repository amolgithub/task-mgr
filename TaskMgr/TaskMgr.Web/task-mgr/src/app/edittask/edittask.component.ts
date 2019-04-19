import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http/src/backend';

const serviceUrl = "http://localhost:50019/task/add";

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})

export class EdittaskComponent implements OnInit {
  
  taskForm = this.fb.group({
    taskName: [''],
    priority: ['1'],
    parentId: ['0'],
    startDate: [''],
    endDate: ['']
  });
  constructor(private taskService: TaskService, private fb: FormBuilder) { }

  submitTask() {    
    var newTask = this.taskForm.value;
    this.taskService.addTask(newTask).subscribe(data => console.log(data));    
    console.log(newTask);
  }

  reset() {
    this.taskForm.reset();
  }
  ngOnInit() {
  }

}
