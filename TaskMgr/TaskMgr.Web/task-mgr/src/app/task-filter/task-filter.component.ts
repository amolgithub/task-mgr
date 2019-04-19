import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent implements OnInit {

  @Output()
  public filterEvent = new EventEmitter();

  public filterForm = this.fb.group({
    taskName : [''],
    parentTask: [''],
    priorityFrom: [1],
    priorityTo: [10],
    startDate: [null],
    endDate: [null]
  });
  
  public filterGrid() {
    this.filterEvent.emit(this.filterForm.value);    
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
