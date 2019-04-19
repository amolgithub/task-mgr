import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tasks: any, criteria?: any): any {
    let filteredTasks = tasks;
    
    if(criteria == null) return filteredTasks;

    if(criteria.taskName != null){
      filteredTasks = filteredTasks.filter(task => task.taskName.indexOf(criteria.taskName) !== -1);
    }
      
    if(criteria.parentTask != null && criteria.parentTask !== ''){
      filteredTasks = filteredTasks.filter(task => (task.parentTask != null && task.parentTask.indexOf(criteria.parentTask) !== -1));
    }

    if(criteria.priorityFrom != null){
      filteredTasks = filteredTasks.filter(task => (task.priority >= criteria.priorityFrom));
    }

    if(criteria.priorityTo != null){
      filteredTasks = filteredTasks.filter(task => (task.priority <= criteria.priorityTo));
    }

    console.log(criteria.startDate);
    if(criteria.startDate != null) {
      filteredTasks = filteredTasks.filter(task => new Date(task.startDate) >= new Date(criteria.startDate));      
    }

    console.log(criteria.endDate);
    if(criteria.endDate != null) {
      filteredTasks = filteredTasks.filter(task => new Date(task.endDate) <= new Date(criteria.endDate));      
    }
    return filteredTasks;
  }

}
