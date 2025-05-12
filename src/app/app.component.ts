import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DummyUsers } from './shared/dummy-users';
import {TasksComponent} from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DummyUsers;
  selectedUser?:string  = '';
  onSelectUser(id: string) {
    this.selectedUser = id;
    console.log(id);
    console.log(this.selectedUser);
  }

}
