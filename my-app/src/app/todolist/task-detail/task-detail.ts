import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  standalone: false,
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.scss'
})
export class TaskDetail {
@Input() task: any;
@Output() saveClicked = new EventEmitter<any>();
isEditing = false;

startEdit() {
  this.isEditing = true;
}

saveEdit() {
  this.isEditing = false
  this.saveClicked.emit(this.task);
}

}
