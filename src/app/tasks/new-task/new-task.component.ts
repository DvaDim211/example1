import {Component, inject, signal} from '@angular/core';
import {TaskService} from '../../shared/task.service';
import {FormsModule} from '@angular/forms';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  private taskService = inject(TaskService);
  private userService = inject(UserService);
  userId = this.userService.selectedUserId;
  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');
  enteredDueDate = signal<string>('');
  id = `t${this.taskService.allTasks().length + 1}`



  onClickCancel () {
    this.taskService.setAddMode(false);
  }

  onSubmit() {
    this.taskService.addTask({
      id: this.id,
      userId: this.userId() ?? '',
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate(),
    })
    this.taskService.setAddMode(false);
  }

}
