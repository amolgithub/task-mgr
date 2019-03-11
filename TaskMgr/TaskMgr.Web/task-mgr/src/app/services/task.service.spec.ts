import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';
import { Task } from '../task';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [TaskService]
  }));

  const taskList: Task[] = [
    {
      taskId: 1,
      taskName: 'Task1',
      startDate: '12-Mar-2019',
      endDate: '17-Mar-2019',
      priority: 1,
      status: 'I',
      parentId: null
    },
    {
      taskId: 2,
      taskName: 'Task2',
      startDate: '10-Jan-2019',
      endDate: '10-Feb-2019',
      priority: 2,
      status: 'I',
      parentId: null
    },
    {
      taskId: 3,
      taskName: 'Task3',
      startDate: '12-Apr-2019',
      endDate: '20-Apr-2019',
      priority: 2,
      status: 'I',
      parentId: 1
    }
  ];
  
  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
});
