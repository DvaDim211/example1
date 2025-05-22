import {Component, inject} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskComponent} from './new-task/new-task.component';
import {UserService} from '../shared/user.service';
import {TaskService} from '../shared/task.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  private userService = inject(UserService);
  private taskService = inject(TaskService);
  addMode = this.taskService.addMode;
  tasks = this.taskService.allTasks;
  users = this.userService.allUsers;
  selectUserId = this.userService.selectedUserId;
  selectedName = this.userService.selectedName;



  onAddTask(addMode: boolean) {
    this.taskService.setAddMode(addMode);
  }


}
