import {computed, inject, Injectable, signal} from '@angular/core';
import {UserService} from './user.service';
import {DummyTasks} from './dummy-tasks';
import {type Task} from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private userService = inject(UserService);
  private _allTasks = signal<Task[]>(DummyTasks);
  private _selectedTask = signal<Task | null>(null);
  private _addMode = signal<boolean>(false);
  selectedTask = this._selectedTask.asReadonly();
  addMode = this._addMode.asReadonly();
  allTasks = this._allTasks.asReadonly();

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this._allTasks.set(JSON.parse(tasks));
    }
  }

  setSelectedTask(task: Task){
    this._selectedTask.set(task);
  }

  setAddMode(addMode: boolean){
    this._addMode.set(addMode);
  }

  filteredTasks = computed(() => {
    const selectedUser = this.userService.selectedUser();
    if (!selectedUser) return [];
    return this._allTasks().filter(task => task.userId === selectedUser.id);
  });

  addTask(task: Task) {
    this._allTasks.update(tasks => [...tasks, task]);
    this.saveTasks();
  }

  removeTask(id: string) {
    this._allTasks.set(this._allTasks().filter((task) => task.id !== id));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this._allTasks()));
  }

}
