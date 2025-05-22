import {Component, inject, input} from '@angular/core';

import { type Task } from '../../shared/task.model';
import {TaskService} from '../../shared/task.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private taskService = inject(TaskService);
  task = input.required<Task>();


  onCompleteTask() {
    this.taskService.removeTask(this.task().id);
    const selectedTask = this.task()
    if (selectedTask) {
      this.taskService.setSelectedTask(this.task());
    }
  }

}
