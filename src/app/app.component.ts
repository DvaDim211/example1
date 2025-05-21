import {Component, inject} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DummyUsers } from './shared/dummy-users';
import {TasksComponent} from './tasks/tasks.component';
import {UserService} from './shared/user.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private userService = inject(UserService);
  users = this.userService.allUsers
  selectedUserId?:string  = '';
  onSelectUser(id: string) {
    this.selectedUserId = id;

    const selectedUser = this.users().find(user => user.id === id);
    if (selectedUser) {
      this.userService.setSelectedUserId(id);
    }
  }

}
