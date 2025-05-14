import {Component, computed, input, output} from '@angular/core';

import { type User } from '../shared/user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  // @Input() avatar!: string;
  // @Input() name!: string;
  // @Output() select = new EventEmitter();
  // get imagePath () {
  //   return 'assets/users/' + this.avatar;
  // }
  selected = input.required<boolean>();
  user = input.required<User>();
  selectUser = output<string>();

  imagePath = computed(() => {
      return 'assets/users/' + this.user().avatar;
  });

onSelectUser() {
  this.selectUser.emit(this.user().id);
}

}
