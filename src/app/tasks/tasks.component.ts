import {Component, computed, input} from '@angular/core';
import {DummyUsers} from '../shared/dummy-users';
import {TaskComponent} from './task/task.component';
import { DummyTasks } from '../shared/dummy-tasks';
import {NewTaskComponent} from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  addMode = false;
  tasks = DummyTasks;
  users = DummyUsers;
  selectUser = input.required<string>();
  selectedName = computed(() => {
    const user = this.users.find(user => user.id === this.selectUser());
    return user?.name
  })
  selectedId = computed(() => {
    const user = this.users.find(user => user.id === this.selectUser());
    return user?.id
  })

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask() {
    this.addMode = true;
  }

  onCancelAddMode(addMode: boolean) {
    this.addMode = addMode;
  }

  eee() {
    console.log(this.users.find(user => user.id === this.selectUser()));
  }
}
