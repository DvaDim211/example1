import {computed, Injectable, signal} from '@angular/core';
import {DummyUsers} from './dummy-users';
import {User} from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _allUsers = signal<User[]>(DummyUsers);
  private _selectedUserId = signal<string | null>(null);
  allUsers = this._allUsers.asReadonly();
  selectedUserId = this._selectedUserId.asReadonly();

  setSelectedUserId(id: string){
    this._selectedUserId.set(id);
  }

  selectedUser = computed(() => {
    const id = this._selectedUserId();
    return this._allUsers().find(user => user.id === id) ?? null;
  });

  selectedName = computed(() => {
    return this.selectedUser()?.name
  })

}
