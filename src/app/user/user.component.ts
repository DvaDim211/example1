import {Component, computed, inject, input} from '@angular/core';

import { type User } from '../shared/user.model';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  private userService = inject(UserService);
  selected = computed(() => this.user().id === this.userService.selectedUserId());
  user = input.required<User>();
  users = this.userService.allUsers

  imagePath = computed(() => {
      return 'assets/users/' + this.user().avatar;
  });

onSelectUserId() {
  const selectedUser = this.users().find(user => user.id === this.user().id);
  if (selectedUser) {
    this.userService.setSelectedUserId(this.user().id);
  }

}

}
