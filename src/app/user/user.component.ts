import {Component, computed, inject, input, output} from '@angular/core';

import { type User } from '../shared/user.model';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  private userService =inject(UserService);
  selected = input.required<boolean>();
  user = input.required<User>();

  selectUser = output<string>();

  imagePath = computed(() => {
      return 'assets/users/' + this.user().avatar;
  });

onSelectUserId() {
  this.selectUser.emit(this.user().id);
}

}
