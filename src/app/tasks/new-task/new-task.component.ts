import {Component, output} from '@angular/core';
import { type Task } from '../../shared/task.model';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  cancel = output<boolean>();

  onClickCancel () {
    this.cancel.emit(false);
  }

}
